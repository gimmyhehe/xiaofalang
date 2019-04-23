import React from 'react'
import Header from '@/components/common/header'
import { register } from '@/api/user'
import './style.scss'
import { List, InputItem, WhiteSpace , Button,Modal } from 'antd-mobile';
import { Upload } from 'element-react'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form';
class Register extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state = {
      imageUrl: '',
      avater:null
    };
  }
  
    onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error) => {
          if (!error) {
            let params =  this.props.form.getFieldsValue()
            params.fileImg = this.state.avater
            console.log(params);
            
            register(params).then((res)=>{
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

      handleAvatarScucess(res, file) {
        this.setState({ imageUrl: URL.createObjectURL(file.raw) });
        this.setState({avater:file.raw})
      }
      
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpg'||file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
      
        if (!isJPG) {
          Modal.alert('上传头像图片只能是jpg/png格式!');
        }
        if (!isLt2M) {
          Modal.alert('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const { imageUrl } = this.state;
        return (
        <div className='g-reigster' >
          <Header title='注册'/>
          <form className="g-form-line" style={{marginTop:'100px'}}>
          <Upload
            className="avatar-uploader"
            action="//jsonplaceholder.typicode.com/posts/"
            showFileList={false}
            onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
            beforeUpload={file => this.beforeAvatarUpload(file)}
          >
            { imageUrl ? <img src={imageUrl} className="avatar" /> : <i className="el-icon-plus avatar-uploader-icon"></i> }
          </Upload>
          <List
            renderFooter={() => getFieldError('user_name') && getFieldError('user_name').join(',')}
          >
            <InputItem
              {...getFieldProps('user_name', {
                // initialValue: 'little ant',
                rules: [
                  { required: true, message: '请输入账号' },
                  { validator: this.validateAccount },
                ],
              })}
              clear
              error={!!getFieldError('user_name')}
              onErrorClick={() => {
                alert(getFieldError('user_name').join('、'));
              }}
              placeholder="请输入账号"
            >账号</InputItem>
            <InputItem {...getFieldProps('password')} clear placeholder="请输入密码" type="password">
              密码
            </InputItem>
            <InputItem   clear placeholder="再次确认密码" type="text">
              确认密码
            </InputItem>
            <InputItem {...getFieldProps('phone_number')}  clear placeholder="手机号" type="text">
              手机号
            </InputItem>
            <InputItem {...getFieldProps('email')}  clear placeholder="邮箱" type="text">
              邮箱
            </InputItem>
            <InputItem {...getFieldProps('user_type')}  clear placeholder="类型" type="number">
              类型
            </InputItem>
          </List>
            <Button type="primary"   onClick={this.onSubmit}>注册</Button>
          </form>
        </div>
        )
    }
}
export default createForm()(Register)
