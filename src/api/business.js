import { get,post } from '@/utils/request.js'

export function search_business_loca(params={}){
  const result = post('/api/search_business_loca',params)
  return result
}