const { Light } = require('./../domain/light')
var idMain = -1
class LightRepository {
    constructor() {
        this.lights = []
    }

    create() {
        const newLight = new Light()
        ++idMain
        newLight.id = idMain
        newLight.intensity = 20
        this.lights.push(newLight)
    }
    async update(newLight) {
        this.lights = this.lights.filter(light => light.id !== newLight.id)
        this.lights.push(newLight)
        return newLight
    }

    async getById(_id) {
        return this.lights.find(light => light.id == _id)
    }
    async getAll() {
        return this.lights
    }
}
module.exports = { LightRepository: new LightRepository() }