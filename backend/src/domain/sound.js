const exec = require('child_process').exec
const DEVICE_ADDRESS = 0x44
const DEVICE_REG_INPUT=0x00
const DEVICE_REG_GAIN = 0x01
const DEVICE_REG_VOLUMEN = 0x02
const DEVICE_REG_BASS = 0x04
const DEVICE_REG_TREBLE = 0x05
const DEVICE_REG_SPEAKER_R = 0x06
const DEVICE_REG_SPEAKER_L= 0x07

class Sound{
    constructor(){
        this.id=null
        this.gain=null
        this.bass=null
        this.trebble=null
        this.balance=null
        this.volumen=null
        this.input=null
    }

}
