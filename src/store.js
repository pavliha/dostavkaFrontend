import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(
    thunk,
    promiseMiddleware(),
  )),
)

export default store
