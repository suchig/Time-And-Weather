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
		returnValue = [weatherMap.main.temp,weatherMap.coord]
		//console.log(returnValue)
	}
	catch(error){
		console.log(error)
		returnValue = "N/A"
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
	process.argv.slice(2)
				.map(async (location) => {
					const temperature =    await getTemperature(location)
					console.log("Temperature at "+location+" is "+temperature[0]+" degrees");
				})
}

exports.getTemperature = getTemperature