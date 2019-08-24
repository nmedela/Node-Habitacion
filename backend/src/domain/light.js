const spawn = require("child_process").spawn;
const exec = require('child_process').exec;
class Light {
    constructor() {
        this.id = null
        this.intensity = null
    }

    run() {
        console.log("Se ejecuto comando para luz ", this.id, " con intensidad ", this.intensity)
        // var process = spawn('sudo python2.7', ["/usr/lib/python2.7/dist-packages/RPi/ejecutarLuz.py ", this.id, this.intensity]);

        exec(`sudo python2.7 /usr/lib/python2.7/dist-packages/RPi/ejecutarLuz.py  ${this.id} ${this.intensity}`, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
          
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          });


    }

    toJson() {
        return JSON.stringify({
            id: this.id,
            intensity: this.intensity,
        })
    }

    toPlainObject() {
        return JSON.parse(this.toJson())
    }

    static fromJson(json = '{}') {
        if (!json) {
            return new Light()
        }
        const object = typeof json === 'object' ? json : JSON.parse(json)
        const light = new Light()
        light.id = object.id || light.id
        light.intensity = object.intensity || light.intensity
        return light
    }

    static fromObject(object) {
        if (!(object instanceof Light)) {
            return Light.fromJson(object)
        }
        return object
    }
}
module.exports = { Light }