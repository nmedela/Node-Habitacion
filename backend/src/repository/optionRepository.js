const { Option } = require('./../domain/programLight')
var idMain = 0
class OptionRepository {
    constructor() {
        this.options = []
    }

    create(newOption) {
        // const newOption = new Option()
        newOption.id = idMain
        //acá deberpia ponerle la hora

        this.options.push(newOption)
        console.log(this.options)
        ++idMain
    }
    async update(newOption) {
        this.options = this.options.filter(option => option.id !== newOption.id)
        this.options.push(newOption)
        return newOption
    }

    async getById(_id) {
        return this.options.find(option => option.id == _id)
    }
    async getAll() {
        return this.options
    }
}
module.exports = { OptionRepository: new OptionRepository() }