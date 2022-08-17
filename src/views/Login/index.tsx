import React from 'react'
import { Form, Input,Checkbox,Button, Alert} from 'antd';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props:any) {
  const onFinish = (value:any) => {
      //TODO: Submit & get feed back
      <Alert type='success' message="Succeed!"/>
  };

  const onFinishFailed = (errorInfo:any) => {
    return (
      <Alert type='error' message="Error" description={JSON.stringify(errorInfo)}/>
    )
  }
  const onNavigate = useNavigate();
  const atSubmit = () => {
    setTimeout(() => {
      onNavigate('/')
    },5000)
  }

  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" onClick={atSubmit}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}
