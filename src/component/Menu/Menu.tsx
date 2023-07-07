import React, {useEffect, useState} from 'react';
import {
    AppstoreOutlined,
    AudioOutlined,
    HomeOutlined,
    MailOutlined,
    MessageOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {NavLink, useNavigate, useSearchParams} from 'react-router-dom'
import {useAppSelector} from "component/hook/hook";
import {Logout} from "component/Login/Logout";



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const itemProfile: any = [
    getItem('Profile', 'profile', <HomeOutlined/>),
];
const itemMessages = [
    getItem('Messages', 'messages', <MessageOutlined/>,),
]
const UserItem = [
    getItem('User', 'users', <UserOutlined/>,),
]
const MusicItem = [
    getItem('Music', 'music', <AudioOutlined />,),
]
const ItemSetting = [
    getItem('Settings', 'settings', <SettingOutlined />,),
]
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
export const Menus = () => {
    const [openKeys, setOpenKeys] = useState(['']);
    const userId = useAppSelector((state)=>state.authReducer.userId)
    const navigate = useNavigate()
  const [id, setId]= useState<number>(userId)
 useEffect(()=>{},[id])
    return <div>



        <Menu  mode="inline"
               onClick={()=>{navigate('/profile')}}
                  openKeys={openKeys}
                  style={{width: 256}}
                  items={itemProfile}/>


            <Menu
       onClick={()=>{navigate('/messages')}}
                mode="inline"
                   openKeys={openKeys}
                   style={{width: 256}}
                   items={itemMessages}/>


            <Menu
                onClick={()=>{navigate('/users')}}
                mode="inline"
                   openKeys={openKeys}
                   style={{width: 256}}
                   items={UserItem}/>


            <Menu
                onClick={()=>{navigate('/music')}}
                mode="inline"
                   openKeys={openKeys}
                   style={{width: 256}}
                   items={MusicItem}/>


            <Menu  mode="inline"
                   onClick={()=>{navigate('/settings')}}
                   style={{width: 256}}
                   items={ItemSetting}/>

    </div>
}