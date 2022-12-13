import {instance} from "./instance";
import {TCommonResponse} from "./types";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<TCommonResponse<TUser[]>>(`users?page=${currentPage}&count=${pageSize}`)
                       .then(response => response.data)
    },
    searchUsers(name: string, currentPage: string, pageSize: number) {
        return instance.get<TUsersResponse>(`users?page=${currentPage}&count=${pageSize}&term=${name}`)
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
