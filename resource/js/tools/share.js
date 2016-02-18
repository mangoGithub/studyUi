define(function(require, exports, module){
	var url = encodeURIComponent(location.href);//测试时要换成外网可访问的地址 
	var showcount = '0';/*是否显示分享总数,显示：'1'，不显示：'0' */
	var desc = window.document.title;/*默认分享理由(可选)*/
	var summary = '宜信卓越财富成立9年来，在全国40多个城市拥有千余名资深理财专家顾问，为超过10万名大众富裕阶层和高净值人群提供全方位的理财规划与财富管理服务。';/*分享摘要(可选)*/
	var stitle = window.document.title;/*分享标题(可选)*/
	var site = '宜信财富-您可信赖的财富管理伙伴 ！';/*分享来源 如：腾讯网(可选)*/
	var pics = ''; /*分享图片的路径(可选)*/
	var pic ='';//新浪微博用
	var stitle_index= "宜信财富-您可信赖的财富管理伙伴 ！";
	var url_index = "http://xinghuo.yixin.com/";

	module.exports = {
		//分享到QQ空间
		qqzone: function (){
			window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+url+"&title="+stitle+"&pics="+pics+"&desc="+desc+"&summary="+summary);
		},
		//分享到QQ微薄
		qqbo: function (){
			window.open("http://share.v.t.qq.com/index.php?c=share&a=index&title="+stitle+"&appkey=&url="+url);
		},
		//分享到新浪微薄
		wibo: function (){
			window.open("http://service.weibo.com/share/share.php?appkey=&title="+stitle+"&url="+url+"&searchPic=true");
		},
		//分享到人人网
		renren: function (){
			window.open("http://share.renren.com/share/buttonshare?link="+url+"&title="+stitle+"&description=");
		},
		//分享到QQ空间
		qqzone_index: function (prductDetailUrl){
			var url_qqzone_index=encodeURIComponent(prductDetailUrl);
			window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+url_qqzone_index+"&title="+stitle_index+"&pics="+pics+"&desc="+stitle_index+"&summary="+summary);
		},
		//分享到QQ微薄
		qqbo_index: function (prductDetailUrl){
			window.open("http://share.v.t.qq.com/index.php?c=share&a=index&title="+stitle_index+"&appkey=&url="+prductDetailUrl);
		},
		//分享到新浪微薄
		wibo_index: function (prductDetailUrl){
			window.open("http://service.weibo.com/share/share.php?appkey=&title="+stitle_index+"&url="+prductDetailUrl+"&searchPic=true");
		},
		//分享到人人网
		renren_index: function (prductDetailUrl){
			window.open("http://share.renren.com/share/buttonshare?link="+prductDetailUrl+"&title="+stitle_index+"&description=");
		}
	}
})

