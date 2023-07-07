import {userThunk, Userreducer} from 'state/reducers/UserReducer'

describe('authReducer', () => {
    type InitialStateUserType = {
        users: Array<usersTypeData>
        pagesSize: number
        totalUsersCount: number,
        currentPage: number
        preloader: boolean,
        toggleisFollowed: Array<number>
    }
    type usersTypeData = {
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
    it('fetchUser', () => {
        const data = {
            currentPage: 1,
            pageSize: 5

        }
        const items = [{
            id: 2,
            followed: true,
            name: '',
            status: ' ',
            photos: {
                large: ' ',
                small: ' ',
            },

        },
            {
                id: 2,
                followed: true,
                name: '',
                status: ' ',
                photos: {
                    large: ' ',
                    small: ' ',
                },

            },
            {
                id: 2,
                followed: true,
                name: '',
                status: ' ',
                photos: {
                    large: ' ',
                    small: ' ',
                },

            },
            {
                id: 2,
                followed: true,
                name: '',
                status: ' ',
                photos: {
                    large: ' ',
                    small: ' ',
                },

            },
        ]

        const action = {type: userThunk.usersFetch.fulfilled.type, payload: {items}}
        const state = Userreducer(initialState, action)

        expect(state.users).toEqual(items)
    })

})
