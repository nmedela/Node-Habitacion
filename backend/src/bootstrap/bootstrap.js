const Light = require('./../domain/light').Light
const { LightRepository } = require('./../repository/lightRepository')
const { SoundRepository } = require('./../repository/soundRepository')

const run = () => {
    LightRepository.create()
    LightRepository.create()
    SoundRepository.create(0x44, 23)
    SoundRepository.getById(0x44).then((sound)=>{
        sound.init()
    })
    console.log(" Se ejecutó el bootstrap")

}
module.exports = { run }