const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // authorId: { type: Number, ref: "User" },
    articleId: { type: Number, required: true },
    tags: {type: Array}
}, {
    timestamps: true,
});
articleSchema.plugin(autoIncrement.plugin, {
    model: 'Article',
    field: 'articleId',
    startAt: 1,
    incrementBy: 1
});
articleSchema.index({'$**': 'text'});
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
