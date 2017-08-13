/**
 * Created by Administrator on 2017/1/13.
 */
angular.module("app").controller('HomeController', ['$scope', '$routeParams', '$http', 'MyHttp', 'baseUrl', function ($scope, $routeParams, $http, MyHttp, baseUrl) {
    // console.log($routeParams.id);

    // $http({
    //     url:'https://api.douban.com/v2/movie/in_theaters',
    //     method:'jsonp'
    // }).then(function (regs) {
    //     console.log(regs);
    // }).catch(function (err) {
    //     console.log(err);
    // })

    // 0. 设置正在加载中要不要显示
    // true 正在加载 false 加载完毕
    $scope.isLoading = true;

    // 每一页的数据为 5个
    $scope.count = 5;
    // 当前页码
    $scope.currPage = 1;
    // 一共有几页
    $scope.totalPage = 0;

    // false 代表不显示 true 代表显示
    $scope.prev = false;
    $scope.next = true;

    // 加载网络请求
    $scope.loadData = function (start) {
        // 1.拼接url
        var url = baseUrl + 'movie/' + $routeParams.id;
        // console.log(url);
        var params = {
            start: start,
            count: $scope.count
        };

        // 2.发送网络请求
        MyHttp.jsonp(url, params, function (regs) {
            // 脏值检测
            $scope.$apply(function () {
                $scope.dataList = regs;

                $scope.isLoading = false;

                // 计算页码
                $scope.totalPage = Math.ceil(regs.total / $scope.count);
                console.log($scope.dataList);
            });
        });
    };

    $scope.loadData(0);


    // 3.监听上一页/下一页的点击
    $scope.page = function (type) {
        if (type == true) {
            // 上一页
            // 发送网络请求
            $scope.currPage--;
        } else {
            // 下一页
            $scope.currPage++;
        }
        var start = ($scope.currPage - 1) * $scope.count;
        $scope.loadData(start);

        // 判断上一页和下一页什么时候显示
        // 上一页
        $scope.prev = $scope.currPage == 1 ? false : true;
        // 下一页
        $scope.next = $scope.currPage >= $scope.totalPage ? false : true;
    }

}]);