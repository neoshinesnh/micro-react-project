const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

app.use(ctx => {
  ctx.body = fs.readFileSync('./src/index/index.html', 'utf8');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});  