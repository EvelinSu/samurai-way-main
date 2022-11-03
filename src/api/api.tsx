import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '91e439d1-ddd7-4fb6-bba9-b639e1bf5b56',
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                       .then(response => response.data)
    },
    searchUsers(name: string, currentPage: string, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${name}`)
                       .then(response => response.data)
    }
}

export const authAPI = {
    getMyData() {
        return instance.get("auth/me")
                       .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
                       .then(response => response.data)
    },
    logout() {
        return (
            instance.delete(`auth/login`)
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

