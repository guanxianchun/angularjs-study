/**
 * Created by Administrator on 2017/3/28 0028.
 * 定义服务所属模块
 */
define(["angular"],function (angular) {
    "use strict";
    return {
        "userServices":angular.module("userServices",["ngResource"]),
        "roleServices":angular.module("roleServices",[])
    }
})