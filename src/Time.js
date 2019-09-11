const ApiRequest = require('./ApiRequest');
const Weather = require('./Weather');

async function getTime(lat,lon){
	
	let  option = "time"
	
	let returnValue = ""
	try{
		const response = await ApiRequest.getDataFromApi(option,null,lat,lon)
		const timeMap = JSON.parse(response)
		if(timeMap.hasOwnProperty("status")){
			returnValue=[timeMap.status.value,timeMap.status.message]
		}
		else{
			returnValue = ["200",timeMap.time]
			//console.log(timeMap)
		}
	}
	catch(error){
		console.log(error)
		returnValue = ["exception",error.message]
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


if(process.argv.length <= 2){
	console.log("Usage node ./src/Time <Location1> <Location2>")
}
else{
	process.argv.slice(2)
			.map(async (location) => {
				const weatherData =   await Weather.getTemperature(location)
				if(weatherData[0] != "200"){
					console.log("Unable to procure latitude and longitude - "+weatherData[1])
				}
				else{
					const timeData = await getTime(weatherData[2].lat,weatherData[2].lon)
					if (timeData[0] == "200"){
						console.log("Time at "+location+" is "+timeData)
					}
					else{
						console.log("Encountered error while fetching time information - "+timeData[1])
					}
				}
			})
}


exports.getTime = getTime