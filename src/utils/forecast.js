const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/93efca3b6502e663700ecb988a4be0b0/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location with that coordination.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh +' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + (body.currently.precipProbability * 100).toFixed(0) + '% chance of rain.')
        }
    })
}

module.exports = forecast