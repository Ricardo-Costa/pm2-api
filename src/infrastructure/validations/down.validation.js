const { appExists } = require("./../../domain/util/check");

class DownValidation {
    async isValid({ app_name }) {
        const nameIsValid = app_name && /[\w]/gi.test(app_name);
        if (nameIsValid) {
            return await appExists(app_name);
        }
        return false;
    }
}

module.exports = new DownValidation();
