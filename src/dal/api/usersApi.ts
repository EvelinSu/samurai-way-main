import {instance} from "./instance";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<TUser[]>(`users?page=${currentPage}&count=${pageSize}`)
                       .then(response => response.data)
    },
    searchUsers(name: string, currentPage: string, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${name}`)
                       .then(response => response.data)
    }
}

export const followAPI = {
    postFollow(id: number) {
        return instance.post(`follow/${id}`, {})
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
    }
}


export type TUser = {
    id: number,
    photos: { [Key: string]: string },
    status: string,
    name: string,
    // lastSeen: string,
    followed: boolean
}
