 const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidGhlYnV5bmEiLCJhIjoiY2pzdWZuYmxiMXhhajRhb2VndTBkejd1YiJ9.-w5sSkmdFb6Fy796In5Afg'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to map service.', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location with that name, Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode