const express = require('express')
const path = require('path')
const Light = require('../domain/light').Light
const OptionProgram = require('./../domain/programLight').OptionProgram
const { LightRepository } = require('../repository/lightRepository')
const { OptionRepository } = require('../repository/optionRepository')
const { lightService } = require('./../services/lightService')
const listSteps = require('./../domain/programLight').listSteps


const router = express.Router()

router.use(express.static(path.join(__dirname, './../public')))
router.get('/', async (req, res, next) => {
        res.sendFile('light.html', {
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
        var id = req.params.id
        return lightService.getLightById(id)
                .then((light) => {
                        return res.status(200).send(JSON.stringify(light))
                })
                .catch((error) => {
                        res.status(400).send(error)
                })
})
router.post('/change', async (req, res, next) => {

        console.log(req.body)
        const newLight = Light.fromObject(req.body)
        newLight.id = 0 // acordarse de sacar esto ino no va a funcionar nunca (creo que lo puse para que cualquera de las 2 luces que aprete me tire la que funca)
        return lightService.changeLight(newLight)
                .then((newLight) => {
                        console.log("Se modificó el estado de la luz ", newLight)
                        res.status(200).send(newLight)
                })

                .catch((error) => {
                        res.status(400).send(error)
                })
})
router.get('/steps', async (req, res, next) => {

        return lightService.getAll()
                .then((light) => {
                        console.log('Esto es lo que trae el 2 ,', listSteps[2])
                        listSteps[2].list = light
                        res.status(200).send(JSON.stringify(listSteps))
                })


})


router.get('/program/all', async (req, res, next) => {
        return OptionRepository.getAll()
                .then((options) => {
                        return res.status(200).send(JSON.stringify(options))
                })
})
router.get('/program/:id', async (req, res, next) => {
        var id = req.params.id
        return lightService.getOptionById(id)
                .then((option) => {
                        return res.status(200).send(JSON.stringify(option))
                })
                .catch((error) => {
                        res.status(400).send(error)
                })
})

router.post('/program', async (req, res, next) => {
        /*
        recibo 
                started: Date.now() milisegundos,
                frecuency: index,
                action: index,
                light: {id,intensity,title}
                time: 'XX:XX'
        */

        console.log('recibo esto del body', req.body)
        const newOption = OptionProgram.fromObject(req.body)
        console.log("Aca lo converti en option ", newOption)
        // return lightService.createOption(newOption)
        return OptionRepository.create(newOption)
                .then((newOption) => {
                        res.status(200).send(JSON.stringify(newOption))
                })
                .catch((error) => {
                        console.log("tira error ", error)
                        res.status(400).send(error)
                })
})
router.delete('/program/:id', async (req, res, next) => {
        var id = req.params.id
        return lightService.getOptionById(id)
        .then((option) => {
                console.log("ahora quiere borrar esto: ", option)
                OptionRepository.delete(option)
                res.status(200).send(JSON.stringify(option))
        })
                .catch((error) => {
                        console.log("error de delete, ", error)
                        res.status(400).send(JSON.stringify(error))
                })
})

module.exports = router