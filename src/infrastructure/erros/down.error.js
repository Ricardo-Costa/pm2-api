module.exports = class DownEventError extends Error {
    constructor(description, resp) {
        super(`DownEventError: ${description}`)
        this.response = resp
    }
}