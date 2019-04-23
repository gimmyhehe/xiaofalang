import React from 'react'
import {WhiteSpace, List, Button, DatePicker,Picker,InputItem,ImagePicker} from 'antd-mobile'
import { getUserData } from '@/api/user'
import { getToken } from '@/utils/auth'
import { formatDate } from '@/utils/tools'
import Header from '@/components/common/header'
import LoadingModal from '@/components/LoadingModal'
const Item = List.Item;
class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userInfo:{

      },
      birthday: 852048000000,
      date: null,
      gender: '男',
      avater: [{url:'/static/imgs/logo.jpg',id:'1'}],
      userName: '',
      gender: "男",
      email: "123456789@qq.com",
      phone: "123456789",
      loading: true
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
  componentWillMount(){
    let userName = getToken()
    getUserData({user_name:userName}).then(res=>{
      let data = res.data
      let userInfo={}
      userInfo.userName = data['user_name']
      userInfo.gender = data['gender']
      userInfo.birthday = data['birth_date']
      userInfo.email = data['email']
      userInfo.phone = data['phone_number']
      this.setState({userInfo})
      this.setState({loading:false})
    })
  }
  testFile(){
    let inputNode = document.getElementById('user-avater')
    let evt = new MouseEvent('click',{
      bubbles: false,
      cancelable : true,
      view:window
    })
    inputNode.dispatchEvent(evt)
  }
  xmTanUploadImg() {
    let obj=  document.getElementById('user-avater')
    var file = obj.files[0];
    
    console.log(obj);console.log(file);
    console.log("file.size = " + file.size);  //file.size 单位为byte

    var reader = new FileReader();

    //读取文件过程方法
    reader.onloadstart = function (e) {
        console.log("开始读取....");
    }
    reader.onprogress = function (e) {
        console.log("正在读取中....");
    }
    reader.onabort = function (e) {
        console.log("中断读取....");
    }
    reader.onerror = function (e) {
        console.log("读取异常....");
    }
    reader.onload = function (e) {
        console.log("成功读取....");

        var img = document.getElementById("xmTanImg");
        img.src = e.target.result
        //或者 img.src = this.result;  //e.target == this
    }

    reader.readAsDataURL(file)
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
    const userInfo = this.state.userInfo
    return (
      <div>
        <Header title="个人资料"></Header>
        {
          this.state.loading ? <LoadingModal/> :
          <div>
            <input type='file' onChange={this.xmTanUploadImg} id='user-avater' style={{display:'none'}}/>
            
            <List renderHeader={() => '   '} className="my-list g-list">
              <Item extra={<div  onClick={this.testFile.bind(this)} style={{height:'100px',width:'100px',display:'inline-block'}}>
                  <img id='xmTanImg' src='/static/imgs/default.png' alt='用户头像' style={{height:'100px',width:'100px'}} />
                </div>}>头像</Item>
              <Item extra={userInfo.userName}>用户名</Item>
              <Item extra={userInfo.phone}>手机</Item>
              <Item extra={userInfo.email}>邮箱</Item>
              
              <Picker
              data={gender}
              value={userInfo.gender}
              cols={1}
              onChange={this.onChangeColor.bind(this)}
            >
              <List.Item arrow="horizontal">性别</List.Item>
            </Picker>
              <DatePicker
              mode="date"
              title="请选择生日"
              extra={formatDate(userInfo.birthday,'yyyy-MM-dd')}
              value={this.state.date}
              onChange={ date => {this.setState({ date }); console.log(date.getTime()) }}
            >
              <List.Item arrow="horizontal">生日</List.Item>
            </DatePicker>
            </List>
            <WhiteSpace size='lg'></WhiteSpace>
            <Button type='primary' onClick={this.testFile.bind(this)}>保存</Button>
          </div>
        }
        
      </div>
    )
  }
}
export default Profile