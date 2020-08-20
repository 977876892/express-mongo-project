const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    type: { type: String, unique: true,uniqueCaseInsensitive: true  },
    title: { type: String },
    itemId: { type: Number, required: true },
}, {
    timestamps: true,
});
autoIncrement.initialize(mongoose.connection);
itemSchema.plugin(uniqueValidator, { message: 'already exists' });

itemSchema.plugin(autoIncrement.plugin, {
    model: 'Items',
    field: 'itemId',
    startAt: 1,
    incrementBy: 1
});
// itemSchema.index({type:1},{unique:true});

const item = mongoose.model("Items", itemSchema);
module.exports = item;
