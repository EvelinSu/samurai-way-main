import React from "react";

export const isNumber = (payload?: number) => {
    return typeof payload != undefined;
}


export const getStringDate = (date: Date) : string => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes()
    if (year !== new Date().getFullYear()) return  year + ' ' + date.toLocaleString('en-us', { month: 'long' }) + ' ' + day;
    if (month === new Date().getMonth() && day === new Date().getDate()) return hours + ':' + (String(minutes).length < 2 ? '0' + minutes : minutes ) ;
    return  date.toLocaleString('en-us', { month: 'long' }) + ' ' + day;
}
