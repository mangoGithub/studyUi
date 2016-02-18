define(function(require, exports, module){

    'use strict';
    var $ = require("jquery");
    var poshytip = require("poshytip")($);
    return function($){
		$.fn.Validator=function(config){

		    var config = $.extend(true, {IsValidate: true, hmsg: "", showok: {show: true, showclass: "tip-ok"}, isAll: false, isAllDiv: false,
		    	style: {className: 'tip-info', alignX: 'right', alignY: 'center', offsetX: 8, showOn: "none", alignTo: 'target', keepInViewport: false}, div: false}, config);
		    
		    config.rmsg = config.rmsg ? config.rmsg : $.fn.Validator.enumeration.meassage[config.regexp];

		    config.fnmsg = config.fnmsg ? config.fnmsg : $.fn.Validator.enumeration.meassage[config.fn];

		    config.regexp = $.fn.Validator.enumeration[config.regexp] ? $.fn.Validator.enumeration[config.regexp] : config.regexp;

		    config.fn = $.fn.Validator.enumeration[config.fn] ? $.fn.Validator.enumeration[config.fn] : config.fn;

		    return this.each(function(){

					var $this = $(this).poshytip(config.style);
					var $tip = $this.data('poshytip').$tip;

					// 如果控件本身有值，oldval存储。
					var oldval = $(this).val();
			      	$this.on("focus",function(){

			        	$tip.removeClass().addClass("tip-info");

			        	if(config.isAll && $(config.isAllDiv).length) {

			       //  		$this.removeClass("text-error").addClass("text-focus").poshytip('hide').poshytip('update', config.hmsg).poshytip('show').poshytip('hide');

			       //  		$(config.isAllDiv).html("").append($tip.clone(true).css({"left": "50%", "top": "-10px", "margin-left": -50, "opacity": "100"}));
					    	// $(config.isAllDiv).show();

			        	}else{

			        		$this.removeClass("text-error").addClass("text-focus").poshytip('hide').poshytip('update', config.hmsg).poshytip('show');

			        	}
			        	
			      	}).on("blur",function (event, tag) {

			      		$this.removeClass("text-focus");

			        	// 添加配置过滤是否验证值change
				        if(config.hasval){
				          // 当空间没有发生值change，默认返回true。
				          	if(oldval === $(this).val()){
				            	$tip.removeClass().addClass(config.showok.showclass);

				            	if(config.isAll && $(config.isAllDiv).length) {

					        		$(config.isAllDiv).html("").append($tip.clone(true).css({"left": "50%", "top": "-10px", "margin-left": -15, "opacity": "100"}));
					        		$(config.isAllDiv).show();

					        	}else{
					        		$this.addClass("text-succeed").poshytip('update','<div class="tip-state"></div>').poshytip('show');
					        	}
				            
				            	return;
				          	}
				        }

			        if(config.div && !tag){return false;}
			        	var v = false;
			        	var errormsg, value;
			        	if(config.isAll && $(config.isAllDiv).length) {

			        		$(config.isAllDiv).append($tip.clone(true).css({"left": "50%", "top": "-10px", "margin-left": -80, "opacity": "100"}));

			        		$(config.isAllDiv).hide();

			        		value = $this.val();

			        	}else{

			        		value = $this.removeClass("text-succeed").removeClass("text-error").removeClass("text-focus").poshytip('hide').val();

			        	}
				      
				        
				        if(config.IsValidate && !$.trim(value)){

				        	errormsg = config.emsg;

				        }else if($.trim(value) && config.regexp && !config.regexp.test(value)){

					    	var x = !config.regexp.test(value)
					    	errormsg = config.rmsg;

				        }else if(($.trim(value) || config.div) && config.fn && !config.fn(value, tag)){

				        	errormsg = config.fnmsg;

				        }else{

				        	v= true;

				        }
			        if(v){

				    	if(($.trim(value) || config.div) && config.showok.show){

				        	$tip.removeClass().addClass(config.showok.showclass);

				        	if(config.isAll && $(config.isAllDiv).length) {

				        		$this.addClass("text-succeed").poshytip('update','<div class="tip-state"></div>').poshytip('show').poshytip('hide');

				        		$(config.isAllDiv).html("").append($tip.clone(true).css({"left": "50%", "top": "-10px", "margin-left": -15, "opacity": "100"}));
				        		$(config.isAllDiv).show();

				        	}else{

				        		$this.addClass("text-succeed").poshytip('update','<div class="tip-state"></div>').poshytip('show');

				        	}
				            
				   		} 

			        }else{

			        	$tip.removeClass().addClass("tip-error");

			        	if(config.isAll && $(config.isAllDiv).length) {

			        		$this.addClass("text-error").poshytip('update','<div class="tip-state">'+errormsg+'</div>').poshytip('show').poshytip('hide');

			        		$(config.isAllDiv).html("").append($tip.clone(true).css({"left": "50%", "top": "-10px", "margin-left": -85, "opacity": "100"}));
			        		$(config.isAllDiv).show();

			        	}else{

			        		$this.addClass("text-error").poshytip('update','<div class="tip-state">'+errormsg+'</div>').poshytip('show');

			        	}
			        }
			        $this.data("Validator",v);
			    });
		    })

		}
		$.fn.Validator.enumeration = {
		    username: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$|^1[3,4,5,7,8]{1}[0-9]{9}$/,
		    phone: /^1[3,4,5,7,8]{1}[0-9]{9}$/,
		    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		    //password: /^\S{6,}$/,
		    password: /^(?!\d+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,18}$/,
		    nickname: /^[A-Za-z0-9\u4E00-\u9FA5]+$/,
		    identity: /^\d{17}[\d,x,X]$/,
		    bankcard: /^\d{16,19}$/,
		    chinname: /^[\u2E80-\u9FFF]{2,10}(?:•[\u2E80-\u9FFF]{2,10})*$/,
		    coding: /^\d{12}$/,
		    QQ: /^[1-9]{1}[0-9]{4,9}$/,
		    captcha : /^\w{6}$/,
		    imgCaptcha: /^\w{4}$/,
		    meassage: {
				username: "手机或邮箱格式错误",
				phone: "请输入正确手机号",
				email: "邮箱格式有误",
				password: "密码格式错误",
				nickname: "昵称只能用中文、英文、数字组合",
				identity: "身份证格式错误",
				checkIdCard: "身份证号码错误",
				bankcard: "银行卡格式错误",
				chinname: "中文姓名格式有误",
				coding: "员工编码格式错误",
				QQ: "QQ号码格式错误",
				captcha : "验证码格式错误"
		    },
		    checkIdCard:function(idCard){

				idCard = idCard.toUpperCase();

				var area = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",  
				    23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",  
				    41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",  
				    52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",  
				    71:"台湾",81:"香港",82:"澳门",91:"国外"};

				var Y, JYM;
				var S, M;
				var idcard_array = new Array();  
				idcard_array = idCard.split("");
				if(18!=idCard.length){
					return false;
				}
				if(area[parseInt(idCard.substr(0, 2))] == null){
					return false;  
				}
				if(parseInt(idCard.substr(6, 4)) % 4 == 0 || (parseInt(idCard.substr(6, 4)) % 100 == 0 && parseInt(idCard.substr(6, 4)) % 4 == 0)){  
					var ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
				}else{
					var ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式   
				}
				if(ereg.test(idCard)){//测试出生日期的合法性
					//计算校验位
					S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7  
					    + (parseInt(idcard_array[1]) + parseInt(idcard_array[11]))* 9  
					    + (parseInt(idcard_array[2]) + parseInt(idcard_array[12]))* 10  
					    + (parseInt(idcard_array[3]) + parseInt(idcard_array[13]))* 5  
					    + (parseInt(idcard_array[4]) + parseInt(idcard_array[14]))* 8  
					    + (parseInt(idcard_array[5]) + parseInt(idcard_array[15]))* 4  
					    + (parseInt(idcard_array[6]) + parseInt(idcard_array[16]))* 2  
					    + parseInt(idcard_array[7]) * 1  
					    + parseInt(idcard_array[8]) * 6   
					    + parseInt(idcard_array[9]) * 3; 

					Y = S % 11;
					M = "F";
					JYM = "10X98765432";  
					M = JYM.substr(Y, 1); //判断校验位
					if (M != idcard_array[17]){
					  return false;
					}
				}else{
					return false;
				}
				var year =  idCard.substring(6,10);
				var month = idCard.substring(10,12);
				var day = idCard.substring(12,14);
				var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
				if(temp_date.getFullYear()!=parseFloat(year)||temp_date.getMonth()!=parseFloat(month)-1||temp_date.getDate()!=parseFloat(day)){
					return false;
				}
				return true;
		    }
	  	}
	}

});