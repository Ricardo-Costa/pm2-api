module.exports = class Router {
    async showContentSuccess(res, content) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.status(200).write(content);
        res.end();
    }

    async showContentError(res, content, statusCode = 409) {
        console.error(content);
        
        res.status(statusCode).json({
            message: content
        });
    }
}