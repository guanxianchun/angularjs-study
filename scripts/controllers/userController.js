/**
 * Created by Administrator on 2017/3/27 0027.
 * 创建userInfoController控制器，并在控制器中使用了userSerivce、roleService服务
 * 注意：在define中要指定使用服务的js文件(其中后缀可以省略) 然后在定义控制中使用相应的服务
 */
define(["controllers/controllers","services/userService","services/roleService"],
    function (angular) {
        'use strict';
        angular.userControllers.controller("userInfoController",["$scope","userServiceProvider","userSerivce","roleService",
            function ($scope,userServiceProvider,userSerivce,roleService) {
                $scope.person={"name":"guan.xianchun"};
                $scope.person=userSerivce.getUserInfo("1");
                console.log($scope.person);
                $scope.person = roleService.getUserRoleInfo("1");
                console.log("**************");
                console.log($scope.person);
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
                    $scope.providerValue = userServiceProvider(name)
                }
            }
        ])
    })
