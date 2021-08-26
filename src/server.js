const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../.env`});

const Application = require("./infrastructure/application");

Application.start();
