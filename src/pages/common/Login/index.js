import React from 'react'
import './login.less'
import Header from '@/components/common/header'
import { login } from '@/api/user'
import { List, InputItem, WhiteSpace , Button,Modal } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form';
const Item = List.Item;
const alert = Modal.alert
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            value: 1,
        }
    }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        let params = this.props.form.getFieldsValue()
        console.log(params);
        login(params).then((res)=>{
          let data = res.data
          if(data.status===0){
            this.props.history.push('/user')
            
          }else{
            alert('提示', data.msg, [
              { text: '确定', onPress: () => console.log('cancel') },
            ])
          }
        })
      } else {
        alert('请先完善登录信息');
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 2) {
      callback();
    } else {
      callback(new Error('用户名最少为3位'));
    }
  }
    render() {
      const { getFieldProps, getFieldError } = this.props.form;
        return (
        <div className='g-login'>
          <Header title='登录'/>
          <img className='logo' src="https://gitlab.shockwest.com/uploads/-/system/user/avatar/25/avatar.png" alt=''/>
          <form className="g-form-line">
          <List
            renderFooter={() => getFieldError('username') && getFieldError('username').join(',')}
          >
            <InputItem
              {...getFieldProps('username', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入账号' },
                  { validator: this.validateAccount },
                ],
              })}
              clear
              error={!!getFieldError('username')}
              onErrorClick={() => {
                alert(getFieldError('username').join('、'));
              }}
              placeholder="请输入账号"
            >账号</InputItem>
            <InputItem {...getFieldProps('password',{
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入密码' },
                  { validator: this.validateAccount },
                ],
              })} clear placeholder="请输入密码" type="password">
              密码
            </InputItem>
            <InputItem   clear placeholder="验证码" type="text">
              验证码
            </InputItem>
          </List>
            <Button type="primary"   onClick={this.onSubmit}>登录</Button>
            <WhiteSpace size='lg'></WhiteSpace>
            <Button><Link to='/register'>注册</Link></Button>
          </form>
        </div>
        )
    }
}
export default createForm()(Login)