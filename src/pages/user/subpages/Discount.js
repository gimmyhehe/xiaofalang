import React from 'react'
import Header from '@/components/common/header'
class Discount extends React.Component{
  render(){
    return (
      <div>
        <Header title="优惠券"></Header>
        <ul className='discount-list'>
          <li className='item'>
            <div className='g-mycard'>
              <div className='discount'>
                <h3>￥5</h3>
                <p>优惠券</p>
              </div>
              <div className='info grow-item'>
                <p className='name'>发型设计优惠券</p>
                <p className='vid'>有效期至：2019-05-11</p>
              </div>
              <span className='use-btn'>立即使用</span>
            </div>
            <p className='instruction'>
              说明：无门槛使用，先非到店预约订单使用。
            </p>
          </li>
          <li className='item'>
            <div className='g-mycard'>
              <div className='discount'>
                <h3>￥5</h3>
                <p>优惠券</p>
              </div>
              <div className='info grow-item'>
                <p className='name'>发型设计优惠券</p>
                <p className='vid'>有效期至：2019-05-11</p>
              </div>
              <span className='use-btn'>立即使用</span>
            </div>
            <p className='instruction'>
              说明：无门槛使用，先非到店预约订单使用。
            </p>
          </li>
          <li className='item'>
            <div className='g-mycard'>
              <div className='discount'>
                <h3>￥5</h3>
                <p>优惠券</p>
              </div>
              <div className='info grow-item'>
                <p className='name'>发型设计优惠券</p>
                <p className='vid'>有效期至：2019-05-11</p>
              </div>
              <span className='use-btn'>立即使用</span>
            </div>
            <p className='instruction'>
              说明：无门槛使用，先非到店预约订单使用。
            </p>
          </li>
        </ul>
      </div>
    )
  }
}
export default Discount