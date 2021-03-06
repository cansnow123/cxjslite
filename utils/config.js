/*
 * 
 * WordPres版微信小程序
 * author: jianbo
 * organization: 守望轩  www.watch-life.net
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 有问题加微信：poisonkid，不要叨扰jianbo
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.watch-life.net All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "liteapp.xcxpark.cn";
var WEBSITENAME="守望轩"; //网站名称
var ABOUTID = 129; //wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT='6'; //每页文章数目
var CATEGORIESID='all'  //
var INDEXLISTTYPE ="all" //
var REPLAYTEMPPLATEID = 'IiAVoBWP34u1uwt801rI_Crgen7Xl2lvAGP67ofJLo8';//回复评论消息模版id
var LOGO = "../../images/logo-icon.png"; // 网站的logo图片
var POSTERIMGURL ="../../images/logo700.png"; //生成海报如果没有首图，使用此处设置的图片作为海报图片。
//设置downloadFile合法域名,不带https ,在中括号([])里增加域名，格式：{id=**,domain:'www.**.com'}，用英文逗号分隔。
//此处设置的域名和小程序与小程序后台设置的downloadFile合法域名要一致。
var DOWNLOADFILEDOMAIN = [
  { id: 1, domain: 'api.xcxgy.cn' },
  { id: 2, domain: 'up.qbox.me' },
    { id: 3, domain: 'www.qiniu.com' }
]
 //首页图标导航
 //参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
 //        'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
 //         'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
var INDEXNAV = [
    { id: '1', name: '微店', image: '../../images/shop.png', url: 'pages/shelf/shelf', redirecttype: 'miniapp', appid: 'wx55ea6098e41af5c4', extraData:'' },
    { id: '2', name: '排行', image: '../../images/ranking.png', url: '../hot/hot', redirecttype: 'apppage', appid: '', extraData:''},   
    { id: '3', name: '教程', image: '../../images/app.png', url: '../list/list?categoryID=98', redirecttype: 'apppage', appid: '', extraData: '' },
   ]

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getAboutId: ABOUTID,

  getPageCount: PAGECOUNT,
  getCategoriesID :CATEGORIESID,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getIndexListType: INDEXLISTTYPE,
  getLogo: LOGO,
  getPostImageUrl: POSTERIMGURL,
  getDownloadFileDomain: DOWNLOADFILEDOMAIN
}