import React from 'react'
import {WhiteSpace, List, Button, DatePicker,InputItem,Modal } from 'antd-mobile'
import { createForm } from 'rc-form';
import { reject } from 'q';
const Item = List.Item;
const Brief = Item.Brief;
let moneyKeyboardWrapProps = {
  onTouchStart: e => e.preventDefault(),
};
class CreateOrder extends React.Component{
  constructor(props){
    super(props)
    this.state={
      birthday: '1997-05-25',
      date: null,
      type: 'money',
    }
  }
  changeDate(date) {
    this.setState({ date })
    console.log(this.state)
  }
  async closeOrder(){
    // await Modal.alert('预约成功!')
    // await this.props.close()
    const _this = this
    new Promise((resolve,reject)=>{
      Modal.alert('预约成功!')
      setTimeout(()=>resolve(),1000)
    }).then(()=>{
      _this.props.close()
    })
  }
  render(){
    const { getFieldProps } = this.props.form;
    const { type } = this.state;
    return (
      <div>
        <List renderHeader={() => ''} className="my-list">
          <Item  multipleLine onClick={() => {}}>
            服务套餐 <p>套餐一：洗剪吹。发型设计、发型护理</p>
          </Item>
          <DatePicker
            mode="datetime"
            title="选择预约时间"
            extra='请选择'
            value={this.state.date}
            onChange={ date => {this.setState({ date }); console.log(date.getTime()) }}
          >
          <List.Item arrow="horizontal">预约时间</List.Item>
        </DatePicker>
        <InputItem
            {...getFieldProps('money2', {
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            })}
            type={type}
            placeholder="输入手机号"
            ref={el => this.inputRef = el}
            onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
            clear
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >预留手机号</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="输入发型师名字"
            ref={el => this.inputRef = el}
          >发型师</InputItem>
          <InputItem
            {...getFieldProps('input3')}
            placeholder="输入备注"
          /> 
        </List>
        <WhiteSpace size='lg'></WhiteSpace>
        <Button type='primary' onClick={this.closeOrder.bind(this)}>预约</Button>
      </div>
    )
  }
}
export default createForm()(CreateOrder)