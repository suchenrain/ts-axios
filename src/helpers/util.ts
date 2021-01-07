import { type } from 'os'

const tostring = Object.prototype.toString

export function isDate(val: any): val is Date {
  return tostring.call(val) === '[object Date]'
}

export function isObject(val: any): val is object {
  return val !== null && typeof val === 'object'
}
