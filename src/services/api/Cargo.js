/* eslint-disable class-methods-use-this */
import Http from '../Http'

class Cargo {
  all() {
    return Http.get('/cargo')
  }

  paginate({ limit = 10, page = 1 }) {
    return Http.get(`/cargo?page=${page}&limit=${limit}`)
  }

  find(id) {
    return Http.get(`/cargo/${id}`)
  }

  create(form) {
    return Http.post('/cargo', form)
  }
}

export default new Cargo()
