import React, {FC} from 'react';
import {Avatar, Col, Image, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";

type ProfileImageType = {
    image: string
}
export const ProfileImage: FC<ProfileImageType> = ({image}) => {
    return (
        <Row>
            <Col span={8}></Col>
            <Col span={8}>{image ? <Avatar style={{width: 500, height: 500}} src={image}/> :
                <Avatar style={{width: 500, height: 500}} size="large" icon={<UserOutlined/>}/>}
            </Col>
            <Col span={8}></Col>
        </Row>
    );
};

