class UpValidation {
    isValid({ app_name }) {
        return app_name && /[\w]/gi.test(app_name);
    }
}

module.exports = new UpValidation();
