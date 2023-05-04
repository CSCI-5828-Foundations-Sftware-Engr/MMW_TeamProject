const mongoose = require('mongoose');

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    recipes: {
        type: [],
    },
    shoprecipes: {
        type: []

    }
});

module.exports = mongoose.model('users', UserSchema);