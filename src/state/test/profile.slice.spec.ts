import {ProfileThunk , ProfileReducers } from 'state/reducers/ProfileReducer'
import {userThunk} from "state/reducers/UserReducer";

describe('authReducer', ()=>{
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

it('Getprofile', ()=>{
const data = {
id:5
     
 }
    const profile ={

aboutMe: ' ',
        contacts: {
            facebook: ' 2',
            github: '2',
            instagram: '3',
            mainLink: '4',
            twitter: '4',
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
    const action = {type: ProfileThunk.FetchProfile.fulfilled.type, payload: {profile}}

  const state= ProfileReducers(initialState,action )

  expect(state.UserProfile).toEqual(profile)
}),
    it('updareProfile', ()=>{
const data = {
 contacts: {
            facebook: ' 3',
            github: '5',
            instagram: '3',
            mainLink: '4',
            twitter: '4',
            vk: '',
            website: '',
            youtube: ' ',
        },
        fullName: ' ',
        lookingForAJob: true,
        lookingForAJobDescription: ' ',
        userId: 10,
     
 }
    const profile ={

aboutMe: ' ',
        contacts: {
            facebook: ' 3',
            github: '5',
            instagram: '3',
            mainLink: '4',
            twitter: '4',
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

})
  
})
