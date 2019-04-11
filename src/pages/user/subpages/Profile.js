import React from 'react'
import {WhiteSpace, List, Button, DatePicker} from 'antd-mobile'
import Header from '@/components/common/header'
const Item = List.Item;
class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={
      birthday: '1997-05-25',
      date: null,
    }
  }
  changeDate(date) {
    this.setState({ date })
    console.log(this.state)
  }
  render(){
    return (
      <div>
        <Header title="个人资料"></Header>
        <List renderHeader={() => '   '} className="my-list">
          <Item extra="GIMMy呵呵">昵称</Item>
          <Item extra="133123213123">手机</Item>
          <Item extra="图像">头像</Item>
          <Item arrow="horizontal" extra="男" onClick={() => {}}>性别</Item>
          <DatePicker
          mode="date"
          title="请选择生日"
          extra={this.state.birthday}
          value={this.state.date}
          onChange={ date => {this.setState({ date }); console.log(date.getTime()) }}
        >
          <List.Item arrow="horizontal">生日</List.Item>
        </DatePicker>
        </List>
        <WhiteSpace size='lg'></WhiteSpace>
        <Button type='primary'>保存</Button>
      </div>
    )
  }
}
export default Profile