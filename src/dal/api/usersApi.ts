import {instance} from "./instance";
import {TCommonResponse} from "./types";

export const usersAPI = {
    getUsers(params: string) {
        return instance.get<TUsersResponse>(`users` + params)
                       .then(response => response.data)
    }
}

export const followAPI = {
    postFollow(id: number) {
        return instance.post<TCommonResponse>(`follow/${id}`, {})
    },
    unFollow(id: number) {
        return instance.delete<TCommonResponse>(`follow/${id}`)
    }
}

export type TUsersResponse = {
    items: TUser[],
    totalCount: number
}

export type TUser = {
    id: number,
    photos: { [Key: string]: string },
    status: string,
    name: string,
    followed: boolean
}
