import { CHANGE_MODE_DARK } from '../action-types'
const defaultState = {
  loading: false,
  modeDark: false
}
export default function uiReducer (initialState = defaultState, action) {
  switch (action.type) {
    case CHANGE_MODE_DARK:
      return {
        ...initialState,
        modeDark: action.status
      }
    default:
      return initialState
  }
}
