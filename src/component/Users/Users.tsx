import React, {useEffect, useCallback} from 'react'
import {Col, Pagination, Row, Avatar, Card, Button} from 'antd';
import {currentpageS, totalCountSelector, usersSelector} from 'component/Users/users.selector'
import {useAppDispatch, useAppSelector} from "component/hook/hook";

import {Menus} from "component/Menu/Menu";
import {useUser} from "component/Users/useUser";
import {useNavigate} from "react-router-dom";

export const Users = () => {
    let currentpage = useAppSelector(currentpageS)
    let totalCount = useAppSelector(totalCountSelector)
    let users = useAppSelector(usersSelector)
    let {onChangeHandler, onClickFolowed, onClickUnFollowed, onChangePageSize} = useUser()
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    useEffect(() => {
        onChangeHandler(1)
    }, [])
    const onClickHandler = useCallback((e: any) => {
        onChangeHandler(e)
    }, [onChangeHandler])
    const onClickFoloweds = useCallback((userId: number) => {
        onClickFolowed(userId)
    }, [onClickFolowed])
    const onClickunFolloweds = useCallback((userId: number) => {
        onClickUnFollowed(userId)
    }, [onClickUnFollowed])
    const onchangepageSize = (current: number, pageSize: number) => {
        onChangePageSize({currentPage: current, pageSize: pageSize})
    }

    return <div>

        <Row>
            <Col span={3}>
                <Menus/>
            </Col>
            <Col span={21}>
                <Pagination onChange={(e) => onChangeHandler(e)} onShowSizeChange={onchangepageSize}
                            defaultCurrent={currentpage} total={totalCount}/>
                {users.map((e: any) => {

                    return <Row key={e.id} style={{width: '100%'}}>
                        <Card>
                            <Col>
                                <Avatar onClick={() => {
                                    navigate('/profile/' + e.id)
                                }} src={e.photos.small}/>

                            </Col>
                            <Col span={7}>
                                {e.name}
                            </Col>
                            <Col span={7}>
                                {e.followed ? <Button onClick={() => {
                                    onClickunFolloweds(e.id)
                                }}> unFollowed </Button> : <Button onClick={() => {
                                    onClickFoloweds(e.id)
                                }}>followed</Button>

                                }

                            </Col>


                        </Card>
                    </Row>

                })

                }


            </Col>
        </Row>
    </div>
}
