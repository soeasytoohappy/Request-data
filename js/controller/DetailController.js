/**
 * Created by Administrator on 2017/1/13.
 */

angular.module("app").controller('DetailController',['$scope','$routeParams','MyHttp','baseUrl',function ($scope,$routeParams,MyHttp,baseUrl) {
    // https://api.douban.com/v2/movie/subject/26363254
    var url = baseUrl + 'movie/subject/' + $routeParams.id;

    console.log(url);

    MyHttp.jsonp(url,null,function (regs) {
        $scope.$apply(function () {
            $scope.detailList = regs;

        })
    });
}]);
