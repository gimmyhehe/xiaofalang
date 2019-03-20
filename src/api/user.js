import { get,post } from '@/utils/request.js'

export function login(params={}) {
    const result = post('/api/login',params)
    return result
}