const { Light } = require('./../domain/light')
const { LightRepository } = require('./../repository/lightRepository')
const { OptionRepository } = require('./../repository/optionRepository')

class LightService {
    async getAll() {
        return LightRepository.getAll()
            .then((lights) => {
                console.log(lights)
                return lights
            })
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
        return OptionRepository.create(newOption)

    }
    async getOptionById(id) {

        return OptionRepository.getById(id)
            .then((option) => {
                console.log('el getOptionById encontró esto,', option)
                if (!option) {
                    throw "No se encontró una opcion con ese ID " + id
                }
                return option
            }
            )
    }
    async delete(id) {
        return this.getOptionById(id)
            .then((option) => {
                console.log('Encontró esta opcion para borrar,', option)
                return OptionRepository.delete(option)
                    .then((option) => {
                        return option
                    })

            })
    }

}

module.exports = { lightService: new LightService() }