# React入门

## 启动项目

编写前端代码，执行命令: `npm run dev`
编写后端代码，执行命令: `npm run dev:w`

## 访问路径

该项目默认的访问路径是: [http://localhost:7001/webpack-dev-server/index.html](http://localhost:7001/webpack-dev-server/index.html)

中文转UTF8:

```javascript
function ConvUtf(value){
    return value.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"&#x$2;")});
}
```

UTF8转中文:

```javascript
function ResChinese(value){
   return unescape(value.replace(/&#x/g,'%u').replace(/;/g,''));
}
```
