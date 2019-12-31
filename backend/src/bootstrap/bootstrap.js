const Light = require('./../domain/light').Light
const { LightRepository } = require('./../repository/lightRepository')
const { SoundRepository } = require('./../repository/soundRepository')

const run = () => {
    LightRepository.create()
    LightRepository.create()
    SoundRepository.create(0x44, 23)
    const sound = SoundRepository.getById(0x44)
    sound.init()

    console.log(" Se ejecutó el bootstrap")

}
module.exports = { run }