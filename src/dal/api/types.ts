export type TCommonResponse<T> = {
    data: T,
    messages: string[],
    resultCode: number
}

export type TProfileImageResponse = {
    photos: {
        small: string,
        large: string
    }
}

export type TActiveProfile = {
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    },
    aboutMe?: string
}