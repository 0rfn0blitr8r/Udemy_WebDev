let mongoose = require('mongoose');
let { Schema } = mongoose;

let farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    }
})

let Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;