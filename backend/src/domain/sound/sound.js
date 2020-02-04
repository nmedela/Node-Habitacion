const spawn = require("child_process").spawn;
const exec = require('child_process').exec;
const { volumen, balanceL, balanceR, bass, treble, input, power, gain } = require('./parametersSound');

const ON = true
const OFF = false
class Sound {
    constructor() {
        this.id = null
        this.gpio = null
        this.gain = 0x05
        this.bass = 0x0d
        this.treble = 0x0a
        this.balanceR = 0x00
        this.balanceL = 0x00
        this.volumen = 0x1f
        this.power = 0x00
        this.input = 0x02
        this.mute = OFF
    }

    setVolumen(value) {
        this.mute = OFF
        this.volumen = value
        volumen(this.id, 47 - this.volumen) // 47 es volumen minimo y 0 es maximo
    }
    setBass(value) {
        this.bass = value
        bass(this.id, this.converterDBaPre(value))
    }
    setTreble(value) {
        this.treble = value
        treble(this.id, this.converterDBaPre(value))
    }
    setBalanceR(value) {
        this.balance = value
        balanceR(this.id, this.balanceR)

    }
    setBalanceL(value) {
        this.balance = value
        balanceL(this.id, this.balanceL)

    }
    setGain(value) {
        this.gain = value
        gain(this.id, this.gain)
    }
    setPower(value) {
        this.power = value
        power(this.gpio, this.power)
    }
    setInput(value) {
        this.input = value
        input(this.id, this.input)
    }
    setMute(value) {
        this.mute = value
        if (this.mute == OFF) {
           this.SetVolumen(this.volumen)
        } else {
            volumen(this.id, 56)
        }
    }
    
    setInit(){
        volumen(this.id, 47 - this.volumen) // 47 es volumen minimo y 0 es maximo
        bass(this.id, this.converterDBaPre(value))
        treble(this.id, this.converterDBaPre(value))
        balanceR(this.id, this.balanceR)
        balanceL(this.id, this.balanceL)
        gain(this.id, this.gain)
        power(this.gpio, this.power)
        input(this.id, this.input)

    }
    converterDBaPre(value) { //Si es entre -14db y 0db es 0 y 7 - Si es  de 14db a 2db es 8 a 14// recibo de front en db" y convierto a lo que quiere el pre
        var aux
        if (value % 2 != 0) {
            value += 1
        }
        if (value <= 0) {
            value = Math.abs(value)
            value = value / 2
            aux = 7 - value
        } else {
            value = value / 2
            aux = 15 - value
        }
        return aux

    }
    toJson() {
        return JSON.stringify({
            id: this.id,
        })
    }

    toPlainObject() {
        return JSON.parse(this.toJson())
    }

    static fromJson(json = '{}') {
        if (!json) {
            return new Sound()
        }
        const object = typeof json === 'object' ? json : JSON.parse(json)
        const sound = new Sound()
        sound.id = object.id || sound.id
        sound.gpio = object.gpio || sound.gpio
        sound.gain = object.gain || sound.gain
        sound.bass = object.bass || sound.bass
        sound.treble = object.treble || sound.treble
        sound.balanceR = object.balanceR || sound.balanceR
        sound.balanceL = object.balanceL || sound.balanceL
        sound.volumen = object.volumen || sound.volumen
        sound.power = object.power || sound.power
        sound.input = object.input || sound.input
        sound.mute = object.mute || sound.mute
        return sound
    }

    static fromObject(object) {
        if (!(object instanceof Sound)) {
            return Sound.fromJson(object)
        }
        return object
    }

}
module.exports = { Sound }