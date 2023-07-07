import {useAppDispatch} from "component/hook/hook";
import {Button, message, Upload, UploadProps} from "antd";
import {ProfileThunk} from "state/reducers/ProfileReducer";
import {UploadOutlined} from "@ant-design/icons";
import React from "react";
import {Input, Row, Col, Card, Form} from 'antd'


export  const UpdatePhoto =()=> {
    const dispatch = useAppDispatch()
    const props: UploadProps = {
        name: 'file',
        action: 'https://http://localhost:3000/',
        listType: 'picture',
        multiple: true,
        accept: '.png, .jpeg',
        headers: {
            authorization: 'authorization-text',
        },
        beforeUpload: (file) => {
            dispatch(ProfileThunk.updateFotoThunk(file))

            return false
        },

        onChange(info) {
            if (info.file.status !== 'uploading') {
                // dispatch(ProfileThunk.updateFotoThunk())
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);

            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    }
    return <Row>
        <Upload {...props}>
            <Button icon={<UploadOutlined/>}>Click to Upload</Button>
        </Upload>
    </Row>

}






