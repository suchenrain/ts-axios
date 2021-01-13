import axios, { AxiosError } from '../../src'

axios({
  method: 'get',
  url: '/error/get1'
})
  .then(res => {
    console.log(res)
  })
  .catch((e: AxiosError) => {
    console.log(e.message, e.code)
  })

axios({
  method: 'get',
  url: '/error/get'
})
  .then(res => {
    console.log(res)
  })
  .catch((e: AxiosError) => {
    console.log(e.message, e.code, e.request)
  })

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  })
    .then(res => {
      console.log(res)
    })
    .catch((e: AxiosError) => {
      console.log(e.message, e.code, e.request)
    })
}, 10000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
})
  .then(res => {
    console.log(res)
  })
  .catch((e: AxiosError) => {
    console.log(e.message, e.code, e.request)
  })
