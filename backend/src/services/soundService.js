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
                // console.log("Se modifica volumen")
                return SoundRepository.update(sound)
            })
    }
    async changeBass(id, value) {
        return this.getSoundById(id)
            .then((sound) => {
                sound.setBass(value)
                // console.log("Se modifica graves")
                SoundRepository.update(sound)
            })
    }
    async changeTreble(id, value) {
        return this.getSoundById(id)
            .then((sound) => {
                sound.setTreble(value)
                // console.log("Se modifica graves")
                SoundRepository.update(sound)
            })
    }
    async changeBalanceR(id, value) {
        return this.getSoundById(id)
            .then((sound) => {
                sound.setBalanceR(value)
                // console.log("Se modifica balance R")
                SoundRepository.update(sound)
            })
    }
    async changeBalanceL(id, value) {
        return this.getSoundById(id)
            .then((sound) => {
                sound.setBalanceL(value)
                // console.log("Se modifica balance L")
                SoundRepository.update(sound)
            })
    }
    async changeMute(id, value) {
        return this.getSoundById(id)
            .then((sound) => {
                sound.setMute(value)
                // console.log("Se modifica Mute")
                SoundRepository.update(sound)
            })
    }
    async changePower(id, value) {
        return this.getSoundById(id)
            .then((sound) => {
                sound.setPower(value)
                // console.log("Se modifica Power con ", value)
                SoundRepository.update(sound)
            })
    }

}
module.exports = { soundService: new SoundService() }