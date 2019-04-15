import React from 'react'
import Header from '@/components/common/header'
import ArticleFooter from '../components/ArticleFooter'
class CommentArticle extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return (
      <div className='m-comment-article'>
        <div className='g-container'>
          <div className='comment-user'>
            <img src="/static/imgs/find/1.png" alt='' />
            <div className='info'>
              <div>
                <span>gimmyhehe</span>
                <span className='lv'>lv3</span>
              </div>
              <div>2019-01-01</div>
            </div>
            <div>评分：8</div>
          </div>
          <div className='img-container'>
          <img src="/static/imgs/find/1.png" alt='' />
          <img src="/static/imgs/find/1.png" alt='' />
          <img src="/static/imgs/find/1.png" alt='' />
          <img src="/static/imgs/find/1.png" alt='' />
          </div>
          <p className='comment'>
            文章内容文章内容文章内容文章内容文章内容文章内容
            内容文章内容文章内容文章内容文章内容文章内容文章内
            容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
          </p>
          <div className='business'>
            <img src="/static/imgs/find/1.png" alt='' />             
            <div className='info'>
              <div className='name'>店名:盛世美颜店</div>
              <div className='score'>评分:9.6   平均：￥100</div>
              <div className='project'>套餐:烫卷</div>
            </div>
            <div className='star'><span className='iconfont iconstar'></span>10</div>
          </div>
          <div className='view'>浏览3.5万</div>
          <div className='like'>
            <div className='like-num'>
              <div className='iconfont iconlike'></div>
              8
            </div>
            <div className='like-avatar'>
            <img src="/static/imgs/find/1.png" alt='' /> 
            <img src="/static/imgs/find/1.png" alt='' /> 
            <img src="/static/imgs/find/1.png" alt='' /> 
            </div>
          </div>
          <div className='comment-box'>
            <div className='comment-box-header'><span>评论</span>(100)</div>
            <ul className='comment-list'>
              <li className='item'>
                 <img src="/static/imgs/find/1.png" alt='' /> 
                 <div className='content clearfix'>
                  <div className='info'>
                    <span className='name'>giyyme</span>
                    <span className='date'>刚刚</span>
                  </div>
                  <p>
                    网友评论内容网友评论内容网友评论内容网友评论内容
                  </p>
                 </div>
              </li>
              <li className='item'>
                 <img src="/static/imgs/find/1.png" alt='' /> 
                 <div className='content clearfix'>
                  <div className='info'>
                    <span className='name'>giyyme</span>
                    <span className='date'>刚刚</span>
                  </div>
                  <p>
                    网友评论内容网友评论内容网友评论内容网友评论内容
                  </p>
                 </div>
              </li>
            </ul>
          </div>
        </div>
        < ArticleFooter></ArticleFooter>
      </div>
    )
  }
}
export default CommentArticle