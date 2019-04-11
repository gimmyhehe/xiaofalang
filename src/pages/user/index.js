import React from 'react'
import {Badge, List,Modal,Button,WhiteSpace} from 'antd-mobile'
import { Link,withRouter } from 'react-router-dom'
import { removeToken } from '@/utils/auth'
import store from '@/store'
import './style.scss'
import Footer from '@/components/common/footer'
const Item = List.Item;
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
  handleJump(path){

    if(this.state.token==null){
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
            <img src="/static/imgs/default.png" alt='' />
            <div className='userinfo'>
              <div className='name'><Link to='/login'>登录/注册</Link></div>
              <div className='level'>LV0</div>
            </div>
          </div> :
          <div className='avatar'>
            <img src="/static/imgs/find/3.png" alt='' />
            <div className='userinfo'>
              <div className='name'>Gimmyh呵呵</div>
              <div className='level'>等级LV2</div>
            </div>
          </div>
          }
        </div>
        <div className='menu'>
          <div className='item' onClick={this.handleJump.bind(this,'/user/collection')}>
            <img src="/static/imgs/icon/collection.png" alt=''/>
            收藏
          </div>
          <div className='item' onClick={this.handleJump.bind(this,'/user/discount')}>
            <img src="/static/imgs/icon/quan.png" alt=''/>
            优惠券
          </div>
          <div className='item' onClick={this.handleJump.bind(this,'/user/collection')}>
            <img src="/static/imgs/icon/article.png" alt=''/>
            发表文章
          </div>
        </div>
        <List className='menu-list' style={{marginTop:'30px'}}>
          <Item
            thumb={<i className="iconfont iconorder"></i>}
            arrow="horizontal"
            onClick={this.handleJump.bind(this,'/user/collection')}
          >我的订单</Item>
          <Item
            thumb={<i className="iconfont iconuser"></i>}
            onClick={this.handleJump.bind(this,'/user/profile')}
            arrow="horizontal"
          >
           个人资料
          </Item>
          <Item
            thumb={<i className="iconfont iconarticle"></i>}
            arrow="horizontal"
            onClick={this.handleJump.bind(this,'/user/collection')}
          >我的文章</Item>
          <Item
            thumb={<i className="iconfont iconmember"></i>}
            onClick={this.handleJump.bind(this,'/user/member')}
            arrow="horizontal"
          >
            会员中心
          </Item>
          <Item
            thumb={<i className="iconfont iconstar"></i>}
            arrow="horizontal"
            onClick={this.handleJump.bind(this,'/user/collection')}
          >我的关注</Item>
          <Item
            thumb={<i className="iconfont iconinfo"></i>}
            onClick={this.handleJump.bind(this,'/user/about')}
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