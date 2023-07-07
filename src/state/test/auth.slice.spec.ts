import {authReducer, authThunk} from 'state/reducers/AutReducer'
import {userThunk} from "state/reducers/UserReducer";

describe('authReducer', () => {
    const initialState = {
        userId: 0,
        email: '',
        login: '',
        isAuth: false
    }
    it('login aut', () => {
        const data = {
            email: 'sergeianp20@gmail.com',
            password: 'S25anipch.',
            rememberMe: false


        }

        const userId = 2

        const action = {type: authThunk.login.fulfilled.type, payload:{userId}}
        const state = authReducer(initialState, action)

        expect(state.userId).toEqual(userId)
    }),
        it('AuthMe', () => {


            const profile = {

                userId: 27504,
                email: 'sergeianip20@gmail.com',
                login: 'SergeiAnipchenko',

            }
            const action = {type: authThunk.me.fulfilled.type, payload:{profile}}

            const state = authReducer(initialState, action)

            expect(state.email).toBe('sergeianip20@gmail.com')
            expect(state.userId).toBe(profile.userId)
        })
})
