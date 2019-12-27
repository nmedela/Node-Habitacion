const { SoundRepository } = require('./../repository/soundRepository')

class SoundService {

    async getSoundById(id) {
        return SoundRepository.getById(id)
            .then((sound) => {
                if (!sound) {
                    throw ("No se encontró un equipo con ese ID")
                }
                return sound
            })
    }
    async changeVolumen(id, value) {
        return this.getSoundById(id)
            .then((sound) => {
                sound.setVolumen(value)
                console.log("Se modifica volumen")
                SoundRepository.update(sound)
            })
    }
}
module.exports = { soundService: new SoundService() }