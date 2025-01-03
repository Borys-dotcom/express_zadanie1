const { default: mongoose } = require("mongoose");

const User = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String,
        }
    },
    phone: String,
    website: String,
    company: {
        name: String,
        catchPhrase: String,
        bs: String,
    }
},
{
    timestamps: true,
    collection: "users_express"
})

module.exports = mongoose.model("User", User);