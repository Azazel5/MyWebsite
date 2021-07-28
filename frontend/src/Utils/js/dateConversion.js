export const dateConversion = date24 => {
    let date12 = date24.slice(0, 5)
    let [hr, minutes] = date12.split(":")
    hr = parseInt(hr)

    const timeOfDay = hr < 12 ? 'AM' : 'PM'
    hr = hr % 12 !== 0 ? hr % 12 : 12
    return `${hr}:${minutes}${timeOfDay}`
}

