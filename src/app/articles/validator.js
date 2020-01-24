const Joi = require('joi');

module.exports.create = async (req) => {
    let checkval = Joi.object().keys({
        "title": Joi.string().required(),
        "body": Joi.any()
    });
    return await Joi.validate(req, checkval, { abortEarly: false });  // err === null -> valid;
}


module.exports.updatetitle = async (req) => {
    let titleObj = Joi.object().keys({
        "title": Joi.string().required()
    });
    return await Joi.validate(req, titleObj, { abortEarly: false });
}