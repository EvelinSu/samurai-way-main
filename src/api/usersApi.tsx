// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
//
// export const usersApi = createApi({
//     reducerPath: 'users/api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
//         headers: {
//             "API-KEY": '91e439d1-ddd7-4fb6-bba9-b639e1bf5b56',
//         },
//     }),
//     endpoints: build => ({
//         getUsers: build.query({
//             query: (currentPage: number) => ({
//                 url: `users`,
//                 params: {
//                     page: currentPage,
//                     count: 10
//                 }
//             }),
//         })
//     })
// })
//
// export const {useGetUsersQuery} = usersApi
export const hello = 'hello'