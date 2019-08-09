const { Light } = require('./../domain/light')
const idMain = 0
class LightRepository {
    constructor() {
        this.light = []
    }

    create() {
        const newLight = new Light()
        ++idMain
        newLight.id = idMain
        newLight.intensity = 35
        this.light.push(newLight)
    }
}
module.exports = { LightRepository: new LightRepository() }