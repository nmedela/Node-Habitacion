const { lightService } = require('./../services/lightService')
const Light = require('../domain/light').Light

class OptionProgram {
    constructor(_frecuency, _light, _action, _hour) {
        id = null
        started = null
        frecuency = null
        action = null
        light = null
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
        /*
recibo 
        started: Date.now() milisegundos,
        frecuency: index,
        action: index,
        light: {id,intensity,title}
        time: 'XX:XX'
*/

        if (!json) {
            return new OptionProgram()
        }
        const object = typeof json === 'object' ? json : JSON.parse(json)
        const option = new OptionProgram()
        option.id = object.id || option.id
        option.started = object.started || option.started
        
        const frecuency= {}
        const action={}
        const newLight = Light.fromObject(object.light)
        // frecuency = listSteps[0].list[object.frecuency]
        // action = listSteps[1].list[object.action]
        option.frecuency = listSteps[0].list[object.frecuency] || option.frecuency
        option.light = newLight || option.light
        option.action = listSteps[1].list[object.action] || option.action
        option.time = object.time || option.time
        option.executed = object.executed || option.executed

        return option
    }

    static fromObject(object) {
        if (!(object instanceof OptionProgram)) {
            return OptionProgram.fromJson(object)
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
        list: []
    }
]

//agrego el item de luces el el route, cuando pido la lista


module.exports = { listSteps , OptionProgram }



