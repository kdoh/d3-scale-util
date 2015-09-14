'use strict'

import should from 'should'
import d3 from 'd3'
import { generateScales, isDate, scale } from '../src/scales'

describe('generateScales', () => {
  it('should return the right properties', () => {
    generateScales().should.have.property('xScale')
    generateScales().should.have.property('yScale')
  })
})

describe('isDate', () => {
  it('returns false if not given a date', () => {
    isDate('string').should.be.false()
  })
  it('returns true if given a date', () => {
    isDate(new Date).should.be.true()
  })
})

describe('scale', () => {
  it('should return a d3 scale', () => {
    let test = scale(d3.time.scale, 100)
    test.should.be.a.function
  })
})
