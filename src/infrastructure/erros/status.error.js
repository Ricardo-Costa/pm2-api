module.exports = class StatusEventError extends Error {
    constructor(description, resp) {
        super(`StatusEventError: ${description}`)
        this.response = resp
    }
}