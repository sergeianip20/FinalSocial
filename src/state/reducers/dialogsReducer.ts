import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export type InitialStateTypeMessage = {
    messagesData: Array<messageType>
    dialogsData: Array<dialogsType>
    newMessageBody: string

}
type messageType = {
    id: number
    message: string
}
type dialogsType = {
    id: number
    name: string
}
let initialState:InitialStateTypeMessage = {
    messagesData:[],
    dialogsData:[],
    newMessageBody:''
}

const slice = createSlice({
    name:'dialogs',
    initialState,
    reducers: {
        updateNewMessage(state:InitialStateTypeMessage, action:PayloadAction<{text:string}>){
            state.newMessageBody = action.payload.text
        },
        sendMessage(state:InitialStateTypeMessage, action){
            state.messagesData.push({id:6, message:state.newMessageBody})
            state.newMessageBody = ''
        }
    }
})
export  const  dialogsReducer = slice.reducer
export const DilaogsAction = slice.actions