var Koa = require('koa')
var Router = require('koa-router')

var app = new Koa()
var router = new Router()
// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

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

router.get('/api/homelist/:city/:page', function (ctx,next) {
    // 参数
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeListData
});



// 开始服务并生成路由
const port = 3101
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(port);
console.log(`the server is running in http://localhost:${port}`)