const Gpio = require('onoff').Gpio
const BIT2 = new Gpio(18, 'out')
const BIT1 = new Gpio(27, 'out')
const BIT0 = new Gpio(22, 'out')
const LUZ = 0
const INFORMACION = [0, 0, 0, 0, 0, 0, 0, 0]

const enviarBitAPuerto = (puerto, estado) => {
    estado.writeSync(estado)
}
