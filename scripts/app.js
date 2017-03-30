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
    "angular-cookies",
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
        "ngCookies",
        "userControllers",
        "userFilters",
        "userDirectives",
        "userServices",
        "roleServices"
    ])
    .factory("authInterceptor",["$rootScope","$location",function ($rootScope,$location,$window) {
        return {
            request:function (config) {
                if(!angular.isDefined(CookieUtil.getCookie("isUserAuth"))){
                    CookieUtil.setCookie("isUserAuth",false,24,null);
                }
                if(angular.isDefined(CookieUtil.getCookie("authToken"))){
                    config.headers["X-Auth-Token"]=CookieUtil.getCookie("authToken");
                }else {
                    $window.location.href="/login";
                }
                return config;
            }
        }
    }]).config(function ($httpProvider) {
        $httpProvider.interceptors.push("authInterceptor");
        $httpProvider.interceptors.push(function ($location,$window) {
            return {
                "responseError":function (config) {
                    //用户认证失败
                    if(config.status == 401){
                        console.log("用户认证失败，请登录!");
                        $window.location.href="/login";
                    }else if (config.status == 403) {

                    }
                    return config;
                }
            }
        })
    });
    urlAgrs:"bust="+(new Date()).getTime()
})
