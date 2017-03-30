/**
 * Created by Administrator on 2017/3/27 0027.
 * 创建userInfoController控制器，并在控制器中使用了userSerivce、roleService服务
 * 注意：在define中要指定使用服务的js文件(其中后缀可以省略) 然后在定义控制中使用相应的服务
 */
define(["controllers/controllers","services/userService","services/roleService","cookieUtil"],
    function (angular) {
        'use strict';
        angular.userControllers.controller("userInfoController",
            ["$scope","$http","$rootScope","$location","$window","userServiceProvider","userSerivce","roleService",
            function ($scope,$http,$rootScope,$location,$window,userServiceProvider,userSerivce,roleService) {
                console.log("run in user controller...........");
                $rootScope.isUserAuth=CookieUtil.getCookie("isUserAuth")
                $rootScope.menus=[{"name":"AngularJS Demo","url":"#!routerTest"}];
                $scope.person={"name":"guan.xianchun"};
                $scope.person=userSerivce.getUserInfo("1");
                $scope.person = roleService.getUserRoleInfo("1");
                $scope.personName="";
                $scope.showPersonName = function () {
                    if($scope.person.name){
                        $scope.personName = "输入内容："+$scope.person.name;
                    }else{
                        $scope.personName = "输入内容：";
                    }
                };
                $scope.providerValue="";
                $scope.testProviderService = function (name) {
                    $scope.providerValue = userServiceProvider(name);
                };
                //登录系统
                $scope.post_auth = function () {
                    $http({
                        method:"GET",
                        url:"GarbageDisposalSupervision/login/authenticate",
                        params:{"username":$scope.user.name,"password":$scope.user.password}
                    }).success(function (data) {
                        CookieUtil.setCookie("authToken",data["token"],24,null);
                        CookieUtil.setCookie("isUserAuth",true,24,null);
                        console.log(CookieUtil.getCookie("authToken"));
                        $rootScope.isUserAuth=CookieUtil.getCookie("isUserAuth");
                    }).error(function (data) {

                    });
                };

                $scope.getAuditStats=function () {
                    $http({
                        method:"GET",
                        url:"GarbageDisposalSupervision/auditStats/pendingAudits"
                    }).success(function (data) {
                        console.log(data);
                    }).error(function (data) {
                        console.log(data);
                    })
                }
            }
        ])
    })
