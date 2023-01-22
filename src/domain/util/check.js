const util = require("util");
const exec = util.promisify(require("child_process").exec);

// check if app already exists
const appExists = async appName => {
    try {

        const { stdout, stderr } = await exec(`pm2 status ${appName} | grep ${appName}`);
        return !stderr && !!stdout.trim();

    } catch(err) {
        return false;
    }
}

const appStatusAll = async () => {
    try {

        const { stdout, stderr } = await exec(`pm2 status all`);
        return !stderr && !!stdout.trim();

    } catch(err) {
        return false;
    }
}

module.exports = {
    appExists,
    appStatusAll
}