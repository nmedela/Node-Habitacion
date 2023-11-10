
const server = require('./initServer')
const daemon = require('./../deamon/daemonLight')
require('./../services/telegramBot')

const { LightRepository } = require('./../repository/lightRepository')
const init = async () => {
    server.init()
    require('./broker')
     //require('./../bootstrap/bootstrap').run()
     //daemon.init()
}
module.exports = { init }
