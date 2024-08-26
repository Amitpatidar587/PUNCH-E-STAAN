const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const problemSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
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
    status: {
        type: String,
        enum: ['pending', 'solved'],
        default: 'pending' // Default value if not specified
      }
})

const Problem=mongoose.model('Problem',problemSchema);
module.exports=Problem;