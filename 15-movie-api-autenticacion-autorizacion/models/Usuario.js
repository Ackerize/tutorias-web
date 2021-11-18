const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', userSchema);