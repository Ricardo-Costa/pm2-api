class UpValidation {
    isValid({ params: { app_name }, body: { appPath, mode }}) {
        return (
            app_name &&
            /[\w]/gi.test(app_name) &&
            appPath &&
            ( !mode || [ "cluster" ].includes(mode) ) // valid option
        );
    }
}

module.exports = new UpValidation();
