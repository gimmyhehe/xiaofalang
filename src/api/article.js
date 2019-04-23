import { get,post } from '@/utils/request.js'

export function publishArticle(params={}){
  const result = post('/api/new_post',params)
  return result
}