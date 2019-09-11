const Time = require('./TimeUtil');
const Weather = require('./WeatherUtil');

if(process.argv.length <= 2){
  console.log("Usage node ./src/Time <Location1> <Location2>")
}
else{
  process.argv.slice(2)
      .forEach(async (location) => {
        const weatherData =   await Weather.getTemperature(location)
        if(weatherData[0] != "200"){
          console.log("Unable to procure latitude and longitude information for "+ location+" - "+weatherData[1])
        }
        else{
          const timeData = await Time.getTime(weatherData[2].lat,weatherData[2].lon)
          if (timeData[0] == "200"){
            console.log("Time at "+location+" is "+timeData[1])
          }
          else{
            console.log("Encountered error while fetching information for "+location+" - "+ timeData[1])
          }
        }
      })
}