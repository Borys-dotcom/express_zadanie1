const User = require("../models/userModel")

module.exports = {
    findAll: (req, res) => {
        User.find({}).then((users) => {
            res.status(200).json(users);
        });
    }
}
