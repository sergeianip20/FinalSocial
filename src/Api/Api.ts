import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '3c924d97-2d2c-4453-9aea-574f561a646d'
    }
})

export const userApi = {
    getUsers(currentPage: number, pagesSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pagesSize}`,).then(response => {
            return response.data
        })
    },

}

export const FoolowedUser = {
    getFollowed(userId: number) {
        return instance.get(`/follow/${userId}`)
    },
    Followed(id: number) {
        return instance.post(`/follow/${id}`,).then(response => {
            return response.data
        })
    },
    unFollowed(id: number) {
        return instance.delete(`/follow/${id}`,).then(response => {
            return response.data
        })
    }
}

export const authApi = {
    login: (arg: ArgLoginType) => {
        return instance.post("auth/login", arg);
    },
    logout: () => {
        return instance.delete('auth/login')
    }
}
export const ProfileContent = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`).then((response) => {
            console.log('api from', response)
            return response.data
        })
    },
    updateProfile(model:userModelType){
        return instance.put('/profile' , model)

    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    updateStatus(status:string){
        return instance.put('/profile/status', {status})
    }
}
export const authMe = () => {

    return instance.get('auth/me')

}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
export type ArgLoginType = {
    email: string
    password: string
    rememberMe: boolean
}
export type userModelType ={
lookingForAJob: boolean
    lookingForAJobDescription: string
    userId: number
contacts: {
        facebook: string
        github: string,
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
type SavePhotoResponseDataType = {
    photos: PhotosType
}
export type PhotosType = {
    small: string | null
    large: string | null
}