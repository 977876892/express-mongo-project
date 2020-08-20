const Joi = require('joi');

exports.create = async (req) => {
    const itemsArray = Joi.array().items(
        Joi.object().keys({
            "title": Joi.string(),
            "type": Joi.string().required(),
        }));
    return await Joi.validate(req, itemsArray, { abortEarly: false });
}