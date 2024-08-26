const joi=require('joi');
const Problem = require('./model/problem');


module.exports.eventSchema=joi.object({
    event:joi.object({
        title:joi.string().required(),
        date:joi.date().required(),
        image:joi.string().required().allow('',null),
        info:joi.string().required(),
    }).required()
})
module.exports.schemeSchema=joi.object({
    scheme:joi.object({
        title:joi.string().required(),
        applicableType:joi.string().required(),
        registerLink:joi.string().required(),
        details:joi.string().required(),
    
    }).required()
})
module.exports.expenditureSchema=joi.object({
    area:joi.object({
        category:joi.string().required(),
        amountPass:joi.number().min(0).required(),
        invested:joi.number().required().min(0),
    }).required()
})
module.exports.contactSchema=joi.object({
    employee:joi.object({
        image:joi.string().required().allow('',null),
        name:joi.string().required(),
        profession:joi.string().required(),
        email:joi.string().required(),
        phone:joi.number().required().min(0),
    }).required()
})

module.exports.problemSchema=joi.object({
    Problem:joi.object({
        name:joi.string().required(),
        contact:joi.number().required(),
        address:joi.string().required(),
        problemType:joi.string().required(),
        description:joi.string().required(),
        status:joi.string().required(),
    })
})