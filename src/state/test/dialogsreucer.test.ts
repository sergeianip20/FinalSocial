import {dialogsReducer, DilaogsAction, InitialStateTypeMessage} from "../reducers/dialogsReducer";

test('correct test updateNewMessage', ()=> {
    let initialState:InitialStateTypeMessage ={
        messagesData: [
            {id: 1, message: 'yo'},
            {id: 2, message: 'hello'},
            {id: 3, message: 'hy'},
            {id: 4, message: 'top'},
            {id: 5, message: 'no'},
        ],
        newMessageBody: '',
        dialogsData: [
            {id: 1, name: 'Sergei'},
            {id: 2, name: 'Alena'},
            {id: 3, name: 'Sergei'}
        ],
    }
    let action = DilaogsAction.updateNewMessage({text:'sergei'})
    let EndState = dialogsReducer(initialState,action)
    expect(EndState.messagesData.length).toBe(5)
    expect(EndState.newMessageBody).toBe('sergei')
})
test('correct test updateNewMessage', ()=> {
    let initialState:InitialStateTypeMessage ={
        messagesData: [
            {id: 1, message: 'yo'},
            {id: 2, message: 'hello'},
            {id: 3, message: 'hy'},
            {id: 4, message: 'top'},
            {id: 5, message: 'no'},
        ],
        newMessageBody: 'anip',
        dialogsData: [
            {id: 1, name: 'Sergei'},
            {id: 2, name: 'Alena'},
            {id: 3, name: 'Sergei'}
        ],
    }
    let action = DilaogsAction.sendMessage({})
    let EndState = dialogsReducer(initialState,action)
    expect(EndState.messagesData.length).toBe(6)
    expect(EndState.newMessageBody).toBe('')
})