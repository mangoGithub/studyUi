seajs.config({
	base : "http://10.106.88.98/studyUI/resource/js/",
    //别名配置（相对路径）
    alias:{
        "jquery" :"core/jquery-min-sea.js",
		"less" :"core/less-1.1.3.min.js",
        "angular":"core/angular.min.js",
				
		"amaze" : "ui/amaze.js",
		"echartsall" : "ui/echarts-all.js",
		"wx" : "ui/jweixin-1.0.0.js"
    },
	// 全站变量
    vars: {
        
    },

    // 文本模式
    charset: 'utf-8'
});