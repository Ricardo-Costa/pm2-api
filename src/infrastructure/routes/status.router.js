const Router = require("./router");
const { InvalidParamError } = require("../erros");
const StatusValidation = require("../validations/status.validation");
const StatusService = require("../../domain/services/status.service");

class StatusRouter extends Router {

    async route(req, res, next) {
        try {
            const isValid = await StatusValidation.isValid(req.body);
            if (!isValid) {
                throw new InvalidParamError('App name is required or process not exists.');
            }
    
            const stdout = await StatusService.run(req.body, res);
    
            super.showContentSuccess(res, stdout);
            
        } catch (err) {
            super.showContentError(res, err.message);
        };
    }

}

module.exports = new StatusRouter();
