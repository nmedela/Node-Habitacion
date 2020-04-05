const server = require('./initServer')
const daemon = require('./../deamon/daemonLight')

const { LightRepository } = require('./../repository/lightRepository')
const init = async () => {
    server.init()
     require('./../bootstrap/bootstrap').run()
     daemon.init()
}
module.exports = { init }