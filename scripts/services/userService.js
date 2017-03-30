/**
 * Created by Administrator on 2017/3/14 0014.
 * 创建注册服务  services/services.js指定服务模块，并将userService服务器注册到userServices模块中
 * userServices模块在services/services.js中定义  services/services.js可以定义angular所有的模块名
 */
define(["services/services","cookieUtil"],function (angular) {
    console.log("run in user service.......");
    //将userService服务注册到userServices模块中  userServices模块在services/services.js中定义
    angular.userServices.factory("userSerivce",['$http',"$rootScope",function ($http,$rootScope) {
        var services = {}
        services.getUserInfo=function(userId) {
            return {"userId":userId,"name":"guanxianchun"};
        };
        
        return services;
    }]);
    //用provider的方式定义服务
    angular.userServices.provider("userServiceProvider",function () {
        console.log("instance userServiceProvider.....");
        var hello = function (name) {
            console.log("hello "+name)
            return "hello "+name;
        }
        //一定要有$get
        this.$get = function ($http) {
            return hello;
        }
    });
    

})
