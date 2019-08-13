const express = require('express')
const path = require('path')
const Light = require('../domain/light').Light
const { LightRepository } = require('../repository/lightRepository')

const router = express.Router()

router.use(express.static(path.join(__dirname, './../public')))
router.get('/', async (req, res, next) => {
        res.sendFile('light.html',{
                root: path.join(__dirname, './../public/')
        })
})
router.get('/all', async (req, res, next) => {
        return LightRepository.getAll()
                .then((lights) => {
                        return res.status(200).send(JSON.stringify(lights))
                })
})
router.get('/luces/:id', async (req, res, next) => {
        return LightRepository.getById(req.params.id)
                .then((light) => {
                        console.log("paso por acá")
                        return res.status(200).send(JSON.stringify(light))
                })
})
router.post('/change', async (req, res, next) => {
        const newLight = Light.fromJson(req.body)
        newLight.id = 0
        return LightRepository.getById(newLight.id)
                .then((light) => {
                        if (!light) {
                                throw "No se encontró una luz con ese ID " + newLight.id 
                        }
                        return LightRepository.update(newLight)
                                .then((light) => {
                                        light.run()
                                        res.status(200).send(light)
                                })
                })
                .catch((error) => {
                        console.log(error)
                        res.status(400).send(error)
                })
})

module.exports = router