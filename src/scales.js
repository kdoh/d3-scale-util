'use strict'

export function generateScales(xValues, yValues) {
    let xScale, yScale
    return {
      xScale: xScale,
      yScale: yScale
    }
}

export function isDate(value) {
  if(Object.prototype.toString.call(value) === '[object Date]') {
    return true
  } else {
    return false
  }
}

export function scale(d3scale, size) {
  return d3scale().range([0, size])
}
