/**
 * Created by Administrator on 2017/3/14 0014.
 */
//创建注册服务 demo是模块名  services是固定写法  服务名是userService userService中有一个服务为getUserInfo
angular.module('demo.services',[])
 .factory('userSerivce',function ($http) {
    console.log('run in userService');
    return {
       getUserInfo:function (userId) {
          return {"userId":userId,"name":"guanxianchun"};
       }
    };
 })
 .service("userRole",function ($http) {
    console.log("run in UserRole service");
    var self = this;  //保存引用
    self.roleInfo={}
    this.getUserRoleInfo = function (userId) {
       self.roleInfo = {"userId":userId,"roleId":1,"roleName":"admin"}
       return self.roleInfo
    };
 });