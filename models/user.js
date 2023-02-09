const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    hashed: {
        type: String,
        required: true,
    },
    }, {
        collection: 'user'
});

const User = mongoose.model("User", UserSchema);

module.exports = User;