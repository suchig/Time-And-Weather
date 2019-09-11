const Weather = require('./WeatherUtil.js');

if(process.argv.length <= 2){
  console.log("Usage node ./src/Weather <Location1> <Location2>")
}
else{
  process.argv.slice(2)
    .map(async (location) => {
      const temperature =    await Weather.getTemperature(location)
        if(temperature[0] == "200")
          console.log("Temperature at "+location+" is "+temperature[1]+" degrees")
        else
          console.log("Encountered error while fetching weather information for "+location+" - "+ temperature[1])
    })
}
