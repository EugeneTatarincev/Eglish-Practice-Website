const { Router } = require('express')
const User = require('../models/Todo')
const router = Router()

router.get('/presentSimple', async (req, response) => {

    const res = await User.find({})
    
    response.render('main.hbs', {
        names: res[0].names,
        label: res[0].label,
        p: res[0].p
    })
    
})

router.get('/pastSimple', async (req, response) => {

    const res = await User.find({})
    
    response.render('main.hbs', {
        names: res[1].names,
        label: res[1].label,
        p: res[1].p
    })
    
})

router.get('/futureSimple', async (req, response) => {

    const res = await User.find({})
    
    response.render('main.hbs', {
        names: res[2].names,
        label: res[2].label,
        p: res[2].p
    })
    
})

module.exports = router