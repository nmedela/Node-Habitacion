const express = require('express')
const path = require('path')
const { SoundRepository } = require('.././repository/soundRepository')
const { soundService } = require('.././services/soundService')
// const Sound = require('./../domain/sound').Sound

const router = express.Router()

router.use(express.static(path.join(__dirname, './../public')))

router.get('/', async (req, res, next) => {
    res.sendFile('sound.html', {
        root: path.join(__dirname, './../public/')
    })
})

router.get('/all', async (req, res, newxt) => {
    return SoundRepository.getAll()
        .then((sounds) => {
            return res.status(200).send(JSON.stringify(sounds))
        })


})
router.get('/sounds/:id', async (req, res, next) => {
    var id = req.params.id
    console.log("paso por aca re piola", id)
    return soundService.getSoundById(id)
        .then((sound) => {
            console.log("paso por aca re piola", sound)
            return res.status(200).send(JSON.stringify(sound))
        })
        .catch((error) => {
            res.status(400).send(error)
        })
})
router.post('/change/:id/volumen', async (req, res, next) => {
    console.log(req.body)
    var id = req.params.id
    var value = parseInt(req.body.value)
    return soundService.changeVolumen(id, value)
        .then((sound) => {
            console.log('esto es lo que devuelvo', sound)
            res.status(200).send(JSON.stringify(sound))
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
})
router.post('/change/:id/bass', async (req, res, next) => {
    console.log(req.body)
    var id = req.params.id
    var value = parseInt(req.body.value)
    return soundService.changeBass(id, value)
        .then((sound) => {
            res.status(200).send(sound)
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(JSON.stringify(sound))
        })
})
router.post('/change/:id/treble', async (req, res, next) => {
    console.log(req.body)
    var id = req.params.id
    var value = parseInt(req.body.value)
    return soundService.changeTreble(id, value)
        .then((sound) => {
            res.status(200).send(JSON.stringify(sound))
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
})
router.post('/change/:id/balanceR', async (req, res, next) => {
    console.log(req.body)
    var id = req.params.id
    var value = parseInt(req.body.value)
    return soundService.changeBalanceR(id, value)
        .then((sound) => {
            res.status(200).send(JSON.stringify(sound))
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
})
router.post('/change/:id/balanceL', async (req, res, next) => {
    console.log(req.body)
    var id = req.params.id
    var value = parseInt(req.body.value)
    return soundService.changeBalanceL(id, value)
        .then((sound) => {
            res.status(200).send(JSON.stringify(sound))
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
})
router.post('/change/:id/mute', async (req, res, next) => {
    console.log("Paso por esta parte la del mute", req.body)
    var id = req.params.id
    var value = req.body.value

    return soundService.changeMute(id, value)
        .then((sound) => {
            res.status(200).send(JSON.stringify(sound))
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
})
router.post('/change/:id/power', async (req, res, next) => {
    var id = req.params.id
    var value = parseInt(req.body.value)
    console.log("apreto para modificar el power con valor", value)
    return soundService.changePower(id, value)
        .then((sound) => {
            res.status(200).send(JSON.stringify(sound))
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
})

module.exports = router