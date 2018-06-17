import {
  REGISTER_USER,
  REGISTER_USER_PENDING,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,
} from '../actions/auth.action'

const initialState = {
  user: null,
  errors: [],
  error: false,
  loading: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER: {
      return {
        ...state,
        user: payload,
      }
    }
    case REGISTER_USER_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case REGISTER_USER_FULFILLED: {
      return {
        ...state,
        user: payload,
        loading: false,
      }
    }
    case REGISTER_USER_REJECTED: {
      return {
        ...state,
        error: payload,
        errors: payload,
        loading: false,

      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
