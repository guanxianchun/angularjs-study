/**
 * Created by Administrator on 2017/3/14 0014.
 * 创建注册服务  services/services.js指定服务模块，并将userService服务器注册到userServices模块中
 * userServices模块在services/services.js中定义  services/services.js可以定义angular所有的模块名
 */
define(["services/services"],function (angular) {
    console.log("run in user service.......");
    //将userService服务注册到userServices模块中  userServices模块在services/services.js中定义
    angular.userServices.factory("userSerivce",['$http',function ($http) {
        return {
            getUserInfo:function (userId) {
                return {"userId":userId,"name":"guanxianchun"};
            }
        }
    }]);
})
