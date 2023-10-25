

export function timeConvert (t) {
    const hours = Math.floor((t/60))
    const minutes = t % 60
    return (minutes === 0 ? hours + "h" : hours + "h " + minutes + "m")
};