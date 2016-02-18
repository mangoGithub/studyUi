/**
 * Created by Administrator on 2015/10/15.
 */
var os = require('os');
//console.log(os);

//os.tmpdir() 返回操作系统默认的临时文件目录
console.log(os.tmpdir());

//os.endianness() 返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
console.log(os.endianness())

//os.hostname() 返回操作系统的主机名。
console.log(os.hostname())

//os.type() 返回操作系统名称。
console.log(os.type())

//os.platform() 返回操作系统平台
console.log(os.platform())

//os.arch() 返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
console.log(os.arch());

//os.release() 返回操作系统的发行版本。
console.log(os.release());

//os.uptime() 返回操作系统运行的时间，以秒为单位。
console.log(os.uptime());

//os.loadavg() 返回一个包含 1、5、15 分钟平均负载的数组。
console.log(os.loadavg())

//os.totalmem()返回系统内存总量，单位为字节。
console.log(os.totalmem());

//os.freemem() 返回操作系统空闲内存量，单位是字节。
console.log(os.freemem());

//os.cpus()返回一个对象数组，包含所安装的每个 CPU/内核的信息：
// 型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
console.log(os.cpus());

//os.networkInterfaces() 获取网络接口的一个列表信息：
console.log(os.networkInterfaces());

//os.EOL 一个定义了操作系统的一行结束的标识的常量。
console.log(os.EOL);