import React from 'react'
import {WhiteSpace, List,Button} from 'antd-mobile'
import Header from '@/components/common/header'
const Item = List.Item;
class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return (
      <div>
        <Header title="个人资料"></Header>
        <List renderHeader={() => 'Customized Right Side（Empty Content / Text / Image）'} className="my-list">
          <Item extra="GIMMy呵呵">昵称</Item>
          <Item extra="133123213123">手机</Item>
          <Item extra="图像">头像</Item>
          <Item arrow="horizontal" extra="男" onClick={() => {}}>性别</Item>
          <Item extra="1997-05-25" arrow="horizontal" onClick={() => {}}>生日</Item>
        </List>
        <WhiteSpace size='lg'></WhiteSpace>
        <Button type='primary'>保存</Button>
      </div>
    )
  }
}
export default Profile