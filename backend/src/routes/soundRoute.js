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
router.post('/change/:id/volumen', async (req, res, next) => {
    console.log(req.body)
    var id = req.params.id
    var value = req.body.value
    return soundService.changeVolumen(id, value)
        .then((sound) => {
            res.status(200).send(sound)
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })

})

module.exports = router