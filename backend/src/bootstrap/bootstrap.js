const Light = require('./../domain/light').Light
const { Sound } = require('../domain/sound/sound')
const { LightRepository } = require('./../repository/lightRepository')
const { SoundRepository } = require('./../repository/soundRepository')

 const run = () => {
    LightRepository.create()
    LightRepository.create()
    SoundRepository.create(0x44, 23)

    console.log(" Se ejecutó el bootstrap ")

}
module.exports = { run }