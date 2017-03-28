/**
 * Created by Administrator on 2017/3/27 0027.
 * 创建userInfoController控制器，并在控制器中使用了userSerivce、userRole服务 以及使用了userFilter.js中的capitalize过滤器
 * 注意：在控制器使中使用过滤器需要引入，不然全报错
 */
angular.module('demo',['demo.services',"demo.filters","demo.directives"])
.controller('userInfoController',function ($scope,userSerivce,userRole) {
    $scope.person=userSerivce.getUserInfo("1");
    console.log($scope.person);
    $scope.showPersonName=function () {
        console.log($scope.person);
        console.log(userRole.getUserRoleInfo(1))
    };
});
