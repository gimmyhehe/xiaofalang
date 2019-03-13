import { combineReducers } from 'redux'
import * as userinfo from './userinfo/reducer'

export default combineReducers({
  ...userinfo
})
