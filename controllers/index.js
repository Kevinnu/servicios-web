const fs = require('fs');
const random = require('random');

class Container {
    constructor(file) {
        this.file = file;
    }
    productos() {
        try {
            if (!fs.existsSync(this.file)) {
                console.log('No existe el archivo')
                return "No existe el archivo";
            } else {
                let leer = fs.readFileSync(this.file);
                if (leer == '') {
                    console.log('Archivo vacio');
                    let mensaje = "el archivo no existe";
                    return mensaje;
                } else {
                    let arrJson = JSON.parse(leer)
                    return arrJson;
                }
            }
        } catch (error) {
            throw error;
        }

    }

    productoRandom() {
        try {
            if (!fs.existsSync(this.file)) {
                console.log('No existe el archivo')
            } else {
                let leer = fs.readFileSync(this.file, 'utf-8');
                if (leer == '') {
                    console.log('Archivo vacio');
                } else {
                    let arrJson = JSON.parse(leer);
                    let elemnts = arrJson.length;
                    let numRand = random.int((1), (elemnts));
                    const busqueda = arrJson.find(element => element.id == numRand);
                    return busqueda;
                }
            }
        } catch (error) {
            throw error;
        }
    }

}

container = new Container('./archivo.txt');

module.exports = container;
