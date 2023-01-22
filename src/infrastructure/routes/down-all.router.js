const Router = require("./router");
const { InvalidParamError } = require("../erros");
const DownValidation = require("../validations/down.validation");
const DownService = require("../../domain/services/down.service");
const downAllService = require("../../domain/services/down-all.service");

class DownRouter extends Router {

    async route(req, res, next) {
        try {
            const stdout = await downAllService.run(res);
    
            super.showContentSuccess(res, stdout);

        } catch (err) {
            super.showContentError(res, err.message);
        };
    }

}

module.exports = new DownRouter();
