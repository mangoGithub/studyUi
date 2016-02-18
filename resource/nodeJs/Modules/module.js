/**
 * Created by Administrator on 2015/10/14.
 */
/*
* Modules
* Node有一个简易的模块加载系统。
* 在node中，文件和模块是一一对应的。
* 下面示例是foo.js加载同一目录下的circle.js。
* */

//var circle = require('./circle.js');
//console.log( 'The area of a circle of radius 4 is '
//    + circle.area(4));
//console.log(circle.circumference(12));

/*
* circle.js模块输出了area()和circumference()两个函数。
* 要输出某个对象，把它加到exports这个特殊对象下即可。
*
* 注意，exports是module.exports的一个引用，只是为了用起来方便。
* 当你想输出的是例如构造函数这样的单个项目，那么需要使用module.exports。
* */
//console.log(module.exports)
//var circle = require('./circle');
//circle.on('ready', function() {
//    console.log('module a is ready');
//});
//var circle = require('./circle');
//console.log(circle.a);
console.log(module.filename);
console.log(module.loaded);
