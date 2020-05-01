const { Light } = require('./../domain/light')
const { LightRepository } = require('./../repository/lightRepository')
const { OptionRepository } = require('./../repository/optionRepository')
const  program  = require('./../domain/programLight')

class LightService {
    async getAll() {
        return LightRepository.getAll()
            .then((lights) => {
                // console.log(lights)
                return lights
            })
    }
    async getScenes() {
        return [program.OFF,program.FAINT,program.NICE,program.ON]
    }
    async getLightById(id) {

        return LightRepository.getById(id)
            .then((light) => {
                if (!light) {
                    throw "No se encontró una luz con ese ID " + id
                }
                return light
            }
            )
    }


    async changeLight(newLight) {
        return this.getLightById(newLight.id)
            .then((light) => {
                return LightRepository.update(newLight)
                    .then((light) => {
                        light.run()
                        return newLight
                    })

            })
    }
    async createOption(newOption) {
        // console.log("Acá entro en el serivce ", newOption)
        return OptionRepository.getAll()

    }
    async getOptionById(id) {

        return OptionRepository.getById(id)
            .then((option) => {
                if (!option) {
                    throw "No se encontró una opcion con ese ID " + id
                }
                return option
            }
            )
    }
    async delete(id) {
        // console.log("paso por servicio de luz con este id ", id)
        return this.getOptionById(id)
            .then((option) => {
                return OptionRepository.delete(option)
                    .then((option) => {
                        return option
                    })

            })
    }

}

module.exports = { lightService: new LightService() }