import { createStore, combineReducers } from 'redux'
import uiReducer from './Reducers/uiReducer'
const AllReducers = combineReducers({
  ui: uiReducer
})
const store = createStore(AllReducers, {})

export default store
