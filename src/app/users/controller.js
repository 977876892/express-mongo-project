const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");

exports.register = async (req, res) => {
    // const { user } = req;
    // if (user) {
    //     logger.error("User already exists");
    //     res.preconditionFailed("existing_user");
    //     return;
    // }


    try {
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
        res.send(err);
    }
};

exports.edit = async (req, res) => {
    try {
        const user = await repository.findUser(req.user.id);
        const editedUser = await repository.editUser(user, req.body);
        res.success(extractObject(
            editedUser,
            ["id", "username"],
        ));
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
