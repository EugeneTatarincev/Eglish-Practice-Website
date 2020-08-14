const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: String,
    p: [String],
    label: {
        type: [[String]]
    },
    names: [String]
})

module.exports = model('Tense', schema)