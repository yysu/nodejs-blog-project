const loginCheck = (username, password) => {
    // fake data
    if (username === 'Alex' && password === '123') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}