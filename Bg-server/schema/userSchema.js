const mongoose = require('mongoose')
//email, password, username, useUrl,mobile,Address
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },
    useUrl: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },

    timeManagment: {
        type: Boolean,
        default: true
    },
    timeStatus: {
        type: String
    },
    dateStatus: {
        type: String
    }

})





module.exports = userSchema