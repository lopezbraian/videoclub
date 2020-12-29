import { createStore, combineReducers } from 'redux'
import uiReducer from './Reducers/uiReducer'
const AllReducers = combineReducers({
  ui: uiReducer
})
export const store = createStore(AllReducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
