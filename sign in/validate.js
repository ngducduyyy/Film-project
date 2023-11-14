export function isValidEmail(input) {
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!emailRegex.test(input)) {
        return false
    }
    return true
}
export function isRequired(input) {
    if (!input) {
        return false
    }
    return true
}
export function isValidPass(input) {
    if (input.length < 6 || input.length > 25) {
        return false
    }
    return true

}