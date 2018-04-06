const router = require("koa-router");

const log = require('./../controller/log');

const appRouter = new router();

appRouter.get('/', log.getLog);

module.exports = appRouter;