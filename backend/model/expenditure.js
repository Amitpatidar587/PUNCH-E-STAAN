const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const ExpenSchema=new Schema({
    category:{
        type:String,
        required:true
    },
    amountPass:{
        type:Number,
        require:true, 
    },
    invested:{
        type:Number,
        required:true,
    }
})
const Expenditure=mongoose.model('Expenditures',ExpenSchema);

module.exports=Expenditure;