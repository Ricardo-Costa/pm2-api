const configs = require("../configs/config");
const express = require("express");
const UpRouter = require("./routes/up.router");
const DownRouter = require("./routes/down.router");
const StatusRouter = require("./routes/status.router");

class Application {

    constructor() {
        this.server = express()
        this.router = express.Router()
    }

    async start() {
        await this.middlewares();
        await this.routes();

        this.server.listen(configs.port, "0.0.0.0");
        this.server.on("error", console.error);
        this.server.on("listening", () => {
            console.log(`Listening on port ${configs.port}`)
        });
    }

    async middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }

    async routes() {
        this.router.post("/up", UpRouter.route);
        this.router.post("/status", StatusRouter.route);
        this.router.post("/down", DownRouter.route);

        this.server.use(this.router)
    }

}

module.exports = new Application();