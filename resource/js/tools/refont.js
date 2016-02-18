function refont(){
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var fontSize = Math.min(w, h)/32;
	if(fontSize > 16) {
		fontSize = 16;
	}
	$('html').css('font-size',fontSize+'px')
}
refont();
/*
	describe：点击对象弹出一个层，然后点击层里面的列表，并且把值赋给一个变量，然后把变量里面的值赋给点击的对象。
	date：2015/08/19
	author:mango
*/
function clickGetNum(EleList,clickEle,obj,openFun,closeFun,returnFun,nFun){
	var $arrList = $(EleList,$(obj));
	var values = '';
	var n =0;
	openFun && openFun();
	$arrList.unbind('click');
	$arrList.on('click',function(){
		$arrList.removeClass('act');
		values = $(this).text() || $(this).attr('alt');
		n = $(this).children('em').text();
		$(this).addClass('act');
		$(clickEle).text(values);
		n ? $(clickEle).next('input[type="hidden"]').val(n) :$(clickEle).next('input[type="hidden"]').val(values);;
		
		closeFun && closeFun();
		returnFun && returnFun();
	})
	
	nFun && nFun();
	
}

