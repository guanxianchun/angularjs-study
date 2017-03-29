/**
 * Created by Administrator on 2017/3/29 0029.
 * 创建注册服务  services/services.js指定服务模块，并将roleService服务器注册到roleServices模块中
 * roleServices模块在services/services.js中定义  services/services.js可以定义angular所有的模块名
 */
define(["services/services"],function (angular) {
    angular.roleServices.service("roleService",["$http",function ($http) {
            var self = this;
            self.roleInfo={}
            this.getUserRoleInfo = function (userId) {
                self.roleInfo["userId"]=userId;
                self.roleInfo["roleid"]=2;
                self.roleInfo["roleName"]="管理员";
                return self.roleInfo;
            }
    }])
})
