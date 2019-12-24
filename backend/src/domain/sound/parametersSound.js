const spawn = require("child_process").spawn;
const exec = require('child_process').exec;

// const DEVICE_ADDRESS = 0x44
const DEVICE_REG_INPUT = 0x00
const DEVICE_REG_GAIN = 0x01
const DEVICE_REG_VOLUMEN = 0x02
const DEVICE_REG_BASS = 0x04
const DEVICE_REG_TREBLE = 0x05
const DEVICE_REG_SPEAKER_R = 0x06
const DEVICE_REG_SPEAKER_L = 0x07

const volumen = (id, value) => {
    console.log("Se modifico volumen ", id, " con ", value)
}
const bass = (id, value) => {
    console.log("Se modifico Bass ", id, " con ", value)
}
const treble = (id, value) => {
    console.log("Se modifico Treble ", id, " con ", value)
}
const balanceR = (id, value) => {
    console.log("Se modifico Balance Right ", id, " con ", value)
}
const balanceL = (id, value) => {
    console.log("Se modifico Balance Left ", id, " con ", value)
}
const gain = (id, value) => {
    console.log("Se modifico Gain ", id, " con ", value)
}
const power = (id, value) => {
    console.log("Se modifico Power ", id, " con ", value)
}
const input = (id, value) => {
    console.log("Se modifico Input ", id, " con ", value)
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