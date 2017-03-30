/**
 * Created by Administrator on 2017/3/28 0028.
 * 定义路由
 */
define(["app"],function (app) {
    return app.config(["$routeProvider","$locationProvider",
        function ($routeProvider,$locationProvider) {
            console.log("run in router.........");
            $routeProvider.when("/routerTest",{
                templateUrl:"viewer/angular-test.html",
                controller:"userInfoController"
            })
            $locationProvider.hashPrefix("!");
        }
    ]);
})
