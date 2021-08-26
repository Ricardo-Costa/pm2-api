module.exports = class InvalidParamError extends Error {
    constructor(description, resp) {
        super(`InvalidParamError: ${description}`)
        this.response = resp
    }
}