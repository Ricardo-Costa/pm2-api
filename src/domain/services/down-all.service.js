const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { DownEventError, UpEventError } = require("../../infrastructure/erros");
const { appStatusAll } = require("../util/check");
const BaseService = require("./base.service");

class DownAllService extends BaseService {

    async run(res) {
        const { stdout, stderr } = await exec(`pm2 delete all`);

        if (stderr) throw new DownEventError(stderr, res);

        const exists = await appStatusAll();
        if (!exists) {
            throw new UpEventError('Operation was not finished correctly.', res);  
        }

        return stdout;
    }

}

module.exports = new DownAllService();
