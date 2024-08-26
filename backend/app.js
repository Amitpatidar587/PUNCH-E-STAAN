const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");
const Problem=require('./model/problem');
const session=require('express-session');
const passport=require('passport');
const LocalStrategy=require('passport-local')

//controllers routes
const userRouter=require('./routes/user');
const eventRouter=require('./routes/event');
const schemeRouter=require('./routes/scheme');
const contactRouter=require('./routes/contact');
const expenditureRouter=require('./routes/expenditure');
const ExpressError = require("./utils/ExpressError");



app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connection to database
MONGO_URL = "mongodb://127.0.0.1:27017/punch";
main()
  .then(() => {
    console.log("connect to db");
  })
  .catch((error) => {
    console.log(error);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOption={
  secret:'mySuperSecretCode',
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now()+ 7 * 24 * 60 * 60 * 1000,  //7 day  ke liye agr loguot krne k baad wapis aate ho to login karne ki need nahi he isme =((day * hour * minute * second * milisecond ))he  
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly:true,
  }
};



app.use(session(sessionOption))


app.use(passport.initialize())
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use('/',userRouter);
app.use('/events',eventRouter);
app.use('/schemes',schemeRouter);
app.use('/contacts',contactRouter);
app.use('/expenditures',expenditureRouter);



//problem get
app.get('/users/:id/problems',async(req,res)=>{
  let{id}=req.params;
  let user=await User.findById(id).populate('problems');
  res.json(user);
})
app.post('/users/:id/problems',async(req,res)=>{
    let {id}=req.params;
    let user=await User.findById(id);
    let newProblem=new Problem(req.body.problem);
    user.problems.push(newProblem);
    await newProblem.save();
    await user.save();
    res.json({message:'problem addded'});
})
app.put('/users/:id/problems/:pId',async(req,res)=>{
  let{pId}=req.params;
  let problem=req.body.problem;
  await Problem.findByIdAndUpdate(pId,{...problem});
  res.json({message:"problem updated"});
})
app.delete('/users/:id/problems/:pId',async(req,res)=>{
  let{id,pId}=req.params;
  console.log('id=>',id,"pid=>",pId)
  await Problem.findByIdAndDelete(pId);
  await User.findByIdAndUpdate(id,{$pull:{problems:pId}});
  res.json({message:'problem deleted'})
})
app.get('/problems',async(req,res)=>{
  let problems =await Problem.find({})
  console.log('problems=>',problems);
  res.json(problems);
})


app.all('*',(req,res,next)=>{
  console.log('page not found')
  next(new ExpressError(404,'page not found'))
})
app.use((err,req,res,next)=>{
  let{statusCode,message}=err;
  res.json({error:message})
})

app.listen(8080, () => {
  console.log("port is listing");
});
