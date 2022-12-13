import profileReducer, {setActiveProfile, setMyStatus, TProfileState} from "../profileReducer";
import {TActiveProfileResponse} from "../../dal/api/types";

let initialState: TProfileState;

beforeEach(() => {
    initialState = ({
        isFetching: true,
        activeProfile: {
            contacts: {
                facebook: "",
                website: "",
                vk: "",
                twitter: "",
                youtube: "",
                github: "",
                instagram: "",
                mainLink: ""
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: "",
            userId: 0,
            photos: {
                small: "",
                large: ""
            }
        },
        status: "",
    })
})

test('set profile', () => {

    const newProfile: TActiveProfileResponse = {
        contacts: {
            facebook: "link",
            website: "link1",
            vk: "link2",
            twitter: "link5",
            youtube: "link4",
            github: "link3",
            instagram: "link2",
            mainLink: "link124"
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'hi!',
        fullName: "fullName123",
        userId: 10,
        photos: {
            small: "https://i.imgur.com/WfSK9QM.png",
            large: ""
        }
    }

    const endState = profileReducer(initialState, setActiveProfile(newProfile))

    expect((endState.activeProfile)).toEqual(newProfile);
});

test('set status', () => {

    const newStatus: string = 'Its my new status!'

    const endState = profileReducer(initialState, setMyStatus(newStatus))

    expect((endState.status)).toBe('Its my new status!');
});
