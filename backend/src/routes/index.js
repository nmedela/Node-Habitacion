const express = require('express')
const path = require('path')
const appRouter = express.Router()
const bodyParser = require('body-parser')

const cors = require('cors')
const lightRouter = require('./lightRoute')
const soundRouter = require('./soundRoute')
const tvRouter = require('./tvRoute')
const curtainRouter = require('./curtainRoute')
const cameraRouter = require('./cameraRoute')
const notificationRouter = require('./notificationRoute')
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:9000')

client.on('connect', () => {
    client.subscribe('sound/action', (err) => {
        if (!err) {
            console.log("se suscribio a sound con exito")
        }
    })
    client.subscribe('light/action', (err) => {
        if (!err) {
            console.log("se suscribio a light con exito")
        }
    })
})

client.on('message', (topic, message) => {
    console.log('viene un mensaje del topico ', topic)
    console.log('Este es el mensaje: ', JSON.parse(message.toString()))

})

appRouter.use(cors())
appRouter.use(bodyParser.json())

appRouter.use('/light', lightRouter)
appRouter.use('/sound', soundRouter)
appRouter.use('/notification', notificationRouter)

appRouter.post('/sound/action', async (req, res, next) => {
    console.log('se envia action sonido')
    client.publish('sound/action', JSON.stringify(req.body))
    return res.status(200).send("ok")
})

appRouter.post('/light/action', async (req, res, next) => {
    console.log('se envia action a luz')
    client.publish('light/action', JSON.stringify(req.body))
    return res.status(200).send("ok")
})

// appRouter.use('/tv', tvRouter)
// appRouter.use('/curtain', curtainRouter)
// appRouter.use('/camera', cameraRouter)
/*
VOL_INC =  "volume_inc"
VOL_DEC =  "volume_dec"
BASS_INC =  "bass_inc"
BASS_DEC =  "bass_dec"
TREBLE_INC = "treble_inc"
TREBLE_DEC =  "treble_dec"
GAIN_INC =  "gain_inc"
GAIN_DEC =  "gain_dec"
BALANCE_LEFT =  "balance_left"
BALANCE_RIGHT =  "balance_right"
MUTE_ON =  "mute_on"
MUTE_OFF =  "mute_off"
SET_INPUT =  "set_input"
SET_VOLUME =  "set_volume"
SET_BASS =  "set_bass"
SET_TREBLE =  "set_treble" 
SET_GAIN =  "set_gain"
SET_BALANCE = "set_balance"
RESET = "reset"
INIT= "init"
POWER_ON="power_on"
POWER_OFF = "power_off"
*/

module.exports = appRouter
