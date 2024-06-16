## 去 Node 化

我们知道在客户端-服务端这样前后端分离的架构中，浏览器调用非同源的接口会出现跨域问题。那么通常有这几种策略来解决跨域：
1. cors： 服务端直接设置 Access-Control-Allow-Origin
2. 写一个 node 中间层进行转发, 在 node 侧进行跨域设置

在真实的开发场景下，第二种方案是最常见的，特别是做技术项目，你可能会经常设计调用各个公共平台的数据，这些接口要么没设置 cors、 要么有个鉴权、更常见的可能是使用了 thrift 接口，那你只能在node层自己写 controller 了。

这样的设计有一些缺点：
1. 对前端专业能力的考验：
   1. SSO（Single site login） 单点登录
   2. 鉴权 
   3. 多个后端服务，多个 controller 
2. 不好排查问题
   1. 因为多了一层，在请求数据的完整链路上，如果在 node 层出问题，只能去机器看日志，本地调试也比仅在浏览器打断点相比更复杂
   

工作一年，把我的项目基本玩清楚后，我还是挺震惊的，从域名、Nginx Serverless 等一系列，基本都是前端来弄的，后端只开发接口，然后发一个 thrift 包即可。

那么有没有更合理的方式，能让我们前端工程师轻松一些呢，现在企业中比较常见的就是接入网关层。即之前使用 node 开发的一切东西，都在平台上进行配置。鉴权、登录、thrift接口要用 node 调用等问题，我们的网关层都能解决。还可以吧 thrift 接口转换为 http 接口。这样我们前端直接调用就没啥问题了。

公司内部也有很多实践，成功的把 node 层迁移到网关平台。我也曾和后端聊过这个事情，无奈势单力薄，人轻言微，在无比紧张的业务需求迭代中，难以推进。后端给我的当头一问就是，花多久多这个事情，做出来收益是什么。思考之后，你要说真的能产生什么提效的收益，对项目组确实没有，可是我们前端可以少写一些后端的东西呀，这就动了后端的蛋糕，这是其一，另外就是，我负责这个项目并不是我老板的核心指标，老板只要我支持好他们频繁的业务需求迭代就好了，那你还要啥自行车。工作中不能事事如意，很多事往往是各方妥协的结果。