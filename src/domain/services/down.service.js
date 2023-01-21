const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { DownEventError, UpEventError } = require("./../../infrastructure/erros");
const { appExists } = require("./../util/check");
const BaseService = require("./base.service");

class DownService extends BaseService {

    async run({ app_name }, res) {
        
        const { stdout, stderr } = await exec(`npx pm2 delete ${app_name}`);

        if (stderr) throw new DownEventError(stderr, res);

        const exists = await appExists(app_name);
        if (!exists) {
            throw new UpEventError('Operation was not finished correctly.', res);  
        }

        return stdout;
    }

}

module.exports = new DownService();
