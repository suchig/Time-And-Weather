const ApiRequest = require('./ApiRequest');
const Weather = require('./Weather');

async function getTime(lat,lon){
	
	let  option = "time"
	
	let returnValue = ""
	try{
		const response = await ApiRequest.getDataFromApi(option,null,lat,lon)
		const timeMap = JSON.parse(response)
		returnValue = timeMap.time
		//console.log(timeMap)
	}
	catch(error){
		console.log(error)
		returnValue = "N/A"
	}
	
	return returnValue
}

 /*async function main(){
	const arg_len = process.argv.length 


	if (arg_len>2){
		
		let i = 0
		for (i = 2; i<arg_len; i++ ){
			const weatherData =  await Weather.getTemperature(process.argv[i])
			const timeData = await getTime(weatherData[1].lat,weatherData[1].lon)
			console.log("Time at "+process.argv[i]+" is "+timeData);
		}
	}
}*/


process.argv.slice(2)
			.map(async (location) => {
				const weatherData =   await Weather.getTemperature(location)
				const timeData = await getTime(weatherData[1].lat,weatherData[1].lon)
				console.log("Time at "+location+" is "+timeData);
			})


exports.getTime = getTime