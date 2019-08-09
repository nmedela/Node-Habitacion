const server = require('./initServer')
const { LightRepository } = require('./../repository/lightRepository')
const init = async () => {
    server.init()
     require('./../bootstrap/bootstrap').run()
}
module.exports = { init }