import {instance} from "./instance";
import {TActiveProfileResponse, TCommonResponse, TProfileImageResponse} from "./types";

export const profileAPI = {
    getProfile(id: number) {
        return instance.get<TActiveProfileResponse>(`profile/${id}`)
                       .then(response => response.data)
    },
    putProfileStatus(newStatus: string) {
        return instance.put<TCommonResponse<{ status: string }>>(`profile/status`, {status: newStatus})
                       .then(response => response.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
                       .then(response => response.data)
    },
    putProfileImage(image: FormData | string) {
        return instance.put<TCommonResponse<TProfileImageResponse>>(`profile/photo`, image)
                       .then(response => response.data)
    },
    putProfile(data: Omit<TActiveProfileResponse, "photos">) {
        return instance.put<TCommonResponse<TActiveProfileResponse>>(`profile`, data)
                       .then(response => response.data)
    },
}



