import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
class Collection extends React.Component {
  testClick(){
    alert(134)
  }
    render() {
        return (
          <div className='m-collection'>
            <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={<div onClick={this.testClick}>编辑</div>}
            >我的收藏</NavBar>
            <ul className='collection-list'>
              <li className='item g-mycard'>
                <span className='iconfont iconinfo'></span>
                <img src='/static/imgs/find/1.png' alt='' / >
                <div className='info grow-item'>
                  <div className='des'>这是描述这是描述这是描述这是描述这是描述</div>
                  <div className='author'>这是作者</div>
                </div>
              </li>
              <li className='item g-mycard'>
                <span className='iconfont iconinfo'></span>
                <img src='/static/imgs/find/1.png' alt='' / >
                <div className='info grow-item'>
                  <div className='des'>这是描述这是描述这是描述这是描述这是描述</div>
                  <div className='author'>这是作者</div>
                </div>
              </li>
              <li className='item g-mycard'>
                <span className='iconfont iconinfo'></span>
                <img src='/static/imgs/find/1.png' alt='' / >
                <div className='info grow-item'>
                  <div className='des'>这是描述这是描述这是描述这是描述这是描述</div>
                  <div className='author'>这是作者</div>
                </div>
              </li>
              <li className='item g-mycard'>
                <span className='iconfont iconinfo'></span>
                <img src='/static/imgs/find/1.png' alt='' / >
                <div className='info grow-item'>
                  <div className='des'>这是描述这是描述这是描述这是描述这是描述</div>
                  <div className='author'>这是作者</div>
                </div>
              </li>
              <li className='item g-mycard'>
                <span className='iconfont iconinfo'></span>
                <img src='/static/imgs/find/1.png' alt='' / >
                <div className='info grow-item'>
                  <div className='des'>这是描述这是描述这是描述这是描述这是描述</div>
                  <div className='author'>这是作者</div>
                </div>
              </li>
              <li className='item g-mycard'>
                <span className='iconfont iconinfo'></span>
                <img src='/static/imgs/find/1.png' alt='' / >
                <div className='info grow-item'>
                  <div className='des'>这是描述这是描述这是描述这是描述这是描述</div>
                  <div className='author'>这是作者</div>
                </div>
              </li>
            </ul>
          </div>
        )
    }
}

export default Collection