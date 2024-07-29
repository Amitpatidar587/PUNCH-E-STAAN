const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const contactSchema=new Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    profession:{
        type:String,
        required:true,
    },
    
})
const Contact=mongoose.model('contact',contactSchema)

module.exports=Contact;