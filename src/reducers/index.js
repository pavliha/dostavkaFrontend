import { combineReducers } from 'redux'
import addCargoFormReducer from './createCargo.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
  authReducer,
  addCargoFormReducer,
})
