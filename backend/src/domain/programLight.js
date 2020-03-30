const { lightService } = require('./../services/lightService')


class Option {
    constructor(_frecuency, _light, _action, _hour) {
        started = null
        frecuency = null
        light = null
        action = null
        hour = null
        executed = null
    }
}


const ONETIME = {
    title: 'Solo 1 vez',
    repeat: false
}
const ALWAYS = {
    title: 'Siempre',
    repeat: true
}

const OFF = {
    title: 'Apagar',
    intensity: 36
}
const ON = {
    title: 'Encender',
    intensity: 10

}
const FAINT = {
    title: 'Tenue',
    intensity: 26
}
const NICE = {
    title: 'Agradable',
    intensity: 19
}

const listSteps = {
    frecuency: [ONETIME, ALWAYS],
    action: [ON, NICE, FAINT, OFF],
}

module.exports = {
    listSteps
}



