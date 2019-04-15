import React from 'react'
import {Tabs, WhiteSpace} from 'antd-mobile'
import './style.scss'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import PopModal from '@/components/PopModal'
import CommentArticle from '../CommentArticle/index'
const tabs = [
  { title: '消费评论' },
  { title: '发型护理' },
];

class FindIndex extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props.history)
    this.state={
      modal2: false,
      commentList:[
        {
          img:'/static/imgs/find/1.png',
          title:'绝世美颜发型设计',
          pubImg:"/static/imgs/find/1.png",
          pubName:'小发郎用户',
          likeNum:40
        },
        {
          img:'/static/imgs/find/2.png',
          title:'这个发型酷到爆炸',
          pubImg:"/static/imgs/find/2.png",
          pubName:'gimmy',
          likeNum:1
        },
        {
          img:'/static/imgs/find/3.png',
          title:'到店消费之后的评论',
          pubImg:"/static/imgs/find/3.png",
          pubName:'渣渣辉',
          likeNum:54
        },
      ],
      shareList:[
        {
          img:'/static/imgs/find/1.png',
          title:'绝世美颜发型设计',
          pubImg:"/static/imgs/find/1.png",
          pubName:'小发郎用户',
          likeNum:40
        },
        {
          img:'/static/imgs/find/1.png',
          title:'绝世美颜发型设计',
          pubImg:"/static/imgs/find/1.png",
          pubName:'小发郎用户',
          likeNum:40
        },
        {
          img:'/static/imgs/find/1.png',
          title:'绝世美颜发型设计',
          pubImg:"/static/imgs/find/1.png",
          pubName:'小发郎用户',
          likeNum:40
        },
      ]
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
  showDetai(){
    console.log(this.child)
    this.child.show()
  }
  render(){
    const Detail = ()=>(
      <div>
        <p>this is children</p>
      </div>
    )
    return (
      <div className='m-find'>
        <Header title="发现"></Header>
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => 
            { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { 
            console.log('onTabClick', index, tab); }}
        >
        <div className='container'>
          {this.state.commentList.map((item,index)=>{
            return(
              <div key={index} 
                className='find-item' 
                onClick={this.showDetai.bind(this)} 
              >
              <img src={item.img} alt='' />
              <div className='title'>{item.title}</div>
              <div className='publisher'>
                <img src={item.pubImg} alt='' />
                <span className='pub-name'>{item.pubName}</span>
                <span className='like'>
                  <i className='iconfont iconlike'></i>
                  {item.likeNum}
                </span>
              </div>
            </div>
            )
          })}
        </div>
        <div className='container'>
          {this.state.shareList.map((item,index)=>{
              return(
                <div  key={index} className='find-item' onClick={this.showDetai.bind(this)} >
                  <img src={item.img} alt='' />
                  <div className='title'>{item.title}</div>
                  <div className='publisher'>
                    <img src={item.pubImg} alt='' />
                    <span className='pub-name'>{item.pubName}</span>
                    <span className='like'><i className='iconfont iconlike'></i>{item.likeNum}</span>
                  </div>
                </div>
              )
            })}
        </div>
        </Tabs>
        <WhiteSpace />
        <PopModal title='详情页' ref={(ref)=>{this.child = ref}} ><CommentArticle /></PopModal>
        <Footer/>
      </div>
    )
  }
}
export default FindIndex