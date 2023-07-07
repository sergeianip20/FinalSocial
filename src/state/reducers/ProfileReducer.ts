import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {thunkTryCatch} from 'common/tryCatchThunk';
import {createAppAsyncThunk} from 'state/reducers/createAsyncThunkApp'
import {ProfileContent, userModelType} from 'Api/Api'


export type userUpdateType ={
    contacts: {
        facebook: string
        github: string,
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: number
}
const FetchProfile = createAppAsyncThunk<{ profile: UserProfileData }, string>
("profile/fetch", async (arg: string, thunkAPI: any) => {

    return thunkTryCatch(thunkAPI, async () => {

            const res = await ProfileContent.getProfile(arg)


            return {profile: res}

        }
    )
})
const updateProfile = createAppAsyncThunk<{ profile: userUpdateType }, userModelType>
('profile/update', async (arg: userModelType, thunkAPI: any) => {
    const {getState} = thunkAPI
    return thunkTryCatch(thunkAPI, async () => {


        const res = await ProfileContent.updateProfile(arg)

    })
})
const updateFotoThunk = createAppAsyncThunk<any, File>('profile/image', async (arg: File, thunkAPI: any) => {

    return thunkTryCatch(thunkAPI, async () => {

        const res = await ProfileContent.savePhoto(arg)
    })

})

let initialState = {

    PostData: [
        {id: 1, post: 'mypost number 1', likesCoint: 1},
        {id: 2, post: 'mypost number 2', likesCoint: 3},
        {id: 3, post: 'mypost number 3', likesCoint: 12},
    ],
    newPostText: '',
    UserProfile: {
        aboutMe: ' ',
        contacts: {
            facebook: ' ',
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ' ',
        },
        fullName: ' ',
        lookingForAJob: true,
        lookingForAJobDescription: ' ',
        userId: 10,
        photos: {
            large: ' ',
            small: ' '
        }
    }
}
export type AppInitialStateType = typeof initialState
export type UserProfileData = {
    aboutMe: string,
    contacts: {
        facebook: string
        github: string,
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: number
    photos: {
        large: string
        small: string
    }
}
const slice = createSlice({
        name: 'profile',
        initialState,
        reducers: {
            addPost(state: AppInitialStateType, action) {
                let NewPost = {
                    id: 5,
                    post: state.newPostText,
                    likesCoint: 4
                }
                state.PostData.push(NewPost)
                state.newPostText = ''
            },
            updateNewPostText(state: AppInitialStateType, action: PayloadAction<{ text: string }>) {
                state.newPostText = action.payload.text
            },
            addProfile(state: AppInitialStateType, action: PayloadAction<{ profile: UserProfileData }>) {
                state.UserProfile = action.payload.profile
            }
        },
        extraReducers: builder => {
            builder.addCase(FetchProfile.fulfilled, (state, action) => {
                state.UserProfile.userId = action.payload.profile.userId
                state.UserProfile.aboutMe = action.payload.profile.aboutMe
                state.UserProfile.contacts = {...action.payload.profile.contacts}
                state.UserProfile.fullName = action.payload.profile.fullName
                state.UserProfile.photos = {...action.payload.profile.photos}


            })
        }
    }
)
export const ProfileReducers = slice.reducer
export const profileAction = slice.actions
export const ProfileThunk = {FetchProfile, updateFotoThunk, updateProfile}
