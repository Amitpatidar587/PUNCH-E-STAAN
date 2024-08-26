const {eventSchema,problemSchema,schemeSchema,expenditureSchema,contactSchema}=require('./schema');



module.exports.validateEvent=(req,res,next)=>{
    let {error}=eventSchema.validate(req.body);
    if(error){
        return res.json({error:'plaese enter valid data'});
    }
    else{
        next();
    }
}
module.exports.validateScheme=(req,res,next)=>{
    let {error}=schemeSchema.validate(req.body);
    if(error){
        return res.json({error:'plaese enter valid data'});
    }
    else{
        next();
    }
}
module.exports.validateContact=(req,res,next)=>{
    let {error}=contactSchema.validate(req.body);
    if(error){
        return res.json({error:'plaese enter valid data'});
    }
    else{
        next();
    }
}
module.exports.validateProblem=(req,res,next)=>{
    let {error}=problemSchema.validate(req.body);
    if(error){
        return res.json({error:'plaese enter valid data'});
    }
    else{
        next();
    }
}
module.exports.validateExpenditure=(req,res,next)=>{
    let {error}=expenditureSchema.validate(req.body);
    if(error){
        return res.json({error:'plaese enter valid data'});
    }
    else{
        next();
    }
}