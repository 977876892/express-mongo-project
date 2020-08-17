const mongoose = require("mongoose");

const User = mongoose.model("User");

const saveUser = (data) => {
    const user = new User(data);
    user.setPass(data.password);
    return user.save();
};

const editUser =async (user, data) => {
    const query = await User.update({ id: user.id }, data);
    return query;
};

const deleteUser = (user) => user.remove();

const findUser = (id) => User.findOne({ id });

const getUser = (name) => User.findOne({ username: name.username });

module.exports = {
    saveUser,
    editUser,
    deleteUser,
    findUser,
    getUser
};
