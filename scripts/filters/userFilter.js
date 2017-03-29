/**
 * Created by Administrator on 2017/3/27 0027.
 * 定义过滤器  filters/filters指定过滤器模块，并将capitalize过滤器注册到userFilters模块中
 */
define([
    "filters/filters"
],function (angular) {
    "use strict";
    angular.userFilters.filter("capitalize",function () {
        return function (input) {
            console.log("run in filter....");
            if(input){
                return input[0].toUpperCase()+input.slice(1);
            }
        };
    });
})
