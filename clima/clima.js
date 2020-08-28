const axios = require('axios');

const getClima = async(lat, lng) => {

    const keyclima = '0ad0e5b2de91582f46a423e075b0d547';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${keyclima}&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}