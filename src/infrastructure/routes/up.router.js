const Router = require("./router");
const { InvalidParamError } = require("./../erros");
const UpValidation = require("./../validations/up.validation");
const UpService = require("./../../domain/services/up.service");

class UpRouter extends Router {

    async route(req, res, next) {
        try {
            if (!UpValidation.isValid(req.params)) {
                throw new InvalidParamError('App name is required.');
            }
    
            const stdout = await UpService.run(req.params, res);
    
            super.showContentSuccess(res, stdout);
        } catch (err) {
            super.showContentError(res, err.message);
        };
    }

}

module.exports = new UpRouter();
