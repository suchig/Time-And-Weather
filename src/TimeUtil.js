const ApiRequest = require('./ApiRequest');

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

exports.getTime = getTime