import React from 'react'
import { Flex,WhiteSpace,WingBlank  } from 'antd-mobile';

export default class Classify extends React.Component {
  render(){
    return (
      <WingBlank className="classify-box">
        <Flex>
          <Flex.Item style={{flexGrow:2,backgroundColor:'#ccc',height:'80px',borderTopLeftRadius:'.5em',borderBottomLeftRadius:'.5em'}}>
          <h4>发型设计</h4>
          </Flex.Item>
          <Flex.Item style={{flexGrow:1,backgroundColor:'#ccc',height:'80px',borderTopRightRadius:'.5em',borderBottomRightRadius:'.5em'}}>
          <h4>头发护理</h4>
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <Flex>
          <Flex.Item style={{flexGrow:1,backgroundColor:'#ccc',height:'80px',borderTopLeftRadius:'.5em',borderBottomLeftRadius:'.5em'}}>
          <h4>优质发型师</h4>
          </Flex.Item>
          <Flex.Item style={{flexGrow:2,backgroundColor:'#ccc',height:'80px',borderTopRightRadius:'.5em',borderBottomRightRadius:'.5em'}}>
          <h4>精选发型推荐</h4>
          </Flex.Item>
        </Flex>
      </WingBlank>
    )
  }
}