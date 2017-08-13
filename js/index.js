/**
 * Created by Administrator on 2017/1/11.
 */
;(function (angular) {

    var app = angular.module('app',['ngRoute']);


    // 5.设置白名单
    // app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    //     $sceDelegateProvider.resourceUrlWhitelist([
    //         'self',
    //         'https://api.douban.com/**'
    //     ])
    // }]);

    // 跨域  angular
    // 1.用原生(script)
    // 2.服务器桥接
    // https://api.douban.com/v2/movie/in_theaters?callback=angular.callbacks._0

    // http://localhost:63342/code/douban/index.html?_ijt=ugdvjadujnf1ehfvhmpjfcbc7r#!/movie/top250
    // https://api.douban.com/v2/movie/in_theaters

})(angular);