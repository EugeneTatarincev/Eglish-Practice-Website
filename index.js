const mongoose = require('mongoose')
const hbs = require('hbs')
const express = require('express')
const User = require('./models/Todo')
const answerRouts = require('./routs/answers')
const tensesRouts = require('./routs/tenses')
const mdbUrl = "mongodb://localhost:27017/attemptOne"

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use('/answer', answerRouts)
app.use('/tense', tensesRouts)

hbs.registerHelper('createLabels', (label, p, names) => {
    let result = ''

    for(let j = 0; j < p.length; j++ ) {
        result += `<div class="form-point"> 
                    <p> ${p[j]}</p>`
        for(let i = 0; i < label[j].length; i++) {
            result += `<div class="form-check">
                        <input value="${label[j][i]}" type="radio" name="${names[j]}" class="form-check-input>
                        <label class="form-check-label"> ${label[j][i]} </label>
                        </div>`
        }
        result += '</div>'
    }

    return new hbs.SafeString(result)

})

mongoose.connect(mdbUrl, {useNewUrlParser: true}, (e) => {
    if(e) console.log(e)

    app.listen(3000, () => {
        console.log('Server is listening...')
    })
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + 'public/index.html')
// })



