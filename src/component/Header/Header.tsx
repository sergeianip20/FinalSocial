import React, {useEffect} from 'react';
import {Button, Card, Col,Row, Avatar }from 'antd'
import { UserOutlined } from '@ant-design/icons';
import {Menus} from "component/Menu/Menu";
import {useForm} from "react-hook-form";
import {AppDispatch} from "state/store";
import {useAppDispatch, useAppSelector} from "component/hook/hook";
import {authThunk} from "state/reducers/AutReducer";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Link, NavLink, useNavigate} from "react-router-dom";

export const Header = React.memo(()=> {
    const dispatch = useAppDispatch()

useEffect(()=> {
dispatch(authThunk.me('')).unwrap().then((res)=>{
    toast.success("Вы успешно залогинились");
 console.log(res)
}).catch((e)=>{
    toast.success("не повезло");
})

},[])
    const login = useAppSelector((state)=> state.authReducer.login)
console.log(login)
    return   <div>
        <Card>
            <Row >
                <Col span={12}>
                 <Avatar  size="large" icon={<UserOutlined />} />
                </Col>
                <Col offset={9}>
                     {login ? login : <Button>Sign in</Button>}
                </Col>
            </Row>
        </Card>

    </div>
})