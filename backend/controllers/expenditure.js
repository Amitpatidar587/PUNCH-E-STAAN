const Expenditure=require('../model/expenditure');



module.exports.showExpenditure=async(req,res)=>{
    let expendData=await Expenditure.find({});
    res.json(expendData)
  }
module.exports.addExpenditure=async(req,res)=>{
    let area=req.body.area;
    let newExpenditure=new Expenditure(area);
   await newExpenditure.save();
   console.log('data=>',newExpenditure);
    res.json({message:'new expend is added'})
  }

module.exports.updateExpenditure=async(req,res)=>{
    let {id}=req.params;
    let area=req.body.area;
    let updateExpend=await Expenditure.findByIdAndUpdate(id,{...area}); 
    console.log('data=>',updateExpend);
    res.json({message:"expend is updated"})
  
  }

module.exports.deleteExpenditure=async(req,res)=>{
    let {id}=req.params;
    let deleteExpend=await Expenditure.findByIdAndDelete(id);
    res.json({message:'expend is deleted'})
  }