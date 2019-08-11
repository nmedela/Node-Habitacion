// const Gpio = require('onoff').Gpio
// const BIT2 = new Gpio(18, 'out')
// const BIT1 = new Gpio(27, 'out')
// const BIT0 = new Gpio(22, 'out')
// const LUZ = 0
// const INFORMACION = [0, 0, 0, 0, 0, 0, 0, 0]

// const enviarBitAPuerto = (puerto, estado) => {
//     estado.writeSync(estado)
// }
const spawn = require("child_process").spawn;

class Light {
    constructor() {
        this.id = null
        this.intensity = null
    }

    run() {
        console.log("Se ejecuto comando para luz ", this.id, " con intensidad ", this.intensity)
        // var process = spawn('python2.7', ["/usr/lib/python2.7/dist-packages/RPi/ejecutarLuz.py ", this.id, this.intensity]);

    }

    toJson() {
        return JSON.stringify({
            id: this.id,
            intensity: this.intensity,
        })
    }

    toPlainObject() {
        return JSON.parse(this.toJson())
    }

    static fromJson(json = '{}') {
        if (!json) {
            return new Light()
        }
        const object = typeof json === 'object' ? json : JSON.parse(json)
        const light = new Light()
        light.id = object.id || light.id
        light.intensity = object.intensity || light.intensity
        return light
    }

    static fromObject(object) {
        if (!(object instanceof Light)) {
            return Light.fromJson(object)
        }
        return object
    }
}
module.exports = { Light }