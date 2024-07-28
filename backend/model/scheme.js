const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const schemeSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    applicableType:{
        type:String,
        required:true,
    },
    registerLink:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    }


})


const Scheme=mongoose.model('Scheme',schemeSchema);

module.exports=Scheme;