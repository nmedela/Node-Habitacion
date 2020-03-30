const { lightService } = require('./../services/lightService')
const Light = require('../domain/light').Light

class Option {
    constructor(_frecuency, _light, _action, _hour) {
        id = null
        started = null
        frecuency = null
        light = null
        action = null
        time = null
        executed = false
    }

    toJson() {
        return JSON.stringify({
            // id: this.id,
            // intensity: this.intensity,
        })
    }

    toPlainObject() {
        return JSON.parse(this.toJson())
    }

    static fromJson(json = '{}') {
        if (!json) {
            return new Option()
        }
        const object = typeof json === 'object' ? json : JSON.parse(json)
        const option = new Option()
        option.id = object.id || option.id
        option.started = object.started || option.started
        option.frecuency = object.frecuency || option.frecuency
        newLight = Light.fromObject(object.light)
        option.light = newLight || option.light
        option.action = object.action || option.action
        option.time = object.time || option.time
        option.executed = object.executed || option.executed

        return option
    }

    static fromObject(object) {
        if (!(object instanceof Option)) {
            return Option.fromJson(object)
        }
        return object
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

const listSteps = [
    {
        title: 'Seleccionar frecuencia',
        list: [ONETIME, ALWAYS]
    },
    {
        title: 'Modo de accionar',
        list: [ON, NICE, FAINT, OFF]
    },
    {
        title: 'Seleccionar luz',
        list: []
    },
    { 
        title: 'Establecer tiempo',
        list:[]
    }
]

//agrego el item de luces el el route, cuando pido la lista


module.exports = {listSteps}, Option



