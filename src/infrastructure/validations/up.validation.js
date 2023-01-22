class UpValidation {
    isValid({ params: { app_name }, body: { appPath }}) {
        return (
            app_name &&
            /[\w]/gi.test(app_name) &&
            appPath
        );
    }
}

module.exports = new UpValidation();
