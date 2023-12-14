const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timerSchema = new Schema ({
    user_id: {
        type: String,
        required: true,
    },
    time: {
        type: Datetime,
        required: true,
    }
})

module.exports = mongoose.model('Time', timerSchema);