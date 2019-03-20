import React from 'react'
import {Badge, List,Modal,Button,WhiteSpace} from 'antd-mobile'
import { Link,withRouter } from 'react-router-dom'
import { removeToken } from '@/utils/auth'
import store from '@/store'
import './style.less'
import Footer from '@/components/common/footer'
const Item = List.Item;
const Brief = Item.Brief;
class User extends React.Component{
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
        
      ],
      token:store.getState().userinfo.token
    }
  }
  handleJump(token,path){
    if(token==null){
      Modal.alert('请先登录')
    }else{
      this.props.history.push(path)
    }
  }
  logout(){
    Modal.alert('','确认要退出登录吗？',[
      {text:'取消'},
      {text:'确定',onPress:()=>{
        removeToken()
        store.dispatch({type:"LOGOUT",data:{token:null}})
        this.setState({token:store.getState().userinfo.token})
      }}
    ])
  }
  render(){
    return (
      <div className='g-user'>
        <div className='user-header'>
          <span className='iconfont iconuser'></span>
          <span className='iconfont iconmeg'>
            <Badge text={77} overflowCount={9}></Badge>
          </span>
          { !this.state.token ?
          <div className='avatar'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
            <div className='userinfo'>
              <div className='name'><Link to='/login'>登录/注册</Link></div>
              <div className='level'>LV0</div>
            </div>
          </div> :
          <div className='avatar'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
            <div className='userinfo'>
              <div className='name'>Gimmyh呵呵</div>
              <div className='level'>等级LV2</div>
            </div>
          </div>
          }
        </div>
        <div className='menu'>
          <div className='item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt=''/>
            收藏
          </div>
          <div className='item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt=''/>
            优惠券
          </div>
          <div className='item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt=''/>
            发表文章
          </div>
        </div>
        <List className='memu-list' style={{marginTop:'30px'}}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >我的订单</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={this.handleJump.bind(this,this.state.token,'/profile')}
            arrow="horizontal"
          >
           个人资料
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >我的文章</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            会员中心
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >我的关注</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            关于小发廊
          </Item>
        </List>
        <WhiteSpace size='lg'/>
        {
         this.state.token  ? <Button type='primary' onClick={this.logout.bind(this)}>退出登录</Button> : ''
        }
        <Footer></Footer>
      </div>
      
    )
  }
}
export default withRouter(User)