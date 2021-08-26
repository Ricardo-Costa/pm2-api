module.exports = class UpEventError extends Error {
    constructor(description, resp) {
        super(`UpEventError: ${description}`)
        this.response = resp
    }
}