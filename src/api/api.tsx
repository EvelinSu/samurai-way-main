import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'b03fff18-2846-4af3-a0b6-bb5a296b8aae',
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                       .then(response => response.data)
    },
    searchUsers(name: string, currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${name}`)
                       .then(response => response.data)
    }
}

export const authAPI = {
    getMyData() {
        return (
            instance.get("auth/me")
                    .then(response => response.data)
        )
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

export const profileAPI = {
    getProfile(id: number) {
        return instance.get(`profile/${id}`)
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