import React from 'react'
import Header from '@/components/common/header'
class About extends React.Component{
  render(){
    return (
      <div className='m-about'>
        <Header title="关于小发郎"></Header>
        <img src='/static/imgs/logo.jpg' alt='logo'/>
        <h3>小发郎</h3>
        <p className='version'>Version1.0.1</p>
        <p className='des'>小发郎，一个专注于发型管理的应用系统！</p>
      </div>
    )
  }
}
export default About