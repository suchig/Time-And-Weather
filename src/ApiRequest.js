const request = require('request');

function getDataFromApi(typeOfApi, location, lat, long){
	let url=''
	const apiKey = 'a628f3c8c92ab2475c462371909e0cc2'
	
	if (typeOfApi == "weather_city"){
		
		url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
	}
	else if (typeOfApi == "weather_zip"){
		
		url = `http://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=${apiKey}`
	}
	else{
		url = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${long}&username=suchig`
	}

	return new Promise((resolve, reject) => {
		request(url, function (err, response, body) {
			
	  		if(err){
	  			reject(err)
	  		} 
	  		else {
	  			
	  			resolve(body )
	  		}
		})
	})
	
}



exports.getDataFromApi = getDataFromApi