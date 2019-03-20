import * as actionTypes from './action-type'
import { removeToken } from '@/utils/auth'
export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}
export function setToken(data){
    return {
        type: actionTypes.SET_TOKEN,
        data
    }
}
export function logout(){
    removeToken()
    return {
        type: actionTypes.LOGOUT,
        data:{token:null}
    }
}