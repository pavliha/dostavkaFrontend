import store from '../store'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'
export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED'

export const register = (form) => ({
  type: REGISTER_USER,
  payload: form,
})

export const login = (form) => async dispatch => {
  await dispatch({
    type: LOGIN_USER,
    payload: form,
  })

  const { error } = store.getState().authReducer

  dispatch(alert.show(error || 'Вы вошли'))
}
