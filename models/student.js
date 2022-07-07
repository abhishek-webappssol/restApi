const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    tech: {
        type: String,
        require: true
    },
    subscribe: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model('Student', studentSchema)