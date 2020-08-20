
const Items = require('./model');

exports.createitem = async (body) => {
    const query = await Items.create(body);
    return query;
}

exports.updateitem = async (body) => {
    for (let eachitem of body) {
       await Items.updateOne({ itemId: eachitem.itemId }, { type: eachitem.type,title: eachitem.title });
    }
    return true;
}

exports.getitem = async () => {
    return await Items.find({}, 'title type itemId');
}