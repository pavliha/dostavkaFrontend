import { LOAD_CARGO_FULFILLED, LOAD_CARGO_PENDING, LOAD_CARGO_REJECTED, SHOW_CARGO }
  from '../actions/cargo.action'

const initialState = {
  cargos: [],
  cargo: null,
  loading: false,
}

const cargoListReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_CARGO_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_CARGO_FULFILLED: {
      return {
        ...state,
        loading: false,
        total: payload.total,
        perPage: payload.perPage,
        page: payload.page,
        lastPage: payload.lastPage,
        cargos: payload.data,
      }
    }
    case LOAD_CARGO_REJECTED: {
      return {
        ...state,
        loading: false,
        error: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default cargoListReducer
