const request = require('request')

const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherapi.com/v1/current.json?key=efa0e2f6568948dfbf8163106210709&q='+ lat + ',' + long + '&aqi=no';
    request({ url, json: true }, (error, {body}={}) => {

        if (error) {
            callback("Some Error ocuurred", undefined);
        }
        else if (body.error) {
            callback("Try different search", undefined);
        }
        else {
            callback(undefined, {location:body.location.name,
                                 region:body.location.region,
                                 tempInCel:body.current.temp_c,
                                 tempInFar:body.current.temp_f,
                                 conditionText:body.current.condition.text});
        }
    }
    )
}
module.exports = forecast