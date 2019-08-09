const Light = require('./../domain/light').Light
const { LightRepository } = require('./../repository/lightRepository')

const run = () => {
    LightRepository.create
    console.log("Se ejecutó este")
}
module.exports = { run }