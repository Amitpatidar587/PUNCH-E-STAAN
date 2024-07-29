const mongoose=require('mongoose');
const Problem = require('./problem');
const Schema=mongoose.Schema;

const RegisterSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    problems:[
        {
            type:Schema.Types.ObjectId,
            ref:'Problem'

        }
    ]  
})

RegisterSchema.post('findOneAndDelete',async(user)=>{
    if(user){
        await Problem.deleteMany({_id:{$in:user.problems}})
    }
})



const Register=mongoose.model('Register',RegisterSchema)

module.exports=Register;