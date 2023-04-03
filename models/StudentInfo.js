const { Schema, model } = require('mongoose')

const StudentInfoSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    schedule: {
        type: [String],
        default: []
    }
})

const StudentInfo = model('StudentInfo', StudentInfoSchema)

module.exports = StudentInfo