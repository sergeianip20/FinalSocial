import {Button} from "antd";
import {useAppDispatch} from "component/hook/hook";
import {authThunk} from "state/reducers/AutReducer";
import {FC} from "react";

type LogoutUserIdType ={
    id:number
}
export const Logout:FC<LogoutUserIdType> =({id})=>{
    const LogoutHandler =()=>{
        dispatch(authThunk.logout(id))
    }
    const dispatch = useAppDispatch()
    return <div>

        <Button onClick={LogoutHandler}>Logout</Button>
    </div>
}