const mongoose = require("mongoose");

const Article = mongoose.model("Article");
const User = mongoose.model("User");

const createArticle = async (user, data) => {
    const { id } = user.user.id;
    const article = new Article(data);
    article.authorId = user.user.id;
    // article.authorId = await User.findOne({ data });
    // console.log(article)
    const query = await article.save();
    return query;
};

// const findArticles = async () => await Article.find({ authorId: { $nin: [null,''] } }).sort({title:1}).skip((num-1)*10).limit(10);
const findArticles = async () => await Article.find({ authorId: { $nin: [null, ''] } }).sort({ title: 1 });

const findDetails = async (id) => {
    const query = await Article.findOne({ articleId: id, authorId: { $nin: [null, ''] } });
    return query;
};

// const updateArtcle = (param,data)=> Article.findOneAndUpdate({_id:param},data)
const updateArtcle = async (param, data) => {
    const query = await Article.update({ articleId: +param }, data);
    return query;
};

const removeArtcle = (param) => Article.remove({ articleId: param });

const deletemany = async (id) => {
    const query = await Article.deleteMany({ authorId: id });
    return query;
}

module.exports = {
    createArticle,
    findArticles,
    findDetails,
    updateArtcle,
    removeArtcle,
    deletemany
};
