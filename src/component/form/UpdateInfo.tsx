import {Col, Input, Row} from "antd";
import React, {FC} from "react";
type updateInfoType  ={
     label: string
     register:any

    
    
}

export const UpdateInfo:FC<updateInfoType>=({label, register})=>{
    return <Row><Col span={4}> {label}</Col>
        <Col span={20}><Input  {...register(label)}/> </Col> </Row>
}