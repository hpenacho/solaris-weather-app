
const getWeekDay = (unixDate) => {
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = new Date(unixDate * 1000).getDay();
    return weekdays[day];
}

const formatHour = (unixDate) => {
    let date = new Date(unixDate * 1000)
    let hour = date.getHours()
    return hour;
}

const formatTime = (unixDate, options) => {
    let time;
    if (unixDate && options) {
        time = new Intl.DateTimeFormat('en-GB', options).format(unixDate * 1000)
    }
    return time;
}
export { getWeekDay, formatHour, formatTime }