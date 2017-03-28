/**
 * Created by Administrator on 2017/3/28 0028.
 * 第一步：配置requirejs的入口文件mian.js
 */
require.config({
    baseUrl:"scripts",
    //配置angular的路径
    paths:{
        "angular":"../components/angularjs-1.5.0/angular",
        "angular-route":"../components/angularjs-1.5.0/angular-route",
        "angular-resource":"../components/angularjs-1.5.0/angular-resource",
        "jquery":"../components/jquery-2.1.1/jquery",
        "bootstrap":"../components/bootstrap-3.1.1/js/bootstrap",
        "app":"app",
        "router":"router/router"
    },
    //配置引入依赖时的包名
    shim:{
        "angular":{
            exports:"angular"
        },
        "angular-route":{
            deps:["angular"],
            exports:"angular-route"
        },
        "angular-resource":{
            deps:["angular"],
            exports:"angular-resource"
        }
    },
    urlAgrs:"bust="+(new Date()).getTime()
});

define(["require","angular","angular-route","angular-resource","jquery","app","router"],function (require,angular) {
    "use strict";
    console.log("run in load main.........");
    angular.bootstrap(document,["app"]);
});