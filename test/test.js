const Weather = require('../src/WeatherUtil')
const Time = require('../src/TimeUtil')

const expect = require('chai').expect

describe('Weather module', () => {
  describe('getTemperature Tokyo', () => {
    it('This should return 200', async () => {
    	const locations = 'Tokyo'
    	const result = await Weather.getTemperature(locations)
      	expect(result[0]).to.equal(200)
    })
  })

  describe('getTemperature 98713', () => {
    it('This should return error', async () => {
    	const locations = '98713'
    	const result = await Weather.getTemperature(locations)
      	expect(result[0]).to.not.equal(200)
    })
  })

  describe('getTemperature exception', () => {
    it('This should return error', async () => {
    	const locations = null
    	const result = await Weather.getTemperature(locations)
      	expect(result[0]).to.not.equal(200)
    })
  })
})

describe('Time module', () => {
  describe('getTime Tokyo (lat - 35.68, lng - 139.76)', () => {
    it('This should return 200', async () => {
    	const result = await Time.getTime(35.68,139.76)
      	expect(result[0]).to.equal('200')
    })
  })

  describe('getTime invalid lat and lng', () => {
    it('This should return error', async () => {
    	const result = await Time.getTime(-10,10)
      	expect(result[0]).to.not.equal('200')
    })
  })

  describe('getTime exception', () => {
    it('This should return error', async () => {
    	const locations = null
    	const result = await Time.getTime(locations)
      	expect(result[0]).to.not.equal('200')
    })
  })
})