const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Register = require("./model/register");
const cors = require("cors");
const Event=require('./model/events');
const Scheme=require('./model/scheme')
const bodyParser = require("body-parser");

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

//register api
app.post("/register", async (req, res) => {
  try {
    const { name, contact, email, password } = req.body;
    console.log("data=>", name, contact, email, password);
    const user = await Register.findOne({ email });
    if (user) {
      res.json({ message: "User ID already exist" });
    } else {
      const newUser = new Register({ name, contact, email, password });
      await newUser
        .save()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      res.json({ message: "User Register successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("user =>", email, password);
    const user = await Register.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.json({ message: true });
      } else {
        res.json({ message: 'invalid password please try again' });
      }
    } else {
      res.json({ message: 'invalid user please try again'  });
    }
  } catch (error) {
    console.log(error);
  }
});


//events pass
app.get('/events',async(req,res)=>{
  const data=await Event.find({});
  console.log('data=>',data)
  res.json(data);
})

//scheme pass
app.get('/schemes',async(req,res)=>{
  const data=await Scheme.find({});
  console.log('data=>',data)
  res.json(data);
})



app.listen(8080, () => {
  console.log("port is listing");
});
