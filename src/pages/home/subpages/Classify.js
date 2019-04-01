import React from 'react'
import { Flex,WhiteSpace,WingBlank  } from 'antd-mobile';

export default class Classify extends React.Component {
  render(){
    return (
      <WingBlank className="m-classify">
        <Flex>
          <Flex.Item className="item item-2" id="item1">
          <h4>发型设计</h4>
          <img src="/static/imgs/index/1.png" alt="" />
          </Flex.Item>
          <Flex.Item className="item item-1" id="item2">
          <h4>头发护理</h4>
          <img src="/static/imgs/index/2.png" alt="" />
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <Flex>
          <Flex.Item  className="item item-1" id="item3">
          <h4>优质发型师</h4>
          <img src="/static/imgs/index/3.png" alt="" />
          </Flex.Item>
          <Flex.Item className="item item-2" id="item4">
          <h4>精选发型推荐</h4>
          <img src="/static/imgs/index/4.png" alt="" />
          </Flex.Item>
        </Flex>
      </WingBlank>
    )
  }
}