const mongoose = require("mongoose");

const Article = require('./model');
const User = mongoose.model("User");

const createArticle = async (user, data) => {
    const article = new Article(data);
    article.authorId = await User.findOne({ data });
    const query = await article.save(data);
    return query;
};

// const findArticles = async () => await Article.find({ authorId: { $nin: [null,''] } }).sort({title:1}).skip((num-1)*10).limit(10);
const findArticles = async () => await Article.find({ articleId: { $nin: [null, ''] } }).sort({ title: 1 });

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

}

const findOneAndUpdate = async (id, body) => {
    const query = await Article.findOneAndUpdate({ authorId: id }, body, { new: true });
    return query;
}

const updatemany = async (id, body) => {
    const query = await Article.updateMany({ authorId: id }, body);
    return query;
}

const aggregate = async () => {
    const query = await Article.aggregate([
        {
            $match: { body: { $nin: [null, ''] } },
        },
        {
            $lookup:
            {
                from: 'User',
                localField: 'authorId',
                foreignField: 'id',
                as: 'orderdetails'
            }
        }
    ]);
    return query;
}

const updateTitle = async (req) => {
    const query = await Article.update({ articleId: req.params.id }, { $set: req.body }, { upsert: true });
    // If you use {upsert:true} update time it will find search id if there it will update other wise it will create new recored
    return query;
}

const getprojectiondata = async (req) => {
    // const query = await Article.find({title: 'Tec' }, 'title');   // if you need filter that column
    const query = await Article.find({}, 'title'); // if you need all list data
    return query;
}

const paginationRes = async (req) => {
    var limit = 5;
    var skip = (parseInt(req.params.page) - 1) * limit;
    const query = await Article.find({ tags: { $gt: [] } }, 'title body tags').limit(limit).skip(skip); //if you want to find not equal to empty array	
    // const query = await Article.find({ tags: { $in: ["mongodb", "database", "NoSQL"] } }, 'title body tags').limit(limit).skip(skip); // if you want to find Values in an array	
    return query;
}

const searchtext = async (req) => {
    const query = await Article.find({ $text: { $search: req.params.search } }, 'title body');
    return query;
}
module.exports = {
    getprojectiondata,
    createArticle,
    findArticles,
    findDetails,
    updateArtcle,
    removeArtcle,
    deletemany,
    findOneAndUpdate,
    updatemany,
    aggregate,
    updateTitle,
    paginationRes,
    searchtext
};
