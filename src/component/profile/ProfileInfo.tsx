import React, {FC} from 'react';
import {Col, Row} from "antd";

type ProfileInfoType ={
    label:string,
    value:string

}
export const ProfileInfo:FC<ProfileInfoType> = React.memo(({label, value}) => {
    return (
        <Row style={{fontSize:25}}>
            <Col span={8}></Col>
            <Col  style={{fontSize:25}} span={4}> {label} </Col>
            <Col  style={{fontSize:25}}span={4}> {value} </Col>
            <Col span={8}></Col>
        </Row>
    );
})

