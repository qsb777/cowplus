import { combineReducers } from 'redux'

import notification from './notification'
import user from './user'
import global from './global'

export default combineReducers({
  notification,
  user,
  global
})
