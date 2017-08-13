/**
 * Created by Administrator on 2017/1/13.
 */
// 设置baseUrl

angular.module("app").value('baseUrl','https://api.douban.com/v2/');

// 封装网络请求
/**
 * 发送网络请求
 */
angular.module("app").service('MyHttp',['$window',function ($window) {
    // 发送请求拿到数据
    this.jsonp = function (url,params,fn) {
        // 实现动态跨域
        // 1.在本地声明方法 这个方法里面有一个参数
        var fnName = 'callback' + Math.random().toString().slice(2);
        var script;

        // console.log(fnName);
        $window[fnName] = function (regs) {
            // 1.调用回调函数给数据
            if(fn){
                fn(regs);
            }
            // console.log(regs);

            // 2.移除标签
            document.body.removeChild(script);

            // callback && callback(regs);
        };

        // 2.用 script 的src属性 发送请求实现跨域
        script = document.createElement('script');
        document.body.appendChild(script);

        // 设置src属性

        // https://api.douban.com/v2/movie/in_theaters
        // https://api.douban.com/v2/movie/top250?callback=test1

        // 3.拼接url
        var queryStr = '';
        for (var key in params){
            queryStr += key + '=' + params[key] +'&';
        }

        // console.log(url);
        // console.log(queryStr);

        var jsonUrl = url + '?' + queryStr + 'callback=' + fnName;

        // 4.设置src属性
        script.src = jsonUrl;
        console.log(jsonUrl);
    }
}]);