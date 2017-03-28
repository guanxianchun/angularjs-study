/**
 * Created by Administrator on 2017/3/27 0027.
 * 创建angularjs指令
 */
define(["directives/directives"],function (userDirective) {
    userDirective.directive("myDemoLink",function () {
        console.log("run in directive.....");
        return {
            restrict:"EA",
            template:'<a href="https://www.baidu.com"  target="_blank">百度</a>'
        };
    });
})
// angular.module("demo.directives",[])
//     .directive("myDemoLink",function () {
//        console.log("run in directive.....");
//         return {
//             restrict:"EA",
//             template:'<a href="https://www.baidu.com"  target="_blank">百度</a>'
//         };
//     });
