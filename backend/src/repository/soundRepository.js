const { Sound } = require('../domain/sound/sound')
class SoundRepository {
    constructor() {
        this.sounds = []
    }

    async create(address, gpio, gpioSpeaker) {
        const newSound = new Sound()
        newSound.id = address
        newSound.gpio = gpio
        newSound.idSpeaker = gpioSpeaker
        this.sounds.push(newSound)
        console.log(this.sounds)
        return newSound
    }
    async update(newSound) {
        this.sounds = this.sounds.filter(sound => sound.id !== newSound.id)
        this.sounds.push(newSound)
        return newSound
    }

    async getById(_id) {
        return this.sounds.find(sound => sound.id == _id)
    }
    async getAll() {
        return this.sounds
    }
    async init(_id) {
        return this.getById(_id).then((sound) => {
            sound.setInit()
            return this.update(sound)
        })
    }
}
module.exports = { SoundRepository: new SoundRepository() }