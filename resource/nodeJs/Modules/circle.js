/**
 * Created by Administrator on 2015/10/14.
 */
//var PI = Math.PI;
//exports.area = function (r) {
//    return PI * r * r;
//};
//exports.circumference = function (r) {
//    return 2 * PI * r;
//};


// 正确输出构造函数
//module.exports = MyConstructor;
//模块内的本地变量是私有的。在这里例子中，PI这个变量就是circle.js私有的。
//模块系统的实现在require("module")中。


//setTimeout(function() {
//    module.exports.emit('ready');
//}, 1000);
setTimeout(function() {
    module.exports = { a: "hello" };
}, 0);