import 'react-toastify/dist/ReactToastify.css';
import {Button, Card, Checkbox, Form, Input, Row, notification} from 'antd';
import {yupResolver} from '@hookform/resolvers/yup'
import React, { useState } from 'react';
import {Menus} from "component/Menu/Menu";
import {SubmitHandler, useForm} from "react-hook-form";
import {object, string,} from 'yup';
import {toast, ToastContainer} from "react-toastify";
import {useAppDispatch} from "component/hook/hook";
import {authThunk} from "state/reducers/AutReducer";
import {useNavigate} from "react-router-dom";
interface IFormValues {
  email: string;
  password: string;
  rememberMe: boolean
}
export const Login=React.memo(()=> {

  const validateShema = object({
    email: string().required().email(),
    password: string().required().min(3).max(25)
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {register, watch, handleSubmit} = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = data => dispatch(authThunk.login(data))
      .unwrap()
      .then((res) => {
        toast.success("Вы успешно залогинились");
        navigate("/profile");
        console.log(data)
      })
      .catch((err) => {
        toast.error(err.e.response.data.error);
      });
  return (
<Card>
<Row style={{display:'flex', justifyContent:'center', alignItems:'center' }}>

  <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
            autoComplete="off"

  >
    <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input {...register('email')}/>
    </Form.Item>

    <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password {...register('password')}   />
    </Form.Item>

    <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox {...register('rememberMe')}>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
</Row>
  <ToastContainer />
</Card>
  );

})
