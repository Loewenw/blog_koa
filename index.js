const Koa = require('koa');

const app = new Koa();

const appRouter = require("./router/index");
app.use(appRouter.routes());

app.listen(3000,(err)=>{
    if(err) console.log(err)
    console.log('3000 run')
});