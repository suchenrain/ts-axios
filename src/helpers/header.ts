import { Method } from '../types'
import { deepMerge, isPlainObject } from './util'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) return

  Object.keys(headers).forEach(header => {
    if (header !== normalizedName && header.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[header]
      delete headers[header]
    }
  })
}

export function processHeaders(headers: any, data: any) {
  const contentType = 'Content-Type'
  normalizeHeaderName(headers, contentType)

  if (isPlainObject(data)) {
    if (headers && !headers[contentType]) {
      headers[contentType] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) return parsed

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) return
    if (val) val = val.trim()
    parsed[key] = val
  })

  return parsed
}

export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) return headers

  headers = deepMerge(headers.common || {}, headers[method] || {}, headers)

  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common']

  methodsToDelete.forEach(method => {
    delete headers[method]
  })

  return headers
}
