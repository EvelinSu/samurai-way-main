import {instance} from "./instance";
import {TAccountDataResponse, TCommonResponse} from "./types";

export const authAPI = {
    getAccountData() {
        return instance.get<TCommonResponse<TAccountDataResponse>>("auth/me")
                       .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<TCommonResponse>(`auth/login`, {email, password, rememberMe})
                       .then(response => response.data)
    },
    logout() {
        return instance.delete<TCommonResponse>(`auth/login`)
                       .then(response => response.data)
    }
}