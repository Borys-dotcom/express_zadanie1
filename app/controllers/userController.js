const User = require("../models/userModel");

module.exports = {
  findAll: (req, res) => {
    User.find({})
      .lean()
      .then((users) => {
        res.render("usersList", {
          users: users,
        });
      });
  },
};
