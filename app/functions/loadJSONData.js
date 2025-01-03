const fs = require("fs");
const path = require("path");
const User = require('../models/userModel');

const loadJSONData = () => {
  fs.readFile(path.join(__dirname, "../../users.json"), (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    JSON.parse(data).forEach((user) => {
      let newUser = User(user);

      User.find(user).then((userSearchResult) => {
        if (userSearchResult.length === 0) {
          newUser.save().then(() => {
            console.log("user saved");
          });
        } else {
          console.log("user already exist");
        }
      });
    });
  });
};

module.exports = loadJSONData;