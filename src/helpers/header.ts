import { isPlainObject } from './util'

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
