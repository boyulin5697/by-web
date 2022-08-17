import React, { useState,useCallback } from 'react'
import { useNavigate } from 'react-router';
import {  Alert, Button, Form, Input, Select } from 'antd'
import { register } from '../../api/user';

/**
 * 注册页面
 * 
 * @author by.
 * @since 2022/8/15
 * 
 */

const { Option } = Select;

enum RegisteredConst {
  UnRegistered = 0,
  Registering,
  Success,
  Failed
}

export default function RegisterPage(props:any) {
  const [ registered, setRegistered ] = useState<number>(RegisteredConst.UnRegistered);
  const [ sentRequest, setSentRequest ] = useState<boolean>(false);
  const [ sendResult, setSendResult ] = useState<boolean>();
  const [ wrong, setWrong ] = useState<string>('');
  const onNavigate = useNavigate();
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };


  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = useCallback(async (values:any) => {
    if(sentRequest&&(registered === RegisteredConst.Success))return
    const response = (await register(values)).resp
    if(response.code===200){
      setRegistered(RegisteredConst.Success)
      setSendResult(true)
      setSentRequest(true)
      setTimeout(() => onNavigate("/"),3000)
    }else{
      setRegistered(RegisteredConst.Failed)
      setSendResult(false)
      setSentRequest(true)
      setWrong(response.message)
    }
    setSentRequest(false)
  },[registered,onNavigate,sentRequest])
  return (
    //TODO:在sendRequest被设置成true之后无法显示的bug需要解决
    <div className='RegisterForm'>{
      (sendResult)?(<Alert message='注册成功！'
        closable 
        type="success"
        showIcon></Alert>):<Alert message={wrong} closable type='error'
        showIcon /> 
    }
    <br></br>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
  
}
