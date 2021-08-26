const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { StatusEventError } = require("../../infrastructure/erros");

class StatusService {

    async run({ app_name }) {
        const { stdout, stderr } = await exec(`npx pm2 status ${app_name}`);

        if (stderr) throw new StatusEventError(stderr, res);

        return stdout;
    }

}

module.exports = new StatusService();
