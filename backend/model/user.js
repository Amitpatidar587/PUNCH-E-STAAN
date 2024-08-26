const mongoose=require('mongoose');
const Problem = require('./problem');
const Schema=mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');

const UserSchema=new Schema({
    
    contact:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
        unique:true,
    },
    category:{
        type:String,
        enum:['sarpunch','user'],
        default:'user',
    },
    problems:[
        {
            type:Schema.Types.ObjectId,
            ref:'Problem'
        }
    ]  
})

UserSchema.plugin(passportLocalMongoose);
UserSchema.post('findOneAndDelete',async(user)=>{
    if(user){
        await Problem.deleteMany({_id:{$in:user.problems}})
    }
})


const User=mongoose.model('Register',UserSchema)

module.exports=User;