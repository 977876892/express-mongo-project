const repository = require("./repository");
const validator = require("./validator");

exports.create = async (req, res) => {
    try {
        await validator.create(req.body);
        const saveitem = await repository.createitem(req.body);
        res.status(200).json({ status: true, message: "created successfully" });
    } catch (err) {
        res.status(400).json({ status: false, message: err });
    }
};

exports.update = async (req, res) => {
    try {
        // await validator.create(req.body);
        // const updateItems = await repository.updateitem(req.body);
        console.log(req.body)
        const updateItems = await repository.updateitem(req.body);
        res.status(200).json({ status: true, data: updateItems });
    } catch (err) {
        res.status(400).json({ status: false, message: err });
    }
}

exports.get = async (req, res) => {
    try {
        const getItems = await repository.getitem();
        res.status(200).json({ status: true, data: getItems });
    } catch (err) { res.status(400).json({ status: false, message: err }); }
}
