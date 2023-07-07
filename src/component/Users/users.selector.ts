import {AppRootStateType} from "state/store";
export const currentpageS =(state:AppRootStateType)=> state.Userreducer.currentPage
export const totalCountSelector =(state:AppRootStateType)=>  state.Userreducer.totalUsersCount
export const usersSelector = (state:AppRootStateType)=> state.Userreducer.users