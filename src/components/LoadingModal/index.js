import React from 'react'

export default class Header extends React.Component{ 
  render(){
    const style = {
      imgStyle:{
        width: '300px',
        height: '300px',
        display: 'block',
        margin: '0 auto'
      },
      textStyle:{
        textAlign:'center',
        fontSize: '1.6rem',
        color: '#999'
      }
    }
    return(
      <div>
        <img style={style.imgStyle} src='/static/imgs/loading.gif' alt='加载动画'/>
        <h3 style={style.textStyle}>加载中...</h3>
      </div>
    )
  }
  backToPreviousPage(){
    window.history.back()
  }
}