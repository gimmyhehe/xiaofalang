import React from 'react'
import './style.less'
import { Carousel, WingBlank } from 'antd-mobile';
export default class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: ['banner1', 'banner2', 'banner3'],
      imgHeight: 176,
    }
  }
  render(){
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          style={{height:'100px',overflow:'hidden',borderRadius:'12px'}}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`/static/imgs/index/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}