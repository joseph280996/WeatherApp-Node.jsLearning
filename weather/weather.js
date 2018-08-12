const request = require ('request');

const API_key = '80456e80f34b3e8673e9f18f527770d8';
var getWeather = (lat,lng,callback) =>{
  request({
      url: `https://api.darksky.net/forecast/${API_key}/${lat},${lng}`,
      json: true
    }, (error,response,body)=>{
      if (!error&&response.statusCode ===200){
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
      else {
        callback('Unable to fetch to weather');
      }
    });
  };
module.exports.getWeather = getWeather;
