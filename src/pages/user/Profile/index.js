import React from 'react'
import {WhiteSpace, List, Button, DatePicker,Picker,InputItem,ImagePicker} from 'antd-mobile'
import Header from '@/components/common/header'
const Item = List.Item;
class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={
      birthday: '1997-05-25',
      date: null,
      gender: '男',
      avater: [{url:'/static/imgs/logo.jpg',id:'1'}]
    }
  }
  changeDate(date) {
    this.setState({ date })
  }
  onChangeColor(gender){
    this.setState({ gender })
  }
  onIMGChange = (avater, type, index) => {
    console.log(avater, type, index);
    this.setState({
      avater:avater.slice(1)
    });
  }
  render(){
    const gender =[
      {
      label:'男',
      value: '男'
      },
      {
      label:'女',
      value: '女'
      },
    ]
    return (
      <div>
        <Header title="个人资料"></Header>
        <List renderHeader={() => '   '} className="my-list g-list">
          <InputItem
            clear
            value="gimmy"
            placeholder="输入昵称"
            ref={el => this.inputRef = el}
          >昵称</InputItem>
          <Item extra="133123213123">手机</Item>
          <Item extra={<ImagePicker
            files={this.state.avater}
            onChange={this.onIMGChange.bind(this)}
            onImageClick={(index, fs) => console.log(index, fs)}
          />}>头像</Item>
          <Picker
          data={gender}
          value={this.state.gender}
          cols={1}
          onChange={this.onChangeColor.bind(this)}
        >
          <List.Item arrow="horizontal">性别</List.Item>
        </Picker>
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