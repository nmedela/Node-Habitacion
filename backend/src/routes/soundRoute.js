const express = require('express')
const path = require('path')
// const Sound = require('./../domain/sound').Sound

const router = express.Router()

router.use(express.static(path.join(__dirname, './../public')))

router.get('/', async (req, res, next) => {
    res.sendFile('sound.html', {
        root: path.join(__dirname, './../public/')
    })
})


module.exports = router