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
		//console.log(weatherMap)
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
}

exports.getTemperature = getTemperature