const Router = require("./router");
const StatusAllService = require("../../domain/services/status-all.service");

class HomeRouter extends Router {

    async route(req, res, next) {
        try {
            const stdout = await StatusAllService.run(req.body, res);
    
            super.showContentSuccess(res, stdout);
            
        } catch (err) {
            super.showContentError(res, err.message);
        };
    }

}

module.exports = new HomeRouter();
