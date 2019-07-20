const express = require('express')

const appRouter = express.Router()
const bodyParser = require('body-parser')

const cors = require('cors')
const lightRouter= require('./light')

appRouter.use(cors())
appRouter.use(bodyParser.json())

appRouter.use('/light', lightRouter)

module.exports = appRouter