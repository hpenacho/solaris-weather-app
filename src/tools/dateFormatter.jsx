
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

const formatTime = (unixDate) => {
    const options = { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'short', hour12: false };
    let date = new Date(unixDate * 1000)
    return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export { getWeekDay, formatHour, formatTime }