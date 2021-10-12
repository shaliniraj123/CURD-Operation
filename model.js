const mongoose = require('mongoose');

var schema = new mongoose.Schema({
     Q.no: {
        type : String,
        required: true
    },
    subject : {
        type: String,
        required: true,
        unique: true
    },
    marks : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;