/**
 * Created by Administrator on 2017/3/27 0027.
 */
angular.module("demo.filters",[])
.filter("capitalize",function () {
    return function (input) {
        console.log("run in filter....");
        if(input){
            return input[0].toUpperCase()+input.slice(1);
        }
    };
});