import {authActions, authReducer} from "../reducers/AutReducer";

test('correct login test', ()=> {
    const initialState = {
        userId: 0,
        email: '',
        login: '',
        isAuth: false
    }
    let action = authActions.setAuth({userId:2, login:'sergei', email:'sergei@mail.ru'})
    let endState = authReducer(initialState,action)
    expect(endState.email).toBe('sergei@mail.ru')
    expect(endState.login).toBe('sergei')
    expect(endState.userId).toBe(2)
})
test('correct login test', ()=> {
    const initialState = {
        userId: 0,
        email: '',
        login: '',
        isAuth: false
    }
    let action = authActions.setAppStatus({isAuth:true})
    let endState = authReducer(initialState,action)
    expect(endState.isAuth).toBe(true)

})