const utilities = require("../../utilities");
const repository = require("./repository");
var fs = require("fs");
var path = require('path');
var validator = require('./validator');

exports.create = async (req, res) => {
    try {
        const user = req;
        await validator.create(req.body);
        const article = await repository.createArticle(user, req.body);
        res.success(utilities.extractObject(
            article,
            ["articleId", "title", "body"],
        ));
    } catch (err) {
        res.send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const body = req.body;
        const findaArt = await repository.updateArtcle(req.params.id, body);
        if (findaArt.n > 0) {
            res.status(200).json({ status: true, id: req.params.id, message: "update successfully" });
        } else {
            res.status(400).json({ status: false, id: req.params.id, message: "Invalid ID" });
        }
    } catch (err) {
        res.send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const artdelete = await repository.removeArtcle(req.params.id);
        if (artdelete.n > 0) {
            res.status(200).json({ status: true, id: req.params.id, message: "deleted successfully" });
        } else {
            res.status(400).json({ status: false, id: req.params.id, message: "Invalid ID" });
        }
    } catch (err) {
        res.send(err);
    }
};

exports.list = async (req, res) => {
    try {
        const inpu = path.join(__dirname, 'input.txt');


        // Asynchronous - Opening File
        console.log("Going to open file!");
        fs.open(inpu, 'r+', function (err, fd) {
            if (err) {
                return console.error(err);
            }
            // console.log("File opened successfully!");
        });


        //write file
        fs.writeFile(inpu, 'Simply Easy Learning!', function (err) {
            if (err) {
                return console.error(err);
            }
        });

        // Asynchronous read
        fs.readFile(inpu, function (err, data) {
            if (err) {
                return console.error(err);
            }
            // console.log("Asynchronous read: " + data.toString());
        });

        // console.log('__filename',__filename)
        // console.log('__dirname',__dirname)
        console.log('req.cookies', req.cookies)





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

exports.deletemany = async (req, res) => {
    try {
        const delemany = await repository.deletemany(req.params.id);
        if (delemany.n > 0) {
            res.status(200).json({ status: true, id: req.params.id, message: "all deleted successfully" });
        } else {
            res.status(400).json({ status: false, id: req.params.id, message: "Invalid IDs" });
        }
    } catch (err) { res.send(err) }
};

exports.findOneAndUpdate = async (req, res) => {
    try {
        const findandupdate = await repository.findOneAndUpdate(req.params.id, req.body);
        res.send(findandupdate)
    } catch (err) {

    }
}

exports.updatemany = async (req, res) => {
    try {
        const updatemany = await repository.updatemany(req.params.id, req.body);
        if (updatemany.n > 0) {
            res.status(200).json({ status: true, id: req.params.id, message: "update successfully" });
        } else {
            res.status(400).json({ status: false, id: req.params.id, message: "Invalid ID" });
        }
    } catch (err) {

    }
}

