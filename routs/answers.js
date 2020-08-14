const { Router } = require('express')
const Answer = require('../models/Answer')
const router = Router()

router.get('/:answerId', async (req, response) => {
    const res = await Answer.find({})

    let array = []

    for(let i = 0; i < res.length; i++) {
        if(res[i].type === req.params['answerId']) {
            array = res[i].answers
        }
    }

    response.json({key: array})
})

module.exports = router