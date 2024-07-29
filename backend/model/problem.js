const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const problemSchema=new Schema({
    problemType:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
})

const Problem=mongoose.model('problem',problemSchema);
module.exports=Problem;