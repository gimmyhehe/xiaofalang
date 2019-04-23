import React from 'react'
import './style.scss'
import Header from '@/components/common/header'
class Article extends React.Component{


  render(){
    return (
      <div>
        <Header title="我的文章" />
        this is Article
      </div>
    )
  }
}

export default Article