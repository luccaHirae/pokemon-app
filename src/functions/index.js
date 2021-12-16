export const firstCharToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const insertDot = (num) => {
    const string = num.toString()
    let firstPart = string.slice(0, string.length - 1)
    if (firstPart === '') firstPart = 0
    return firstPart + '.' + string.slice(string.length - 1)
}
