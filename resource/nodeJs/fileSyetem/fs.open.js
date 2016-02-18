/**
 * Created by Administrator on 2015/10/16.
 */
//fs 模块
var fs = require('fs');
/*
* fs.open(path,flags,[mode],callback)
* path : 要打开的文件的路径
* flags : 打开文件的方式 读/写
* mode : 设置温度的模式 读/写/执行 4/2/1
* callback : 回调
*       err : 文件打开失败的错误保存在err里面，
*       fd ： 被打开文件的标示
* */
fs.open('1.txt','r',function(err,fd){

    //console.log(err);
    //console.log(fd);
    if(err){
        console.log('文件打开失败')
    }else{
        console.log('文件打开成功')
    }
})