/**
 * Created by Administrator on 2015/10/14.
 */
/*process对象是一个全局对象，可以在任何地方访问到它。 它是EventEmitter的一个实例。*/
//console.log(process);
/*
* 一,Exit Codes
* Node 执行程序正常情况下会返回 0，这也意味着，包括所有“异步”在内的操作都已结束。
* （笔者注：linux terminal 下使用 echo $? 查看，win cmd 下使用 echo %ERRORLEVEL% 查看）
* 除此之外的其他返回状态如下：
*
 1 未捕获的致命异常(Uncaught Fatal Exception) - There was an uncaught exception, and it was not handled by a domain or an uncaughtException event handler.
 2 - 未使用(Unused) (reserved by Bash for builtin misuse)
 3 解析错误(Internal JavaScript Parse Error) - The JavaScript source code internal in Node's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during development of Node itself.
 4 评估失败(Internal JavaScript Evaluation Failure) - The JavaScript source code internal in Node's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during development of Node itself.
 5 致命错误(Fatal Error) - There was a fatal unrecoverable error in V8. Typically a message will be printed to stderr with the prefix FATAL ERROR.
 6 未正确的异常处理(Non-function Internal Exception Handler) - There was an uncaught exception, but the internal fatal exception handler function was somehow set to a non-function, and could not be called.
 7 异常处理函数运行时失败(Internal Exception Handler Run-Time Failure) - There was an uncaught exception, and the internal fatal exception handler function itself threw an error while attempting to handle it. This can happen, for example, if a process.on('uncaughtException') or domain.on('error') handler throws an error.
 8 - 未使用(Unused). In previous versions of Node, exit code 8 sometimes indicated an uncaught exception.
 9 - 无效的参数(Invalid Argument) - Either an unknown option was specified, or an option requiring a value was provided without a value.
 10 运行时失败(Internal JavaScript Run-Time Failure) - The JavaScript source code internal in Node's bootstrapping process threw an error when the bootstrapping function was called. This is extremely rare, and generally can only happen during development of Node itself.
 12 无效的调试参数(Invalid Debug Argument) - The --debug and/or --debug-brk options were set, but an invalid port number was chosen.
 >128 信号退出(Signal Exits) - If Node receives a fatal signal such as SIGKILL or SIGHUP, then its exit code will be 128 plus the value of the signal code. This is a standard Unix practice, since exit codes are defined to be 7-bit integers, and signal exits set the high-order bit, and then contain the value of the signal code.
* */
/*
* 二,事件: 'exit'
*当进程将要退出时触发。
* 这是一个在固定时间检查模块状态（如单元测试）的好时机。
* 需要注意的是 'exit' 的回调结束后，主事件循环将不再运行，所以计时器也会失效。
*
* 监听 exit 事件的例子：
* */
//process.on('exit',function(){
//    // 设置一个延迟执行
//    setTimeout(function() {
//        console.log('主事件循环已停止，所以不会执行');
//    }, 0);
//    console.log('退出前执行');
//});

/*
* 三，事件: 'uncaughtException'（未捕获错误）
*当一个异常冒泡回归到事件循环中就会触发这个事件，
* 如果建立了一个监听器来监听这个异常，默认的行为（打印堆栈跟踪信息并退出）就不会发生。
*
* 监听 uncaughtException 示例:
* */
//nonexistentFunc();
//console.log('This will not run.');
/*
* 注意，uncaughtException未捕获异常是一个非常粗略的异常处理。
* 尽量不要使用它，使用 domains 来代替它，如果你已经使用了，请在不处理这个异常之后重启你的应用。
* 请 不要 象使用node.js的有错误回复执行这样使用.一个未处理异常意味着你的应用和你的扩展Node.js自身是有未知状态的。盲目的恢复意味着任何事情都可能发生。
*你在升级的系统时拉掉了电源线，然后恢复了。可能10次里有9次每一偶问题，但是第10次，你的系统就会崩溃。
*你已经被警告。
 * */

/*
* 四，Signal Events
* 当进程接收到信号时触发。信号列表详见 POSIX 标准的 sigaction（2）如 SIGINT、SIGUSR1 等。
* 监听 SIGINT 信号的示例：
* */
// 设置 'SIGINT' 信号触发事件
//process.on('SIGINT', function() {
 //  console.log('收到 SIGINT 信号。  退出请使用 Ctrl + D ');
//});
//在大多数终端下，一个发送 SIGINT 信号的简单方法是按下 ctrl + c 。

/*
* 五，process.stdout
* 一个指向标准输出流(stdout)的 可写的流(Writable Stream)。
* 举例: console.log 的实现
* */

//console.log = function(d) {
//    process.stdout.write(d + '123abcd');
//};
//console.log('a');

/*
* 六，process.stderr
* 一个指向标准错误流(stderr)的 可写的流(Writable Stream)。
* process.stderr 和 process.stdout 不像 Node 中其他的流(Streams) 那样，他们通常是阻塞式的写入。当其引用指向 普通文件 或者 TTY文件描述符 时他们就是阻塞的（注：TTY 可以理解为终端的一种，可联想 PuTTY，详见百科）。当他们引用指向管道(pipes)时，他们就同其他的流(Streams)一样是非阻塞的。
* */
/*
* 七，process.stdin
* 一个指向 标准输入流(stdin) 的可读流(Readable Stream)。
* 标准输入流默认是暂停 (pause) 的，所以必须要调用 process.stdin.resume() 来恢复 (resume) 接收。
*
* 打开标准输入流，并监听两个事件的示例：
* */
//process.stdin.on('end', function() {
//    process.stdout.write('end');
//});
//
//
//// gets 函数的简单实现
//function gets(cb){
//    process.stdin.resume();
//    process.stdin.setEncoding('utf8');
//
//    process.stdin.on('data', function(chunk) {
//        process.stdin.pause();
//        cb(chunk);
//    });
//}
//
//gets(function(reuslt){
//    console.log("["+reuslt+"]");
//});

/*
* 八，require()
* 引入模块。见Modules章节。require实际上并非全局的而是各个模块本地的。
* */