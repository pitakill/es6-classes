const axios = require('axios')

class Service {
  constructor(baseURL, timeout = 1000) {
    this.service = axios.create({baseURL, timeout})
  }

  get(path, callback) {
    return this.service.get(path).then(({status, data}) => callback(status, data))
  }

  setInterceptor(type, func) {
    if (!['request', 'response'].includes(type)) return
    this.service.interceptors[type].use(func)
  }
}

const instanceOfAxios = new Service('http://xkcd.com/', 2000)

instanceOfAxios.setInterceptor('request', config => {
  console.log(config)
  return config
})

instanceOfAxios.get('info.0.json', console.log)
