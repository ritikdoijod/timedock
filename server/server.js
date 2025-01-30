'use strict'

import express from "express";
import { logger } from "./config/winston.js"

import { connectToDB } from "./config/db.js";
import router from "./api/index.js";

import { errorHandler } from "./middlewares/error-handler.js";

connectToDB();

const app = express();
app.use(express.json());
app.use('/', router);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  logger.info(`Server listening on https://localhost:${process.env.PORT}`);
});


