const express = require('express')

const appRouter = express.Router()
const bodyParser = require('body-parser')

const cors = require('cors')
const lightRouter= require('./light')
const soundRouter= require('./sound')
const tvRouter= require('./tv')
const curtainRouter= require('./curtain')
const cameraRouter= require('./camera')


appRouter.use(cors())
appRouter.use(bodyParser.json())

appRouter.use('/light', lightRouter)
appRouter.use('/sound', soundRouter)
appRouter.use('/tv', tvRouter)
appRouter.use('/curtain', curtainRouter)
appRouter.use('/camera', cameraRouter)


module.exports = appRouter