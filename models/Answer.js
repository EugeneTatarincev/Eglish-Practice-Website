const { Schema, model } = require('mongoose')

const schema = new Schema({
    type: String,
    answers: [String]
})

module.exports = model('Answer', schema)