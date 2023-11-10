const express = require('express')
const path = require('path')
// const Sound = require('./../domain/sound').Sound
const { ring } = require('.././services/telegramBot')
const router = express.Router()
const mqtt = require('mqtt')
const e = require('express')

router.use(express.static(path.join(__dirname, './../public')))

router.get('/', async (req, res, next) => {
    res.sendFile('sound.html', {
        root: path.join(__dirname, './../public/')
    })
})

router.post('/ring', async (req, res, next) => {
    console.log('sonoo')
    return ring()
        .then(() => {
            // console.log('esto es lo que devuelvo', sound)
            res.status(200).send("ok")
        })
        .catch((error) => {
            console.log(error)
            res.status(500).send(error)
        })
})

module.exports = router
