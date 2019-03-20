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
          <span className='iconfont iconuser'></span>
        </Badge>
        <Badge text={10} overflowCount={9}>
          <span className='iconfont iconuser'></span>
        </Badge>
        <Badge text={10} overflowCount={9}>
          <span className='iconfont iconuser'></span>
        </Badge>
      </div>
    )
  }
}
export default ArticleFooter