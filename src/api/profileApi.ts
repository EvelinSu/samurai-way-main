import {instance} from "./api";

export const profileAPI = {
    getProfile(id: number) {
        return instance.get<TActiveProfile>(`profile/${id}`)
                       .then(response => response.data)
    },
    putProfileStatus(newStatus: string) {
        return instance.put(`profile/status`, {status: newStatus})
    },
    getProfileStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
                       .then(response => response.data)
    }
}


export type TActiveProfile = {
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}