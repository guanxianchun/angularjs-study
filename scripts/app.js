/**
 * Created by Administrator on 2017/3/28 0028.
 * 加载的有的应用及组件(模块)：controllers,filters,services,directives模块
 * controller对应controller.js
 * filter对应filter.js
 * directive对应directive.js
 * service对应service.js
 */
define([
    "angular",
    "angular-route",
    "angular-resource",
    "controllers/index",
    "filters/index",
    "services/index",
    "directives/index"
],function (angular) {
    console.log("run in app..........");
    //ng-app名为app 并定义其模块名
    return angular.module("app",[
        "ngRoute",
        "ngResource",
        "userControllers",
        "userFilters",
        "userDirectives",
        "userServices",
        "roleServices"
    ]);
    urlAgrs:"bust="+(new Date()).getTime()
})
