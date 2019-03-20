import React from 'react'
import {Modal, List,Button} from 'antd-mobile'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

class FindIndex extends React.Component{
  constructor(props){
    super(props)
    this.state={
      modal2: false,
    }
  }
  showArticle(id){
    console.log(id)
    this.setState({
      modal2: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  render(){
    return (
      <div className='m-find'>
        <Header title="发现"></Header>
        <div className='container'>
          <div className='find-item' onClick={this.showArticle.bind(this,1)} >
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
            <div className='title'>这个发型简直酷到爆炸</div>
            <div className='publisher'>
              <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
              <span className='pub-name'>gimmyhehe</span>
              <span className='like'><i className='iconfont iconuser'></i>40</span>
            </div>
          </div>
          <div className='find-item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
            <div className='title'>这个发型简直酷到爆炸</div>
            <div className='publisher'>
              <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
              <span className='pub-name'>gimmyhehe</span>
              <span className='like'><i className='iconfont iconuser'></i>40</span>
            </div>
          </div>
          <div className='find-item'>
            <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
            <div className='title'>这个发型简直酷到爆炸</div>
            <div className='publisher'>
              <img src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt='' />
              <span className='pub-name'>gimmyhehe</span>
              <span className='like'><i className='iconfont iconuser'></i>40</span>
            </div>
          </div>
        </div>
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
          transitionName='cumstom-slide'
          afterClose={() => { console.log("123") }}
        >
          <List renderHeader={() => <div>委托买入</div>} className="popup-list">
            {['股票名称', '股票代码', '买入价格'].map((i, index) => (
              <List.Item key={index}>{i}</List.Item>
            ))}
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
            </List.Item>
          </List>
        </Modal>
        <Footer/>
      </div>
    )
  }
}
export default FindIndex