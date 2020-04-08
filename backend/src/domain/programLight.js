const { lightService } = require('./../services/lightService')
const Light = require('../domain/light').Light
const moment = require('moment')

class OptionProgram {
    constructor() {
        this.id = null
        this.started = null
        this.frecuency = null
        this.action = null
        this.light = null
        this.time = null
        this.executed = false
    }
    execute(){
        this.light.intensity= this.action.intensity
        lightService.changeLight(this.light)
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
        option.started = moment(object.started) || option.started
        const newLight = Light.fromObject(object.light)
        option.frecuency = listSteps[0].list[object.frecuency] || option.frecuency
        option.light = newLight || option.light
        option.action = listSteps[1].list[object.action] || option.action
        var timeFormated = moment(object.time, "HH:mm")
        var timeAux = option.frecuency.repeat ? timeFormated : option.started.add(timeFormated.minutes(), 'minutes')
        option.time = timeAux.format("HH:mm") || option.time
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


module.exports = { listSteps, OptionProgram }



