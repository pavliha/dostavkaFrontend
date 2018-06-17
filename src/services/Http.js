import axios from 'axios'
import to from '../utils/to'
import Token from './Token'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3333',
      timeout: 1000,
      headers: { Authorization: Token.get() },
      adapter: (axios.defaults.adapter),
    })
  }

  async get(url, params) {
    const [err, response] = await to(this.instance.get(url, params))
    if (err) throw err.response.data

    return response.data
  }

  async post(url, params) {
    const [err, response] = await to(this.instance.post(url, params))
    if (err) throw err.response.data

    return response.data
  }
}

export default new Http()

