/**
 * Created by Administrator on 2017/3/27 0027.
 * 创建angularjs指令
 * 定义过指令  directives/directives指定指令模块，并将capitalize指令注册到userDirectives模块中
 */
define(["directives/directives"],function (angular) {
    angular.userDirectives.directive("myDemoLink",function () {
        console.log("run in directive.....");
        return {
            restrict:"EA",
            template:'<a href="https://www.baidu.com"  target="_blank">百度</a>'
        };
    });
})
