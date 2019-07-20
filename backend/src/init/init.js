const server = require('./initServer')
const init = async () => {
    server.init()
}
module.exports = { init }