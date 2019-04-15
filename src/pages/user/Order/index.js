import React from 'react'
import Header from '@/components/common/header'
import {Tabs, WhiteSpace} from 'antd-mobile'
import './style.scss'
class Member extends React.Component{
  constructor(props){
    super(props)
    this.state={
      unfinishList:[
        {
          name:'邻家发郎',
          img:'/static/imgs/logo.jpg',
          createTime:'2015-01-01',
          orderTime:'2016-01-01'
        },
        {
          name:'小哥设计屋',
          img:'/static/imgs/default.png',
          createTime:'2016-08-11',
          orderTime:'2017-11-11'
        },
      ],
      finishList:[
        {
          name:'藤野造型',
          img:'/static/imgs/logo.jpg',
          createTime:'2015-01-01',
          orderTime:'2016-01-01'
        },
        {
          name:'无名氏发型',
          img:'/static/imgs/default.png',
          createTime:'2016-08-11',
          orderTime:'2017-11-11'
        },
      ],
    }
  }
  render(){
    const tabs = [
      { title: '预约中' },
      { title: '已完成' },
    ];
    return (
      <div>
        <Header title="我的订单"></Header>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
        <ul className='order-list'>
          {this.state.unfinishList.map((item,index)=>{
            return(
              <li key={'item'+index} className='item unfin-item'>
              <div className='item-header'>
                <span className='business-info'><img src='/static/imgs/icon/business.png' alt='商家图标' />{item.name}</span>
                <span className='status'>预约中</span>
              </div>
              <div className='order-info'>
                <img src={item.img} alt='套餐图片'/>
                <div className='info-right'>
                  <div>创建时间：{item.createTime}</div>
                  <div>预约时间：{item.orderTime}</div>
                </div>
              </div>
              <div className='operation'>订单详情</div>
            </li>
            )
          })}
         
        </ul>
        <ul className='order-list'>
        {this.state.finishList.map((item,index)=>{
            return(
              <li key={'item'+index} className='item unfin-item'>
              <div className='item-header'>
                <span className='business-info'><img src='/static/imgs/icon/business.png' alt='商家图标' />{item.name}</span>
                <span className='status'>已完成</span>
              </div>
              <div className='order-info'>
                <img src={item.img} alt='套餐图片'/>
                <div className='info-right'>
                  <div>创建时间：{item.createTime}</div>
                  <div>预约时间：{item.orderTime}</div>
                </div>
              </div>
              <div className='operation'>评论订单</div>
            </li>
            )
          })}
        </ul>
        </Tabs>
      </div>
    )
  }
}
export default Member