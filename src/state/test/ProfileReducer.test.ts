import {profileAction, ProfileReducers} from "../reducers/ProfileReducer";

test('correct add post ', ()=> {
    let initialState = {

        PostData: [
            {id: 1, post: 'mypost number 1', likesCoint: 1},
            {id: 2, post: 'mypost number 2', likesCoint: 3},
            {id: 3, post: 'mypost number 3', likesCoint: 12},
        ],
        newPostText: 'name',
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
    let action = profileAction.addPost
    let endState = ProfileReducers(initialState,action)
    expect(endState.PostData.length).toBe(4)
    expect(endState.newPostText).toBe('')
})
test('correct add post ', ()=> {
    let initialState = {

        PostData: [
            {id: 1, post: 'mypost number 1', likesCoint: 1},
            {id: 2, post: 'mypost number 2', likesCoint: 3},
            {id: 3, post: 'mypost number 3', likesCoint: 12},
        ],
        newPostText: 'name',
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
    let action = profileAction.updateNewPostText({text:'hello'})
    let endState = ProfileReducers(initialState,action)
    expect(endState.PostData.length).toBe(3)
    expect(endState.newPostText).toBe('hello')
})
test('correct add addProfile ', ()=> {
    let initialState = {

        PostData: [
            {id: 1, post: 'mypost number 1', likesCoint: 1},
            {id: 2, post: 'mypost number 2', likesCoint: 3},
            {id: 3, post: 'mypost number 3', likesCoint: 12},
        ],
        newPostText: 'name',
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
    let action = profileAction.addProfile({profile: {
            aboutMe: '',
            contacts: {
                facebook: 'string',
                github: 'string',
                instagram: 'string',
                mainLink: 'string',
                twitter: 'string',
                vk: 'string',
                website: 'string',
                youtube: 'string',
            },
            fullName: 'string',
            lookingForAJob: true,
            lookingForAJobDescription: 'string',
            userId: 2,
            photos: {
                large: 'string',
                small: 'string'
            }
        }})
    let endState = ProfileReducers(initialState,action)
    expect(endState.UserProfile.userId).toBe(2)

})