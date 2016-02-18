define(function(require, exports, module){
	var $ = require("jquery");
	var amaze = require("amaze");
	$(function(){
		//transition in 示例：(运动形式：匀速、加速、减速……)
		$('.tran3').click(function(){
			$(this).css('left',500);	
		});
		//transitionend in transition执行完了的事件,防止误触
		$('.tranend').click(function(){
			this.addEventListener('transitionend',tab,false);//防止误触
			$(this).css('width',$(this).width()+100);	
		});
		
		function tab(e){
			this.removeEventListener('transitionend',tab,false);
			$(this).css('width',$(this).width()+100);
		}
		//表盘
		var is = '', icss = '';
		for(i=0; i<60; i++){
			is += '<li></li>';
			icss +='.otimeList li:nth-child('+(i+1)+'){transform:rotate('+i*6+'deg);}';
		}
		$('.otimeList').append(is);
		$('#trancss3').append(icss);
		setInterval(toDate,1000);
		function toDate(){
			var oDate = new Date();
			var iSec = oDate.getSeconds();
			var iMin = oDate.getMinutes()+iSec/60;
			var ih = oDate.getHours()+iMin/60;
			$('.osec').css('transform','rotate('+iSec*6+'deg)');
			$('.omin').css('transform','rotate('+iMin*6+'deg)');
			$('.oh').css('transform','rotate('+ih*30+'deg)');
		}
		//matrix
		
	})
});