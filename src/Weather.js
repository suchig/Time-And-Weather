const ApiRequest = require('./ApiRequest');
//const request = require('request');

 async function getTemperature(location){
	
	let  option = "weather_city"
	if(!isNaN(parseInt(location)) ){
		option = "weather_zip"
	}
	let returnValue = ""
	try{
		const response = await ApiRequest.getDataFromApi(option,location)
		const weatherMap = JSON.parse(response)
		console.log(weatherMap)
		if(weatherMap.cod != "200"){
			returnValue = [weatherMap.cod, weatherMap.message]
		}
		else{
			returnValue = [weatherMap.cod,weatherMap.main.temp,weatherMap.coord]
		}
		
	}
	catch(error){
		console.log(error)
		returnValue = ["exception",error.message]
	}
	return returnValue
	
		/*
		ApiRequest.getDataFromApi(option,location)
		.then(response => {
			const weatherMap = JSON.parse(response)
			returnValue = [weatherMap.main.temp,weatherMap.coord]
			return returnValue
		})
		.catch(error => {
			console.log(error)
			returnValue = "N/A"
			return returnValue
		})*/
	
	
}


if (process.argv[1].indexOf("src/Weather") != -1) {
	
	if(process.argv.length <= 2){
		console.log("Usage node ./src/Weather <Location1> <Location2>")
	}
	else{
		process.argv.slice(2)
					.map(async (location) => {
						const temperature =    await getTemperature(location)
						if(temperature[0] == "200")
							console.log("Temperature at "+location+" is "+temperature[1]+" degrees")
						else
							console.log("Encountered error while fetching weather information - "+ temperature[1])
					})
	}
}

exports.getTemperature = getTemperature