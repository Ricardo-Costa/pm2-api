const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { StatusEventError } = require("../../infrastructure/erros");
const BaseService = require("./base.service");

class StatusService extends BaseService {

    async run({ app_name }) {
        const { stdout, stderr } = await exec(`pm2 status ${app_name}`);

        if (stderr) throw new StatusEventError(stderr, res);

        return stdout;
    }

}

module.exports = new StatusService();
