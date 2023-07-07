import {Image, Col, Row, Card} from 'antd'
import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Menus} from "component/Menu/Menu";
import {ProfileInfo} from "component/profile/ProfileInfo";
import {ProfileImage} from "component/profile/ProfileImage";
import {useAppDispatch, useAppSelector} from "component/hook/hook";
import {ProfileThunk} from "state/reducers/ProfileReducer";
import {Spin} from 'antd'
import {isLoadingSelector, contacsSelector, fullNameSelector, imageSelector} from 'component/profile/profile.selector'

export const Profile: FC = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(isLoadingSelector)
    const contacs = useAppSelector(contacsSelector)
    const fullName = useAppSelector(fullNameSelector)
    const image = useAppSelector(imageSelector)
    let
        {
            id
        }
            = useParams()
    console.log(useParams())
    useEffect(() => {
        if (!id) {
            id = ''

        } else {

            dispatch(ProfileThunk.FetchProfile(id))
        }

    }, [])

    return <Card

        style={{width: '80%', height: '100',}}

    >

        <Row>
            <Col span={3}>
                <Menus/>
            </Col>
            {isLoading ? <Col span={21}> <Col ></Col><Col style={{alignItems:'center'}}  span={16}><Spin  tip="Loading" size="large" style={{float:'right'}}></Spin></Col></Col> : <Col span={21}>
                <ProfileImage image={image}/>
                <ProfileInfo label={'Имя'} value={fullName}/>
                <ProfileInfo label={'github'} value={contacs.github}/>
                <ProfileInfo label={'facebook'} value={contacs.facebook}/>
                <ProfileInfo label={'ВК'} value={contacs.vk}/>
                <ProfileInfo label={'Youtube'} value={contacs.youtube}/>
                <ProfileInfo label={'Twitter'} value={contacs.twitter}/>
            </Col>}

        </Row>

    </Card>
}
