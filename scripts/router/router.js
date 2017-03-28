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
// angular.module("demo",["ngRoute",'demo.services',"demo.filters","demo.directives"])
//     .config(["$routeProvider","$locationProvider",function ($routeProvider,$locationProvider) {
//         console.log("run in route provider.........");
//         $routeProvider
//             .when("students",{
//                 templateUrl:"viewer/main.html"
//             });
//         $locationProvider.hasOwnProperty("!");
//     }]);
