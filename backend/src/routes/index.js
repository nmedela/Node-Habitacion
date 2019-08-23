const express = require('express')
const path = require('path')
const appRouter = express.Router()
const bodyParser = require('body-parser')

const cors = require('cors')
const lightRouter= require('./lightRoute')
const soundRouter= require('./soundRoute')
const tvRouter= require('./tvRoute')
const curtainRouter= require('./curtainRoute')
const cameraRouter= require('./cameraRoute')


appRouter.use(cors())
appRouter.use(bodyParser.json())

appRouter.use('/light', lightRouter)
appRouter.use('/sound', soundRouter)
// appRouter.use('/tv', tvRouter)
// appRouter.use('/curtain', curtainRouter)
// appRouter.use('/camera', cameraRouter)


module.exports = appRouter