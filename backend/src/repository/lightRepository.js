const { Light } = require('./../domain/light')
var idMain = 0
class LightRepository {
    constructor() {
        this.lights = []
    }

    create() {
        const newLight = new Light()
        newLight.id = idMain
        newLight.intensity = 20
        newLight.title = 'Luz ' + idMain
        this.lights.push(newLight)
        console.log(this.lights)
        ++idMain
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