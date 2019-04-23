import * as actionTypes from './action-type'
import { getToken } from '@/utils/auth'
import sessionStore from '@/utils/sessionStore'

const initialState = {
  token:getToken(),
  userId: sessionStore.getItem('userId')
}

export default function userInfo(state = initialState , action){
  switch(action.type){
    case actionTypes.USERINFO_UPDATE:
      return action.data
    case actionTypes.LOGOUT:
    return Object.assign({}, state, action.data)
    case actionTypes.LOGIN:
    return Object.assign({}, state, action.data)
    default: 
      return state
  }

} 