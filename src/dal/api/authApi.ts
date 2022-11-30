import {instance} from "./instance";

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