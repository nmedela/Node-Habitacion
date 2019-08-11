const Light = require('./../domain/light').Light
const { LightRepository } = require('./../repository/lightRepository')

const run = () => {
    LightRepository.create()
    LightRepository.create()
    console.log(" Se ejecutó el bootstrap")

}
module.exports = { run }