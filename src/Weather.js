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
		returnValue = weatherMap.main.temp
	}
	catch(error){
		console.log(error)
		returnValue = "N/A"
	}
	
	return returnValue
}

 async function main(){
	const arg_len = process.argv.length 

	if (arg_len>2){
		
		let i = 0
		for (i = 2; i<arg_len; i++ ){
			temperature =  await getTemperature(process.argv[i])
			console.log("Temperature at "+process.argv[i]+" is "+temperature+" degrees");
		}
	}
}

main()

exports.getTemperature = getTemperature