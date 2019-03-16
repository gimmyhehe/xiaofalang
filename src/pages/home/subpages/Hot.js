import React from 'react'
import { getAdData } from '@/api/home.js'

export default class Hot extends React.Component{
  constructor(prop,context){
    super(prop,context)
    this.state = {
      data:[]
    }
  }
  render(){
    return(
        <div id="home-ad">
            <h2>人气最高</h2>
            <div className="ad-container clear-fix">
                {this.state.data.map((item, index) => {
                    return <div key={index} className="ad-item float-left">
                        <a rel="noopener noreferrer" href={item.link} target="_blank">
                            <img src={item.img} alt={item.title}/>
                        </a>
                    </div>
                })}
            </div>
        </div>
    )
  }
  componentDidMount() {
    // 获取广告数据
    const result = getAdData()
    result.then(res => {
        // 处理获取的数据
        const data = res.data
        if (data.length) {
            this.setState({
                data: data
            })
        }
    }).catch(ex => {
        // 发生错误
            console.error('首页广告模块获取数据报错, ', ex.message)
    })
  }
}