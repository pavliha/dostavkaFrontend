import { combineReducers } from 'redux'
import createCargoReducer from './createCargo.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
  authReducer,
  createCargoReducer,
})
