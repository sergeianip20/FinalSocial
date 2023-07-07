import React, {FC, useCallback} from 'react'
import {useAppDispatch, useAppSelector} from "component/hook/hook";
import {userThunk, userAction} from "state/reducers/UserReducer";

type  UserPageType = {
    currentPage: number,
    pageSize: number
}
export const useUser = () => {
    const dispatch = useAppDispatch()
    const pagesSize = useAppSelector((state)=> state.Userreducer.pagesSize)
    const onChangeHandler = useCallback((e: number) => {
        dispatch(userThunk.usersFetch({currentPage: e, pageSize: pagesSize}))

    }, [dispatch])
    const onClickFolowed = useCallback((userId: number) => {
        dispatch(userThunk.followedThunk(userId))
    }, [dispatch])
    const onClickUnFollowed = useCallback((userId: number) => {
        dispatch(userThunk.unfollowedThunk(userId))
    }, [dispatch])
    const onChangePageSize = useCallback((e: UserPageType) => {
        dispatch(userThunk.usersFetch({currentPage: e.currentPage, pageSize: e.pageSize}))
        dispatch(userAction.updatePazeSize(e.pageSize))
    }, [dispatch])
    return {
        onChangeHandler,
        onClickFolowed,
        onClickUnFollowed,
        onChangePageSize
    }
}
