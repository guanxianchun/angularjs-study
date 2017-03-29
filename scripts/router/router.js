/**
 * Created by Administrator on 2017/3/28 0028.
 * 定义路由
 */
define(["app"],function (app) {
    return app.config(["$routeProvider","$locationProvider",function ($routeProvider,$locationProvider) {
        console.log("run in router.........");
        $routeProvider.when("/main",{
            templateUrl:"viewer/main.html",
            controller:"userInfoController"
        }).otherwise({redirectTo:"/login"});
        $locationProvider.hasOwnProperty("!");
    }]);
})
