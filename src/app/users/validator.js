const Joi = require('joi');

module.exports.create = async(req)=>{
 let checkval = Joi.object().keys({
        "username": Joi.string().required(),
        "password": Joi.string().required(),
        "firstname": Joi.string().required(),
        "lastname": Joi.string().allow('',null),
        "email": Joi.string().required(),
        "bday": Joi.string().allow('',null),
        "address": Joi.string().allow('',null),
        "phone": Joi.string().allow('',null),
        "pin": Joi.string().allow('',null),
        "itemType": Joi.string().required(),
        "gender":Joi.string().valid(['male','female','other'])
    });
    return await Joi.validate(req, checkval, { abortEarly: false });  // err === null -> valid;
}