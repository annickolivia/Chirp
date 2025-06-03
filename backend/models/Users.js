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
    avatar: {
    type: String, // chemin ou nom du fichier
    default: null
  }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel