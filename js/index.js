/**
 * Created by Administrator on 2017/1/11.
 */
;(function (angular) {

    var app = angular.module('app',['ngRoute']);

//  自定义切换类名的指令
//  原理:检测location的变化与a标签href属性对比
    app.directive("navStyle",["$location",function ($location) {
        return {
            restrict:"A",
            link:function ($scope, ele, attr) {
                $scope.location=$location;
                // console.log($scope.location.url());
                $scope.$watch("location.url()",function (newV, oldV) {
                    // console.log(newV);
                    var href=ele. find("a").attr("href").slice(2);
                    // console.log(href);
                    if (href==newV){
                        ele.parent().children().removeClass("active");
                        ele.addClass("active");
                    }
                })
            }
        }
    }])

})(angular);