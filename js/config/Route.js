/**
 *
 * Created by Administrator on 2017/1/13.
 */
// 设置路由
angular.module("app").config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/movie/:id', {
        templateUrl: "movie_tpl.html",
        controller: 'HomeController'
    }).when('/movie/subject/:id', {
        templateUrl: "movie_detail_tpl.html",
        controller: 'DetailController'
    }).otherwise({
        redirectTo: '/movie/in_theaters'
    })
}]);