import React from 'react'
import {Badge, List} from 'antd-mobile'

import './style.less'
import Footer from '@/components/common/footer'
const Item = List.Item;
const Brief = Item.Brief;
export default class User extends React.Component{
  constructor(props){
    super(props)
    this.state={
      menuData:[
        {
          icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text: `收藏`
        },
        {
          icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text: `评价`
        },
        {
          icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
          text: `浏览记录`
        },
        
      ]
    }
  }
  render(){
    return (
      <div className='g-user'>
        <div className='user-header'>
          <span className='iconfont iconuser'></span>
          <span className='iconfont iconmeg'>
            <Badge text={77} overflowCount={9}></Badge>
          </span>
          <div className='avatar'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
            <div className='userinfo'>
              <div className='name'>Gimmyh呵呵</div>
              <div className='level'>等级LV2</div>
            </div>
          </div>
        </div>
        <div className='menu'>
          <div className='item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt=''/>
            收藏
          </div>
          <div className='item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt=''/>
            收藏
          </div>
          <div className='item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt=''/>
            收藏
          </div>
        </div>
        <List className='memu-list' style={{marginTop:'30px'}}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >My wallet</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            My Cost Ratio
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >My wallet</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            My Cost Ratio
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >My wallet</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            My Cost Ratio
          </Item>
        </List>
        <Footer></Footer>
      </div>
      
    )
  }
}