const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74.000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El Clima en: ${coords.direccion} es de ${temp}°C`.green;

    } catch (error) {
        console.log(error);
        return `No se pudo determinar clima de ${direccion}`.red;
    }


}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)