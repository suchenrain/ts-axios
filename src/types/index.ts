export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'head'
  | 'HEAD'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'options'
  | 'OPTIONS'
  | 'patch'
  | 'PATCH'
