import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(
  combineReducers({}),
  composeWithDevTools(applyMiddleware(
    thunk,
    promiseMiddleware(),
  )),
)

export default store
