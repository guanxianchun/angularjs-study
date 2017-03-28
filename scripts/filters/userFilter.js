/**
 * Created by Administrator on 2017/3/27 0027.
 */
define([
    "filters/filters",'angular'
],function (filters) {
    "use strict";
    filters.filter("capitalize",function () {
        return function (input) {
            console.log("run in filter....");
            if(input){
                return input[0].toUpperCase()+input.slice(1);
            }
        };
    });
})
// angular.module("demo.filters",[])
// .filter("capitalize",function () {
//     return function (input) {
//         console.log("run in filter....");
//         if(input){
//             return input[0].toUpperCase()+input.slice(1);
//         }
//     };
// });