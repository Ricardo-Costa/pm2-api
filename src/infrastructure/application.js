const configs = require("../configs/config");
const express = require("express");
const HomeRouter = require("./routes/home.router");
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

        this.server.listen(configs.port, "0.0.0.0", () => {
            console.log(`Listening on port ${configs.port}`)
        });
        this.server.on("error", console.error);
    }

    async middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }

    async routes() {
        this.router.get("/", HomeRouter.route);
        this.router.get("/up/:app_name", UpRouter.route);
        this.router.get("/status/:app_name", StatusRouter.route);
        this.router.get("/down/:app_name", DownRouter.route);

        this.server.use(this.router)
    }

}

module.exports = new Application();