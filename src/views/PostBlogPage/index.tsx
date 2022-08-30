import React from 'react'
import {
  Form,
  Input,
  Button,
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { postBlog } from '../../api/blog';
import { useNavigate } from 'react-router';

const { TextArea } = Input;

/**
 * 发表博客页面
 *  
 * @author by.
 * @since 2022/8/12
 */


export default function PostBlogPage() {
  let handled:boolean = false
  const onNavigate = useNavigate()

  const onFinish = (async (values:any) => {
    if(handled === true)return;
    else{
      const resp = (await postBlog(values)).resp
      if(resp.code === 200){
        handled = true
        window.alert("上传成功！")
        setTimeout(()=> {
          onNavigate("/")
        },3000)
      }else{
        window.alert("上传失败，请再试一次！")
      }
    }
  })
  return (
    <div className='BlogPoster'>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item name="title" label="标题">
          <Input />
        </Form.Item>
        <Form.Item name ="description" label="简介">
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item name="blogContent" label = "具体内容">
          <TextArea rows={50} />
        </Form.Item>
        <Form.Item style={{alignItems:'center'}}>
          <Button type='primary' htmlType='submit'>提交!</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
