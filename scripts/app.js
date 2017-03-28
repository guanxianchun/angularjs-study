/**
 * Created by Administrator on 2017/3/28 0028.
 * 加载的有的应用：controller,filter,service,directive
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
    // "filters/index",
    "services/index"
    // "directives/index"
],function (angular) {
        return angular.module("app",["ngRoute","ngResource","controllers","services"]);
})
