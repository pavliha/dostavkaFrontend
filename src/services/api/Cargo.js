/* eslint-disable class-methods-use-this */
import Http from '../Http'

class Cargo {

  create(form) {
    return Http.post('/cargo', form)
  }
}

export default new Cargo()
