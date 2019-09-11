const ApiRequest = require('./ApiRequest');

async function getTime(lat,lon){
	
	let  option = "time"
	
	let returnValue = ""
	try{
		const response = await ApiRequest.getDataFromApi(option,null,lat,lon)
		const timeMap = JSON.parse(response)
		//console.log(timeMap)
		if(timeMap.hasOwnProperty("status")){
			returnValue=[timeMap.status.value,timeMap.status.message]
		}
		else if(!timeMap.hasOwnProperty("time")){
			returnValue=["error","Invalid Lat and Longitude"]
		}
		else {
			returnValue = ["200",timeMap.time]
			console.log(returnValue)
		}
	}
	catch(error){
		console.log(error)
		returnValue = ["exception",error.message]
	}
	
	return returnValue
}

exports.getTime = getTime