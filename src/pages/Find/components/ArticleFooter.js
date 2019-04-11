import React from 'react'
import { Badge } from 'antd-mobile'
class ArticleFooter extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return (
      <div className='m-article-footer'>
        <Badge text={10} overflowCount={9}>
          <span className='iconfont iconlike'></span>
        </Badge>
          <span className='iconfont iconstar'></span>
          <span className='iconfont iconarticle'></span>
      </div>
    )
  }
}
export default ArticleFooter