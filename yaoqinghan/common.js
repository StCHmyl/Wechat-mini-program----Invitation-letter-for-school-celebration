const news=[{ 
	id:"32407",
title:"[学习强国]多彩校园丨毕业典礼被留作业！四千余嘉庚人“领命”启航",
poster:"http://20.xujc.com/_upload/article/images/b1/b0/1349e92c412fbc9d686d1d62218c/6d3c4244-3d52-4097-917a-165729312feb.jpg",
content:"意不意外，惊不惊喜！在毕业典礼这样一堂没有PPT、不需要做笔记的大学“最后一课”里，老师说：“按惯例我还是要给各位同学布置一道课后作业，提交形式不限，提交时间，永远都可以！”6月30日晚，厦门大学嘉庚学院在北区操场举办2022年毕业典礼暨学位授予仪式，深情送别4000多名毕业生。教师代表、该校信息科学与技术学院副教授周牡丹在发言中说，作业内容是：“请同学们在事业有成时报喜，让我们分享你的喜悦；在遭遇挫折时也不忘倾诉，我们会尽最大能力给你们支持和帮助。”",
add_date:"2022-07-02"},
{id:"32441",
title:"【20周年校庆讲座】厦大图书馆副研究馆员周建昌细说林语堂",
poster:"http://20.xujc.com/_upload/article/images/e9/43/6056021c4cb4b207a3de22d59900/dfe56ef1-e600-4a1e-bb1e-d2dc823b4320.jpg",
content:"5月30日中午，厦门大学图书馆副研究馆员、厦门鹭江讲坛主讲人周建昌在公共教学楼1号楼208教室为我校师生带来了一场以“林语堂先生的家国情怀”为主题的鹭江讲坛暨校庆讲座。本次讲座由厦门大学嘉庚学院主办，厦门大学嘉庚学院英语语言文化学院承办。",
add_date:"2023-06-06"},
{id:"32880",
title:"上线！我校官网焕新出发",
poster:"http://20.xujc.com/_upload/article/images/15/44/989b89314cf7a5b0b8f366246cd2/3e1bb2bc-3e54-4a71-8a74-29d0da1ac5bc.jpg",
content:"厦门大学嘉庚学院网站由传媒中心负责管理，于2004年2月建立。网站内容丰富，提供含文、图、视频等全方位“嘉园”新闻资讯，截至目前总访问量超过4437万。这次改版是我校网站自创建以来的第四次“换装”，由传媒中心设计、IT服务中心开发。在学校领导的关心指导和有关单位的协助支持下，经过广泛调研、征求意见和设计调试，网站改版工作顺利完成，并于6月2日上线试运行。秉承“唱响时代旋律，讲好‘嘉园’故事”的宣传工作思路，本次改版以服务师生需求、提升用户体验为出发点，延续第三版网站资讯及时、内容丰富、查找方便、服务多元等特点，从内容、版式、服务等方面进行优化升级，以期为用户呈现一个有“速度、深度、温度”的全新网站。",
add_date:"2023-5-2"}]

//自定义函数：获取新闻列表
function getNewsList(){
	let list=[];
	for(var i=0;i<news.length;i++){
		let obj={};
		obj.id=news[i].id;
		obj.title=news[i].title;
		obj.poster=news[i].poster;
		list.push(obj)
	}
	return list
}
//自定义函数：获取新闻内容
function getNewsDetail(newsID){
	let msg={
		code:"404",
		news:{}
	};
	for(var i=0;i<news.length;i++){
		if(newsID==news[i].id){
			msg.code="200";
			msg.news=news[i];
			break
		}
	}
	return msg
}

module.exports={
	getNewsList:getNewsList,
	getNewsDetail:getNewsDetail
}