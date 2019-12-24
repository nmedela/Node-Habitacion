const express = require('express')
const path = require('path')
const {SoundRepository} = require('.././repository/soundRepository')
// const Sound = require('./../domain/sound').Sound

const router = express.Router()

router.use(express.static(path.join(__dirname, './../public')))

router.get('/', async (req, res, next) => {
    res.sendFile('sound.html', {
        root: path.join(__dirname, './../public/')
    })
})

router.get('/all', async (req,res, newxt) => {
    return SoundRepository.getAll()
        .then((sounds) =>{
            return res.status(200).send(JSON.stringify(sounds))
        })
        

})

module.exports = router