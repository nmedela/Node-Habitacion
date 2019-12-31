const { Light } = require('./../domain/light')
const { LightRepository } = require('./../repository/lightRepository')

class LightService {

    async getLightById(id) {

        return LightRepository.getById(id)
            .then((light) => {
                if (!light) {
                    throw "No se encontró una luz con ese ID " + id
                }
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

}

module.exports = { lightService: new LightService() }