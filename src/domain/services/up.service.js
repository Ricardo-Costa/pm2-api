const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { UpEventError } = require("./../../infrastructure/erros");
const { appExists } = require("./../util/check");
const BaseService = require("./base.service");

class UpService extends BaseService {

    async run({ params: { app_name }, body: { appPath, mode }}, res) {

        const exists = await appExists(app_name);
        if (exists) throw new UpEventError('App already exists.', res);

        if (mode && (![ "cluster" ].includes(mode))) {
            throw new UpEventError('Invalid mode.', res);
        }

        if (mode) {
            var { stdout, stderr } = await exec(`pm2 start ${__dirname}/../../sub-apps/${appPath} --name=${app_name} -i max --no-autorestart`);
        } else {
            var { stdout, stderr } = await exec(`pm2 start ${__dirname}/../../sub-apps/${appPath} --name=${app_name} --no-autorestart`);
        }

        if (stderr) throw new UpEventError(stderr, res);

        return stdout;
    }

}

module.exports = new UpService();
