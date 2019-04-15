import React from 'react'
import './style.scss'
import PopModal from '@/components/PopModal'
import CreateOrder from './CreateOrder'
class Business extends React.Component {
  createOrder(){
    this.child.show()
  }
  closeModal(){
    this.child.close()
  }
    render() {
        return (
            <div className="m-business" >
              <div className='info'>
                <img  src="https://p1.meituan.net/dpdeal/e6f7924201d0e8d8542aade37d3a9a6754650.jpg"/>
                <div  className="cost-box">
                  <div  className="buy-box">
                    <div  className="price">¥</div> 
                    <div  className="price sum">39</div> 
                    <div  className="past Fix">
                      <div  className="t"><span  className="o-price">门市价¥128</span></div>
                    </div> 
                    <div  className="last">
                      <span  className="buy-btn" onClick={this.createOrder.bind(this)}>
                        立即预约
                      </span>
                    </div>
                  </div>
                  <div className='detail-info'>
                    <h3 className='shop-name'>施华蔻美发连锁(桃园店)</h3>
                    <div className='sale-info'>
                      <span className='score'></span>
                      <span className='score=text'>评分：9</span>
                      <span className='sale-num'>已售100</span>
                    </div>
                    <div className="location">
                        <i className="iconfont iconlocation"></i>桃园路常兴天虹西座7楼F
                    </div>
                  </div>
                </div>
              </div>
              <div className='content-box'>
                <h3 className='title'>套餐详情</h3>
                <p className='content'>这是套餐闲情，这是套餐闲情这是套餐闲情这是套餐闲情这是套餐闲情这是套餐闲情</p>
              </div>
              <div className='content-box'>
                <h3 className='title'>其他套餐</h3>
               <ul className='other-meallist'>
                <li className='g-mycard'>
                  <div className='grow-item'>
                    <div className='meal-name'>施华蔻奢华套装/染/拉3选1套餐</div>
                    <span className='new-price'>￥39</span>
                    <span className='old-price'>￥100</span>
                  </div>
                  <span>已售100</span>
                </li>
                <li className='g-mycard'>
                  <div className='grow-item'>
                    <div className='meal-name'>施华蔻奢华套装/染/拉3选1套餐</div>
                    <span className='new-price'>￥39</span>
                    <span className='old-price'>￥100</span>
                  </div>
                  <span>已售100</span>
                </li>
                <li className='g-mycard'>
                  <div className='grow-item'>
                    <div className='meal-name'>施华蔻奢华套装/染/拉3选1套餐</div>
                    <span className='new-price'>￥39</span>
                    <span className='old-price'>￥100</span>
                  </div>
                  <span>已售100</span>
                </li>
               </ul>
              </div>
              <div className='content-box'>
                <h3 className='title'>用户评论</h3>
                <ul className='comment-list'>
                  <li className='item'>
                    <div className='g-mycard'>
                      <div className='grow-item'>
                        <img className='avater' src='https://p1.meituan.net/dpdeal/e6f7924201d0e8d8542aade37d3a9a6754650.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D0' alt=''/>
                        <div style={{display:'inline-block'}}>
                          <div className='name'>gimmy呵呵</div>
                          <div className='score'></div>
                        </div>
                      </div>
                      <span className='comment-date'>4月1日</span>
                    </div>
                    <p className='content'>这是网友评论，这是网友评论，这是网友评论，这是网友评论，这是网友评论，</p>
                  </li>
                  <li className='item'>
                    <div className='g-mycard'>
                      <div className='grow-item'>
                        <img className='avater' src='https://p1.meituan.net/dpdeal/e6f7924201d0e8d8542aade37d3a9a6754650.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D0' alt=''/>
                        <div style={{display:'inline-block'}}>
                          <div className='name'>gimmy呵呵</div>
                          <div className='score'></div>
                        </div>
                      </div>
                      <span className='comment-date'>4月1日</span>
                    </div>
                    <p className='content'>这是网友评论，这是网友评论，这是网友评论，这是网友评论，这是网友评论，</p>
                  </li>
                  <li className='item'>
                    <div className='g-mycard'>
                      <div className='grow-item'>
                        <img className='avater' src='https://p1.meituan.net/dpdeal/e6f7924201d0e8d8542aade37d3a9a6754650.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D0' alt=''/>
                        <div style={{display:'inline-block'}}>
                          <div className='name'>gimmy呵呵</div>
                          <div className='score'></div>
                        </div>
                      </div>
                      <span className='comment-date'>4月1日</span>
                    </div>
                    <p className='content'>这是网友评论，这是网友评论，这是网友评论，这是网友评论，这是网友评论，</p>
                  </li>
                </ul>
              </div>
              <PopModal title='预约'  ref={(ref)=>{this.child = ref}} ><CreateOrder close={this.closeModal.bind(this)}/></PopModal>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
export default Business
// module.exports = NotFound