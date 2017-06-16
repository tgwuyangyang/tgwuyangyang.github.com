var java = [{ "id": "1", "name": "RESTful架构", "url": "html/java/rest.html", "time": "2016-07-31" },
   { "id": "2", "name": "word、excel、pdf文件的加密与解密", "url": "html/java/confidentiality.html", "time": "2016-09-23" }
];
var Angular1 = [{ "id": "1", "name": "iphone上时间转换NaN问题", "url": "html/Angular1/date-format.html", "time": "2016-08-02" },
   { "id": "2", "name": "js实现打电话", "url": "html/Angular1/phone.html", "time": "2016-08-03" },
   { "id": "3", "name": "SPA单页面应用页面跳转类似于微信的动画效果", "url": "html/Angular1/skip_cartoon.html", "time": "2016-09-21" },
   { "id": "4", "name": "directive封装mui时间控件", "url": "html/Angular1/btn_date.html", "time": "2016-12-07" },
   { "id": "8", "name": "mui与angular1实现轮播刷新数据", "url": "html/Angular1/carousel.html", "time": "2017-01-11" },
   { "id": "5", "name": "directive封装d3.js", "url": "html/Angular1/d3.html", "time": "2017-01-14" },
   { "id": "6", "name": "directive封装输入框获取焦点和失去焦点", "url": "html/Angular1/focus_blur.html", "time": "2017-02-13" },
   { "id": "7", "name": "屏幕向上滑动，顶部菜单隐藏，屏幕向下滑动，顶部菜单显示", "url": "html/Angular1/scroll_up_down.html", "time": "2017-02-23" },
   { "id": "8", "name": "ng-change", "url": "html/Angular1/ng_change.html", "time": "2017-05-13" }
];
var Angular2 = [{ "id": "1", "name": "angular2环境搭建", "url": "html/Angular2/setting.html", "time": "2017-02-10" }];
var github = [{ "id": "1", "name": "git常用命令", "url": "html/github/command.html", "time": "2016-07-31" },
   { "id": "2", "name": "使用github中的Issues给博客搭建评论功能", "url": "html/github/comment.html", "time": "2017-06-16" }];
var mui = [{ "id": "1", "name": "mui使用小技巧", "url": "html/mui/notes.html", "time": "2016-08-26" }];
var css = [{ "id": "1", "name": "box-sizing", "url": "html/css/box_sizing.html", "time": "2016-08-20" },
   { "id": "2", "name": "ios微信上点击元素背景会闪烁一下", "url": "html/css/background_flicker.html", "time": "2016-08-25" },
   { "id": "3", "name": "HTML中tr标签设置边框不显示", "url": "html/css/border-collapse.html", "time": "2016-09-01" }
];
var nginx = [{ "id": "1", "name": "阿里云服务器均衡负载SLB", "url": "html/nginx/aliyun_slb.html", "time": "2016-08-18" },
   { "id": "2", "name": "nginx for linux安装", "url": "html/nginx/nginx_install.html", "time": "2016-08-30" },
   { "id": "3", "name": "windows环境下搭建nginx实现负载均衡", "url": "html/nginx/nginx_for_windows.html", "time": "2016-09-02" },
   { "id": "4", "name": "Linux环境下搭建nginx实现负载均衡", "url": "html/nginx/nginx_for_linux.html", "time": "2016-09-03" },
   { "id": "5", "name": "session共享", "url": "html/nginx/nginx_session.html", "time": "2016-10-15" }
];
var WeChat = [{ "id": "1", "name": "微信小程序的优点与缺点", "url": "html/wechat/small_routine.html", "time": "2016-11-22" },
   { "id": "2", "name": "解决微信浏览器缓存页面问题", "url": "html/wechat/wechat_cache.html", "time": "2016-11-28" }
];
var livelihood = [{ "id": "1", "name": "人性", "url": "html/livelihood/2017_03_18.html", "time": "2017-03-18" }];
var other = [];
var menu = [{ "id": "1", "name": "java", "data": java},
   { "id": "2", "name": "Angular1", "data": Angular1},
   { "id": "3", "name": "Angular2", "data": Angular2},
   { "id": "4", "name": "github", "data": github},
   { "id": "5", "name": "mui", "data": mui},
   { "id": "6", "name": "css", "data": css},
   { "id": "7", "name": "nginx", "data": nginx},
   { "id": "8", "name": "WeChat", "data": WeChat},
   { "id": "9", "name": "other", "data": other},
   { "id": "10", "name": "生活", "data": livelihood}
];
var type = "java";

// 初始化title
var initTitle = function() {
   var html = '<span type="java" class="color" style="">java</span>';

   for(var i = 1; i < menu.length; i++) {
      html += '<span>|</span><span type=' + menu[i].name + '>' + menu[i].name + '</span>';
   }

   $(".catalog").html(html);
}

// 初始化标题
var initName = function() {
   var html = "";
   var content = getContent();

   for(var i = 0; i < content.length; i++) {
      html += '<h3>' +
         '<a href="' + content[i].url + '">' + content[i].name + '</a><span class="time">' + content[i].time + '</span>' +
         '</h3>' +
         '<hr>';
   }

   if(content.length < 1) {
      html += '<span class="null">敬请期待</span>';
   }

   $("#main_content").html(html);
}

// 根据type获取data
var getContent = function() {
   for(var i = 0; i < menu.length; i++) {
      if(type == menu[i].name) {
         return menu[i].data;
      }
   }

   return [];
}

// 选择分类
$(".catalog").delegate("span", "tap", function() {
   var $this = $(this);
   type = $this.attr("type");
   $this.addClass("color").siblings().removeClass("color");

   initName();
});

$(document).ready(function() {
   initName();
   initTitle();
});