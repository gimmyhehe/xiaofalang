import React from 'react'
import './style.scss'
import { Button, ImagePicker, Picker, List, Toast } from 'antd-mobile'
import { createForm } from 'rc-form';
import { publishArticle } from '@/api/article'
import Header from '@/components/common/header'
import { withRouter } from 'react-router-dom'
class PbulishArticle extends React.Component{

  state = {
    files: [],
    multiple: true,
  }
  onChange = (files, type, index) => {
    if(files.length>9){
      files = files.slice(0,9)
    }
    this.setState({
      files,
    });
  }
  publishArticle(){
    let params ={}
    let form = this.props.form.getFieldsValue()
    params['post_type'] = form.articleType[0]
    params['post_content'] = form.content
    this.state.files.forEach((item,index)=>{
      params[`fileImg${index}`] = item.file
    })
    console.log(params);
    Toast.loading('文章发布中...', 0);
    publishArticle(params).then(res=>{
      let data = res.data
      if(data.status==0){
        Toast.success('发布成功', 1)
        this.props.history.replace('/user/article')
      }
      Toast.hide()
    })
  }
  render(){
    const { getFieldProps } = this.props.form;
    const { files } = this.state;
    let typeData =[
          {
            label:'发胶',
            value:'发胶'
          },
          {
            label:'设计',
            value:'设计'
          }
        ]
    return (
      <div className='m-publish-article'>
        <Header title="发布文章" />
        <div className='img-container'>
          <p>图片</p>
          <ImagePicker
            files={files}
            onChange={this.onChange}
            length={3}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 9}
            multiple={this.state.multiple}
          />
        </div>
        <div className='article-content'>
          <p>内容</p>
          <textarea  {...getFieldProps('content',{initialValue:'123'})}  />
        </div>
        <Picker
          title="选择类型"
          extra="请选择"
          cols={1}
          data={typeData}
          {...getFieldProps('articleType')}
        >
          <List.Item arrow="horizontal">文章类型</List.Item>
        </Picker>
        <div className='delete-collect g-btn-bottom' >
          <Button type='primary' onClick={this.publishArticle.bind(this)}>立即发布</Button>
        </div>
      </div>
    )
  }
}

export default createForm()(PbulishArticle)