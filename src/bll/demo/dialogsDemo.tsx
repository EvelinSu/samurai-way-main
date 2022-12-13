import {TDialogs, TMessage} from "../dialogsReducer";

export const demoDialogs: TDialogs = {
    "4": {
        userId: '4',
        messagesId: [],
        newMessageText: '',
    },
    "2": {
        userId: '2',
        messagesId: ["1", "2", "4"],
        newMessageText: '',
    },
    "1": {
        userId: '1',
        newMessageText: '',
        messagesId: ["3", "5", "10"],
    },
    "3": {
        userId: '3',
        newMessageText: '',
        messagesId: ["6", "7", "8", "9", "1"],
    },
    "5": {
        userId: '5',
        newMessageText: '',
        messagesId: [],
    }
}

let defaultDate = '1 hour ago'
export const demoMessages: TMessage[] = [
    {
        id: "1",
        text: "C'mon, ye evil wave- set sails for life! All reefs fight dark, wet plunders. The gold sails with riddle, pull the cook islands until it stutters. ",
        time: defaultDate,
        me: true,
    },
    {
        id: "2",
        text: "Ales grow from horrors like heavy-hearted codfish's. Yuck, wow. Breeze of a gutless death, view the horror!",
        time: defaultDate,
    },
    {
        id: "3",
        text: "Greed is a sunny skull. Where is the scrawny wave? Ah! Pieces o' adventure are forever old. Furners are the sails of the" +
            " dead amnesty. Well, never endure a reef.The" +
            " shark hoists with love, hail the reef.",
        time: defaultDate,
        me: true,
    },
    {
        id: "4",
        text: "How small. You hoist like a rum. ",
        time: defaultDate,

    },
    {
        id: "5",
        text: "Where is the salty moon? ",
        time: defaultDate,
        me: true,
    },
    {
        id: "6",
        text: "How small. You taste like a sun. ",
        time: defaultDate,
    },
    {
        id: "7",
        text: "The cannibal falls adventure like a warm sea-dog. ",
        time: defaultDate,
    },
    {
        id: "8",
        text: "\"Hobble impatiently like a cold sea-dog. Well, beauty! Never command a whale. The seashell fears with " +
            "beauty, fight the seychelles until it falls. Fine, swashbuckling jolly rogers smartly fear a rough," +
            " lively bilge rat. the bung hole ransacks with life, command the seychelles",
        time: defaultDate,
    },
    {
        id: "9",
        text: "Cannons fall from endurances like evil shores.",
        time: defaultDate,
    },
    {
        id: "10",
        text: "The salty wave greedily drinks the whale.",
        time: defaultDate,
        me: true,
    }
]