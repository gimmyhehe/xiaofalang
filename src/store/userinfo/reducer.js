import * as actionTypes from './action-type'
import { getToken } from '@/utils/auth'

const initialState = {
  token:getToken()
}

export default function userInfo(state = initialState , action){
  switch(action.type){
    case actionTypes.USERINFO_UPDATE:
      return action.data
    case actionTypes.LOGOUT:
    return Object.assign({}, state, action.data)
    default: 
      return state
  }

} 