const moment = require('moment')
// const { LightRepository } = require('./../repository/lightRepository')
// const { OptionRepository } = require('./../repository/optionRepository')

const demonExcecuteLight = () => {
    const { OptionRepository } = require('../repository/optionRepository')
    var configuration = OptionRepository.getAll()
    configuration.then((opciones) => {
        opciones.forEach(option => {
            if (option.time == moment().format("HH:mm") && !option.executed) {
                option.execute()
                new Promise(done => setTimeout(done, 5000))
                    .then(() => {
                        option.executed = true
                        OptionRepository.update(option)

                    })
            }
        })

    })
}

//TODO demon para borrar los ejecutados
const demonDeleteExecuted = () => {
    const { OptionRepository } = require('../repository/optionRepository')
    var configuration = OptionRepository.getAll()
    console.log("Corre demon de configuraciones", configuration)
    configuration.then((opciones) => {
        opciones.forEach(option => {
            if (option.executed && !option.repeat) {
                OptionRepository.delete(option)
            }
            if (option.executed && option.repeat) {
                option.executed = false
                OptionRepository.update(option)
            }

        })
    })

}

const init = () => {
    setInterval(demonExcecuteLight, 60000)
    setInterval(demonDeleteExecuted, 60000)
    console.log("Se ejecuta demonio")
}

module.exports = { init }