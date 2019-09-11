const Weather = require('../src/Weather')
const expect = require('chai').expect

describe('Weather module', () => {
  describe('getTemperature', () => {
    it('This should return local time in Tokyo', async () => {
    	const locations = 'Tokyo'
    	const result = await Weather.getTemperature(locations)
      	expect(result[0]).to.equal("200")
    })
  })
})