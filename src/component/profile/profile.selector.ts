import { useAppSelector} from "component/hook/hook";
import {AppRootStateType} from "state/store";
 export const isLoadingSelector = (state: AppRootStateType) => state.appReducer.isLoading
   export  const contacsSelector = (state:AppRootStateType) => state.ProfileReducers.UserProfile.contacts
  export   const fullNameSelector = (state:AppRootStateType) => state.ProfileReducers.UserProfile.fullName
 export    const imageSelector = (state:AppRootStateType)=> state.ProfileReducers.UserProfile.photos.large
