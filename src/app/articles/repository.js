const mongoose = require("mongoose");

const Article = mongoose.model("Article");
const User = mongoose.model("User");

const createArticle = async (user, data) => {
    const { id } = user;
    const article = new Article(data);
    article.authorId = await User.findOne({ data });
    const query = await article.save();
    return query;
};

const findArticles = () => Article.find();

const findDetails = async (id) => {
    const query = await Article.findOne({ _id: id });
    return query;
};

// const updateArtcle = (param,data)=> Article.findOneAndUpdate({_id:param},data)
const updateArtcle = async (param, data) => {
    // const article = new Article(data);
    const query = await Article.update({ _id: param }, data);
    return query;
};

module.exports = {
    createArticle,
    findArticles,
    findDetails,
    updateArtcle
};
