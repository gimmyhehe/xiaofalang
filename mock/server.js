var Koa = require('koa')
var Router = require('koa-router')
const bodyparser = require('koa-bodyparser');

var app = new Koa()
var router = new Router()
// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });
app.use(bodyparser());
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Credentials', true);
    await next();
  });
router.get('/', function (ctx, next) {
    ctx.body = 'hello koa !'
  });
// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function (ctx,next) {
    ctx.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
//test api
router.get('/api/test',function (ctx,next){
    ctx.body = "this is a test api!"
})
router.post('/post',function(ctx,next){
    const params = ctx.request.body
    console.log(params)
    ctx.body = {
        status: 0,
        msg: 'ok'
    }
})
router.get('/api/homelist/:city/:page', function (ctx,next) {
    // 参数
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeListData
});

router.post('/api/login', function (ctx,next) {
    console.log('验证登录')
    const params = ctx.request.body
    const username = params['user_name']
    const password = params.password
    // 获取参数
    console.log(params,username,password)
    if(username==123&&password=='123'){
        ctx.set('Authorization','testuser')
        ctx.body = {
            status: 0,
            msg: 'ok'
        }
    }else{
        ctx.body = {
            status: 1,
            msg: '登录出错'
        }
    }

})

// 开始服务并生成路由
const port = 3101
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(port);
console.log(`the server is running in http://localhost:${port}`)