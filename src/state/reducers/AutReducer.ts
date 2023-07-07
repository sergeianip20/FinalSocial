import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateAuth} from "../../Type/StateType";
import {thunkTryCatch} from 'common/tryCatchThunk';
import {createAppAsyncThunk} from 'state/reducers/createAsyncThunkApp'
import {authApi, authMe} from "Api/Api";

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
type ArgLoginType = {
    email: string,
    password: string,
    rememberMe: boolean

}

const me = createAppAsyncThunk<{ profile: any }, ''>
("auth/me", async (arg: '', thunkAPI: any) => {
    return thunkTryCatch(thunkAPI,
        async () => {
            const res = await authMe()
            return {profile: res.data.data}
        }
    )
})
const login = createAppAsyncThunk<{ userId: number }, ArgLoginType>("auth/login", async (arg:any, thunkAPI:any) => {
    return thunkTryCatch(
      thunkAPI,
      async () => {
        const res = await authApi.login(arg);

        return {userId: res.data.userId}
    },

 )
})
const logout = createAppAsyncThunk<'',number>('auth/logout', async (arg:number, thunkAPI)=>{
    return thunkTryCatch(
        thunkAPI,
        async () => {
            const res= await authApi.logout()
             return res.data
        })
})
export type AppInitialStateType = typeof initialState
const scile = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAuth(state: AppInitialStateType, action: PayloadAction<{ userId: number, email: string, login: string }>) {
            state.email = action.payload.email
            state.userId = action.payload.userId
            state.login = action.payload.login
        },
        setAppStatus: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth
        },

    },
    extraReducers: builder => {
        builder.addCase(me.fulfilled, (state, action) => {
            state.userId = action.payload.profile.userId
            state.email = action.payload.profile.email
            state.login = action.payload.profile.login

        }).addCase(login.fulfilled, (state, action)=>{
            state.userId= action.payload.userId

        })

    }
})
export const authReducer = scile.reducer
export const authActions = scile.actions
export const authThunk={me, login, logout}