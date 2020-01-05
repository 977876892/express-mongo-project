const utilities = require("../../utilities");
const repository = require("./repository");

exports.create = async (req, res) => {
    try {
        console.log('---', req)
        const user = req;
        const article = await repository.createArticle(user, req.body);
        res.success(utilities.extractObject(
            article,
            ["id", "title", "body"],
        ));
    } catch (err) {
        res.send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const body = req.body;
        const details = await repository.findDetails(req.params.id);
        const findaArt = await repository.updateArtcle(req.params.id, body);
        res.success(findaArt);

    } catch (err) {
        res.send(err);
    }
};

exports.delete = (req, res) => {
    res.success();
};

exports.list = async (req, res) => {
    try {
        const articles = await repository.findArticles();
        res.success(articles);
    } catch (err) {
        res.send(err);
    }
};

exports.detail = async (req, res) => {
    try {
        console.log('-=-=', req.params.id)
        const details = await repository.findDetails(req.params.id);
        res.success(details);
    } catch (err) {
        res.send(err);
    }
};

