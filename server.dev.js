import colors from 'colors';
import Koa from 'koa';
import Static from 'koa-static';
import convert from 'koa-convert';

const PORT = 3000;
const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  ctx.body = `${ctx.method} ${ctx.url} - ${ms}ms`;
});

app.listen(PORT, ()=> {
	console.log(colors.green(`Listen To: `));
	console.log(colors.yellow(`http://localhost:${PORT}/`));
});