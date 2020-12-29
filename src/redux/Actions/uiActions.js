import { CHANGE_MODE_DARK } from '../action-types'

export function changeModeDark (status) {
  return {
    type: CHANGE_MODE_DARK,
    status: status
  }
}
