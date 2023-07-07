import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "./createAsyncThunkApp";
import {handleServerNetworkError} from "../../component/Error";
import {userApi, FoolowedUser } from "../../Api/Api";
import {thunkTryCatch} from 'common/tryCatchThunk';
export type InitialStateUserType = {
    users: Array<usersTypeData>
    pagesSize: number
    totalUsersCount: number,
    currentPage: number
    preloader: boolean,
    toggleisFollowed: Array<number>
}
export type usersTypeData = {
    id: number,
    followed: boolean
    name: string
    status: string | null
    photos: {
        large: string | null
        small: string | null
    }
    uniqueUrlName: string | null
}
let initialState: InitialStateUserType = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    preloader: true,
    toggleisFollowed: []
}
type  userArgFetch = {
    currentPage: number, pageSize: number
}
const usersFetch = createAppAsyncThunk<{ items: Array<usersTypeData>, totalUserCount:number }, userArgFetch>(
    'users/fetch', async (arg: userArgFetch, thunkAPI: any) => {
       return thunkTryCatch(thunkAPI, async ()=> {
           const res = await userApi.getUsers(arg.currentPage, arg.pageSize)
           return {items:res.items, totalUserCount:res.totalCount}
       }  )    
    }
)
const followedThunk = createAppAsyncThunk<{item:usersTypeData }, number >(
    'followed/post', async (arg: number,thunkAPI: any)=>{
  return thunkTryCatch(thunkAPI, async ()=> {
    const res = await FoolowedUser.Followed(arg)
      return {item: res}
      
  })
        
    }
)
const unfollowedThunk = createAppAsyncThunk<{item:usersTypeData }, number >(
    'unfollowed/post', async (arg: number,thunkAPI: any)=>{
  return thunkTryCatch(thunkAPI, async ()=> {
    const res = await FoolowedUser.unFollowed(arg)
      return {item: res}
      
  })
        
    }
)

const slice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        updatePazeSize:(state, action)=>{
            state.pagesSize = action.payload}

        },
    extraReducers:(builder)=> {
        builder.addCase(usersFetch.fulfilled , (state, action)=> {
             state.users = [...action.payload.items]
            state.totalUsersCount = action.payload.totalUserCount
        }).addCase(followedThunk.fulfilled, (state, action)=>{
            state.users = [...state.users.map((e:any)=> e.id === action.payload.item.id ? {...e, followed: action.payload.item.followed}: e )]
        }).addCase(unfollowedThunk.fulfilled , (state, action)=> {
            state.users = [...state.users.map((e:any)=> e.id === action.payload.item.id ? {...e, followed: action.payload.item.followed}: e )]
            
        })
    }
})

export const Userreducer = slice.reducer
export const userThunk = {usersFetch, followedThunk, unfollowedThunk}
export const userAction = slice.actions
