const api = require('./server/api');

async function getLog(ctx) {
    let result = await api.getLog();
    // console.log(result)
   ctx.body =  result;
}
module.exports = {
    getLog
}