export function timeInSecs(time) {
    const timeArr = time.split(':');
    return (timeArr[0] * 3600 + timeArr[1] * 60);
}

export function timeInFormat(time) {
    if (!time) return;

    const hr = addZero(Math.floor(time / 3600));
    const min = addZero((time % 3600) / 60);
    return `${hr}:${min}`;
}

export function getCurrentTimezone() {
    const tz = new Date().getTimezoneOffset();
    return (tz * 60 * -1);
}

export function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}