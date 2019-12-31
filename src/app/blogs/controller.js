var multer = require('multer');
var util = require('util')
var path = require('path');
// file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var single = util.promisify(multer({ storage: storage }).single('blogimage'))
var multiple = util.promisify(multer({ storage: storage }).any())

exports.multipleupload = async (req, res) => {
    try {
        await multiple(req, res);
        var fileinfo = req.files;
        res.send(fileinfo);

    } catch (err) {
        res.send(err);
    }
};

exports.singleupload = async (req, res) => {
    try {
        await single(req, res);
        var fileinfo = req.file;
        res.send(fileinfo);

    } catch (err) {
        res.send(err);
    }
};