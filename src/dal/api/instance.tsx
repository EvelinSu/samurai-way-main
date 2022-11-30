import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '91e439d1-ddd7-4fb6-bba9-b639e1bf5b56',
    },
})






