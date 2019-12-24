const spawn = require("child_process").spawn;
const exec = require('child_process').exec;
const { volumen,balanceL,balanceR,bass,treble,input,power,gain} = require('./parametersSound');

class Sound {
    constructor() {
        this.id = null
        this.gain = 0x05
        this.bass = 0x0d
        this.treble = 0x0a
        this.balanceR = 0x00
        this.balanceL = 0x00
        this.volumen = 0x1f
        this.power = 0
        this.input = 0x02
    }

    setVolumen(value) {
        this.volumen = value
        volumen(this.id, this.volumen)
    }
    setBass(value) {
        this.bass = value
        bass(this.id, this.bass)
    }
    setTreble(value) {
        this.treble = value
        treble(this.id, this.treble)
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
        power(this.id, this.power)
    }
    setInput(value) {
        this.input = value
        input(this.id, this.input)
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