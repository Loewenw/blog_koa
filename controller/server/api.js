let mysql = require('./mysql');
async function getLog(){
    let data = await mysql.getLog();
    return data;
}

async function addLog() {
    let data = await mysql.addLog;
    return data;
}

async function deleteLog() {
    let data = await mysql.deleteLog;
    return data;
}
module.exports = {
    getLog,
    addLog,
    deleteLog
}