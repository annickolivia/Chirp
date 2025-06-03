const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    infos : {
        ville: String,
        pays: String,
        number: String,
        bio: String
    },
    avatar: String,
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel