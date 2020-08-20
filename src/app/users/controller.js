const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");
var crypto = require('crypto')
const session = require('../session/controller');
const vali = require('./validator');
exports.register = async (req, res) => {
    const { user } = req;
    if (user) {
        logger.error("User already exists");
        res.preconditionFailed("existing_user");
        return;
    }


    try {
        await vali.create(req.body);
        
        const checkExistUser = await repository.getUser(req.body);
        
        if (!checkExistUser) {
            
            const savedUser = await repository.saveUser(req.body);
            res.success(extractObject(
                savedUser,
                ["id", "username"],
            ));
        } else {
            logger.error("User already exists");
            res.preconditionFailed("existing_user");
            return;
        }
    } catch (err) {
        
        res.status(400).json({ status: false, data: err });
    }
};

exports.edit = async (req, res) => {
    try {
        const user = await repository.findUser(req.user.id);
        const editedUser = await repository.editUser(user, req.body);
        if (editedUser.n > 0) {
            const user = await repository.findUser(req.user.id);
            res.status(200).json({ status: true, message: "update successfully", data: user });
        } else {
            res.status(400).json({ status: false, id: req.params.id, message: "Invalid ID" });
        }
    } catch (err) {
        res.send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await repository.findUser(req.user.id);
        const deletedUser = await repository.deleteUser(user, req.body);
        res.success(extractObject(
            deletedUser,
            ["id", "username"],
        ));
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

exports.login = async (req, res) => {
    try {
        const checkExistUser = await repository.getUser(req.body);
        if (checkExistUser && crypto.createHash('md5').update(req.body.password).digest('hex') == checkExistUser.password) {
            const validtoken = await session.apipasslogintoken(req.body);
            res.status(200).json({ status: true, message: "Login successfully", data: checkExistUser, token: validtoken });
        } else {
            res.status(200).json({ status: false, message: "Login Failure: Invalid username or password" });
        }
    } catch (err) {
        res.send(err);
    }
};
