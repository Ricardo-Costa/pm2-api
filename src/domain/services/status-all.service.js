const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { StatusEventError } = require("../../infrastructure/erros");
const BaseService = require("./base.service");

class StatusAllService extends BaseService {

    async run() {
        const { stdout, stderr } = await exec(`pm2 status all`);

        if (stderr) throw new StatusEventError(stderr, res);

        return stdout;
    }

}

module.exports = new StatusAllService();
