# Time and Weather
Node.js to procure Time and Weather of given locations

*Usage:*
node ./src/Weather location1 [location2,..]
node ./src/Time location1 [location2,..]

*Example:*
node ./src/Weather Tokyo "Sao Paulo" 21201
node ./src/Time Tokyo "Sao Paulo" 21201

*APIs used:*
Weather - openweathermap.org
Time - Latitude and Longitide from openweathermap.org, Time from geonames.org

*Constraints:*
1. Did not use Google APIs as they were not free
2. Zipcodes are limited to US zip codes
3. Time makes two different API calls. One to procure Latitude and Longitude and another to procure actual time. This could be reduced to a single API call 
  - by getting TimeZone for a given city or a zipcode through an API (Currently no free API provides this)
  - by getting Timezone database. Currently no clean international database is available (for free) that maps city as well as US zipcodes

