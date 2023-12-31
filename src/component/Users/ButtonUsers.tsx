import React, {FC, memo} from 'react'
import {Button} from 'antd'

type ButtonUsersType ={
userId:number
onClickHandler:(usersId:number) => void
label:string
}

export const ButtonUsers:FC<ButtonUsersType> = memo(({userId,onClickHandler, label})=> {

return <>
<Button onClick={()=> {onClickHandler(userId)}} >{label} </Button>
</>


}) 
