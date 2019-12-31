const port = require('./../config').port
const init = () => {
    const express = require('express')
    const bodyParser = require('body-parser')
    const app = express()
    // const port = 4000

    app.use('/', require('../routes/index.js'))

    app.listen(port, () => {
        console.log(`̣Servidor levantado corriendo en el puerto ${port}`)
    })
    return app
}
module.exports = { init }