const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const key = '77d892bcc4564abea66c495c27bc0294';
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=${key}`
    });

    const resp = await instance.get();

    if (resp.data.results.length === 0) {
        throw new Error(`Sin resultados para ${dir}`)
    }

    const data = resp.data.results[0];
    const direccion = data.formatted;
    const lat = data.geometry.lat;
    const lng = data.geometry.lng;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}



// .then(resp => {
//         console.log(resp.data.results[0]);
//     })
//     .catch(err => {
//         console.log('ERROR!!!', err);
//     });