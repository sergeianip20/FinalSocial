import React, {ChangeEvent} from 'react'
import {Input, Row, Col, Card, Form} from 'antd'
import {UserOutlined, GithubOutlined} from '@ant-design/icons'
import {UpdatePhoto} from "component/form/updatePhoto";
import {UpdateInfo} from "component/form/UpdateInfo";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from 'component/hook/hook';
import {ProfileThunk} from "state/reducers/ProfileReducer";
import {string} from "yup";

interface IFormValues {
    facebook: string;
    github: string;
    instagram: string,
    mainLink:string,
    twitter:string,
    vk:string,
    website:string,
    youtube:string,
    fullName:string,
    lookingForAJob:boolean,
    lookingForAJobDescription:string
}
export const ProfileForm = () => {

    const {register, watch, handleSubmit} = useForm();
    const userId = useAppSelector((state)=> state.authReducer.userId)
    const dispatch = useAppDispatch()
    const onSubmit:SubmitHandler<IFormValues> =data => {
        let apiModel ={
            contacts: {
                facebook: data.facebook,
                github: data.github,
                instagram: data.instagram,
                mainLink: data.mainLink,
                twitter: data.twitter,
                vk: data.vk,
                website: data.website,
                youtube: data.youtube,
            },
            userId,
            fullName: data.fullName,
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription


        }
        dispatch(ProfileThunk.updateProfile(apiModel))
    }

    return (<>
        <Row>
            <Card title='Изменения профиля' bordered={false} style={{width: 1200}}>
                <Form>
                    <Row>
                        <Col span={4}>Имя</Col>
                        <Col span={20}>
                            <Input prefix={<UserOutlined/>}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}> gitHub </Col>
                        <Col span={20}><Input prefix={<GithubOutlined/>}/> </Col>
                    </Row>
                    <UpdateInfo register={register} label={'vk'}/>
                    <UpdateInfo register={register} label={'instagram'}/>
                    <UpdateInfo register={register} label={'twitter'}/>
                    <UpdateInfo register={register} label={'website'}/>
                    <UpdateInfo register={register} label={'youtube'}/>


                </Form>
                <UpdatePhoto/>
            </Card>
        </Row>
    </>)
}
