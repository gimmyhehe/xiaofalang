import { get,post } from '@/utils/request.js'

export function login(params={}) {
    const result = post('/api/login',params)
    return result
}

export function register(params={}){
    const result = post('/api/register',params)
    return result
}
export function getUserData(params={}){
    const result = get('/api/userdata',params)
    return result
}
export function getCollectionList(params={}){
    const result = get('/api/usercollect',params)
    return result
}
export function deleteCollect(params={}){
    const result = post('/api/deletecollect',params)
    return result
}
export function modifyUser_data(params={}){
    const result = post('/api/modifyUser_data',params)
    return result
}
export function modifyUser_dataHeadPic(params={}){
    const result = post('/api/modifyUser_dataHeadPic',params)
    return result
}