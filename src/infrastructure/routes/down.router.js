const Router = require("./router");
const { InvalidParamError } = require("../erros");
const DownValidation = require("../validations/down.validation");
const DownService = require("../../domain/services/down.service");

class DownRouter extends Router {

    async route(req, res, next) {
        try {

            const isValid = await DownValidation.isValid(req.body);
            if (!isValid) {
                throw new InvalidParamError('App name is required or process not exists.');
            }
    
            const stdout = await DownService.run(req.body, res);
    
            super.showContentSuccess(res, stdout);

        } catch (err) {
            super.showContentError(res, err.message);
        };
    }

}

module.exports = new DownRouter();
