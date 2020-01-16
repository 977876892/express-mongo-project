const Joi = require('joi');

module.exports.create = async (req) => {
    let checkval = Joi.object().keys({
        "title": Joi.string().required(),
        "body": Joi.any()
    });
    return await Joi.validate(req, checkval, {abortEarly: false});  // err === null -> valid;
}