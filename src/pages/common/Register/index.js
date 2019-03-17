import React from 'react'
import Header from '@/components/common/header'
import { login } from '@/api/user'
import { List, InputItem, WhiteSpace , Button,Modal } from 'antd-mobile';
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form';
class Register extends React.Component {
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
            alert('Validation failed');
          }
        });
      }
      onReset = () => {
        this.props.form.resetFields();
      }
      validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
          callback();
        } else {
          callback(new Error('At least four characters for username'));
        }
      }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
        <div className='g-reigster' 
        style={{background:'url(http://h5.shockwest.com/assets/imgs/login/signup.png) no-repeat fixed top',
                backgroundSize:'cover',height:'100vh'}}>
          <Header title='注册'/>
          <form className="g-form-line" style={{marginTop:'100px'}}>
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
            <InputItem {...getFieldProps('password')} clear placeholder="请输入密码" type="password">
              密码
            </InputItem>
            <InputItem   clear placeholder="再次确认密码" type="text">
              确认密码
            </InputItem>
            <InputItem   clear placeholder="手机号" type="text">
              手机号
            </InputItem>
            <InputItem   clear placeholder="用户昵称" type="text">
              用户昵称
            </InputItem>
          </List>
            <Button type="primary"   onClick={this.onSubmit}>注册</Button>
          </form>
        </div>
        )
    }
}
export default createForm()(Register)
