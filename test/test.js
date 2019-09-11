const Weather = require('../src/Weather')
const Time = require('../src/Time')

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

escribe('Time module', () => {
  describe('getTime Tokyo', () => {
    it('This should return 200', async () => {
    	const locations = 'Tokyo'
    	const result = await Time.getTime(locations)
      	expect(result[0]).to.equal(200)
    })
  })

  describe('getTime 98713', () => {
    it('This should return error', async () => {
    	const locations = '98713'
    	const result = await Time.getTime(locations)
      	expect(result[0]).to.not.equal(200)
    })
  })

  describe('getTime exception', () => {
    it('This should return error', async () => {
    	const locations = null
    	const result = await Time.getTime(locations)
      	expect(result[0]).to.not.equal(200)
    })
  })
})