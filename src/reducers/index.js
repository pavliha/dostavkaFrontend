import { combineReducers } from 'redux'
import addCargoFormReducer from './createCargo.reducer'
import authReducer from './auth.reducer'
import popularRoutes from './popularRoutes.reducer'
import alertReducer from './alert.reducer'

export default combineReducers({
  authReducer,
  addCargoFormReducer,
  popularRoutes,
  alertReducer,
})
