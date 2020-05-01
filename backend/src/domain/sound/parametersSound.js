const spawn = require("child_process").spawn;
const exec = require('child_process').exec;

const I2C = require('raspi-i2c').I2C
const Gpio = require('onoff').Gpio
const i2c = new I2C()

// const DEVICE_ADDRESS = 0x44
const DEVICE_REG_INPUT = 0x00
const DEVICE_REG_GAIN = 0x01
const DEVICE_REG_VOLUMEN = 0x02
const DEVICE_REG_BASS = 0x04
const DEVICE_REG_TREBLE = 0x05
const DEVICE_REG_SPEAKER_R = 0x06
const DEVICE_REG_SPEAKER_L = 0x07

const volumen = (id, value) => {
    i2c.writeByteSync(id, DEVICE_REG_VOLUMEN, value)
    // console.log("Se modifico volumen ", id, " con ", value)
}
const bass = (id, value) => {
    i2c.writeByteSync(id, DEVICE_REG_BASS, value)
    // console.log("Se modifico Bass ", id, " con ", value)
}
const treble = (id, value) => {
    i2c.writeByteSync(id, DEVICE_REG_TREBLE, value)
    // console.log("Se modifico Treble ", id, " con ", value)
}
const balanceR = (id, value) => {
    i2c.writeByteSync(id, DEVICE_REG_SPEAKER_R, value)
    // console.log("Se modifico Balance Right ", id, " con ", value)
}
const balanceL = (id, value) => {
    i2c.writeByteSync(id, DEVICE_REG_SPEAKER_L, value)
    // console.log("Se modifico Balance Left ", id, " con ", value)
}
const gain = (id, value) => {
    i2c.writeByteSync(id, DEVICE_REG_GAIN, value)
    // console.log("Se modifico Gain ", id, " con ", value)
}
const power = (id, value, idSpeaker) => {
    var audio = new Gpio(id, 'out')
    var speaker = new Gpio(idSpeaker, 'out')
    if (parseInt(value)) {
        audio.writeSync(parseInt(value))
        setTimeout(() => {
            speaker.writeSync(parseInt(value))
            // console.log("Se modifico Power pin ", id, " con ", value)
        }, 3000)
    } else {
        speaker.writeSync(parseInt(value))
        audio.writeSync(parseInt(value))
        // console.log("Se modifico Power pin ", id, " con ", value)

    }
}
const input = (id, value) => {
    i2c.writeByteSync(id, DEVICE_REG_INPUT, value)
    // console.log("Se modifico Input ", id, " con ", value)
}

module.exports = {
    volumen,
    bass,
    treble,
    balanceR,
    balanceL,
    gain,
    power,
    input
}