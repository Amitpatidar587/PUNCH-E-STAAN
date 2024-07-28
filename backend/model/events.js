const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const eventSchema=new Schema({
    image:{
        type:String,
        default:'https://media.istockphoto.com/id/494568744/photo/diwali.jpg?s=612x612&w=0&k=20&c=XuWugY3FmIqacFNPlXpkJqMNyoAnHG_11l415qQBE-Y=',
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    date:{
        type:Date,
        required:true,
    },
    info:{
        type:String,
        required:true,
    }
    
})

const Event=mongoose.model("Events",eventSchema);

module.exports=Event;