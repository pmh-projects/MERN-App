const mongoose = require('mongoose');

const EqSchema = new mongoose.Schema({
    eqName: {
        type:String,
        required: true,
    },
    eqNum: {
        type: Number,
        required: true
    }

});

const Eq = mongoose.model("Eq", EqSchema);
module.exports = Eq