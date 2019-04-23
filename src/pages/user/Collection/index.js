import React from 'react'
import { NavBar, Icon, Button,Modal } from 'antd-mobile';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'
import * as userInfoActionsFromOtherFile from '@/store/userinfo/action'
import { getCollectionList,deleteCollect } from '@/api/user'
import LoadingModal from '@/components/LoadingModal'
class Collection extends React.Component {
  constructor(props){
    super(props);
    this.state={
      collectionList:[],
      isDelete:false,
      userId : this.props.userinfo.userId,
      loading: true
    }
  }
  back(){
   window.history.back()
  }
  async componentDidMount(){
    let userId = this.props.userinfo.userId
    await getCollectionList({user_id:userId}).then(res=>{
      console.log(res)
      this.setState({collectionList:res.data.ct})
      setTimeout(()=>{

        this.setState({loading:false})
      },300)
    })
  }
  editCollect(){
    this.setState({isDelete:!this.state.isDelete})
  }
  onTouchStart(id){ 
    this.timeOutEvent = setTimeout(()=> { 
    this.timeOutEvent = 0; 
    console.log('id',id)
    Modal.alert('','确认要删除此收藏吗？',[
      {text:'取消'},
      {text:'确定',onPress:()=>{
        deleteCollect({collect_id:id}).then(res=>{
          console.log(res)
        })
        
        getCollectionList({user_id:this.props.userinfo.userId}).then(res=>{
          console.log(res)
          this.setState({collectionList:res.data.ct})
        })
      }}
    ])
    }, 800);
  }
  onTouchMove() {  
    clearTimeout(this.timeOutEvent);  
    this.timeOutEvent = 0;  
  } 
  onTouchEnd() {  
      clearTimeout(this.timeOutEvent);  
      if (this.timeOutEvent != 0) {  

          console.log('你点击了');  
      }  
      return false;  
  }  
  render(){
    return(
      <div className='m-collection'>
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={this.back.bind(this)}
            rightContent={<div 
              onClick = {this.editCollect.bind(this)}
             >{this.state.isDelete?"完成":'编辑'}</div>}
          >
            我的收藏
          </NavBar>
          {this.state.loading ? <LoadingModal/> :
          <div>
            <ul className='collection-list'>
              {this.state.collectionList.map(item=>{
                let data = item.poster
                let key = item['collect_id']
                return(
                  <li className='item g-mycard' key={key}
                    onTouchStart={this.onTouchStart.bind(this,key)} 
                    onTouchMove={this.onTouchMove.bind(this,key)}
                    onTouchEnd ={this.onTouchEnd.bind(this,key)}
                  >
                  {this.state.isDelete && 
                  <div className='del-check'></div>
                  }
                    <img src='/static/imgs/find/1.png' alt='' />
                    <div className='info grow-item'>
                      <div className='des'>{data['post_content']}</div>
                      <div className='author'>123</div>
                    </div>
                  </li>
                )
              })}
              
            </ul>
            {this.state.isDelete &&
              <div className='delete-collect g-btn-bottom' >
                <Button type='primary' >删除</Button>
              </div>
            }
          </div>
          }
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(111,state)
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection)