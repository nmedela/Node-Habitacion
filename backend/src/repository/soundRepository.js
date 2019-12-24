const { Sound } = require('../domain/sound/sound')
class SoundRepository {
    constructor() {
        this.sounds = []
    }

    create(address) {
        const newSound = new Sound()
        newSound.id = address
        this.sounds.push(newSound)
        console.log(this.sounds)
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
}
module.exports = { SoundRepository: new SoundRepository() }