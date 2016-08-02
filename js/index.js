var menu = [{"id": "1", "name": "java"}, 
            {"id": "2", "name": "javaScript"}, 
            {"id": "3", "name": "github"}, 
            {"id": "4", "name": "mui"}];
var java = [{"id": "1", "name": "RESTful架构", "url": "html/java/rest.html", "time": "2016-07-31"}];
var javaScript = [{"id": "1", "name": "iphone上时间转换NaN问题", "url": "html/javaScript/date-format.html", "time": "2016-07-31"}];
var github = [{"id": "1", "name": "git常用命令", "url": "html/github/command.html", "time": "2016-07-31"}];
var mui = [];
var type = "java";

// 初始化title
var initTitle = function() {
   var html = '<span type="java" class="color">java</span>';

   for(var i = 1; i < menu.length; i++) {
      html += '<span type=' + menu[i].name + '>' + menu[i].name + '</span>';
   }

   $(".catalog").html(html);
}

// 初始化标题
var initName = function() {
   var html = "";
   var content = [];

   if(type == "java") {
      content = java;
   }
   else if(type == "javaScript") {
      content = javaScript;
   }
   else if(type == "github") {
      content = github;
   }

   for(var i = 0; i < content.length; i++) {
      html += '<h3>'
            +     '<a href="' + content[i].url + '">' + content[i].name + '</a><span class="time">' + content[i].time + '</span>'
            + '</h3>'
            + '<hr>';
   }

   if(content.length < 1) {
      html += '<span class="null">敬请期待</span>';
   }

   $("#main_content").html(html);
}

// 选择分类
$(".catalog").delegate("span", "click",  function() {
   var $this = $(this);
   type = $this.attr("type");
   $this.addClass("color").siblings().removeClass("color");

   initName();
});

$(document).ready(function() {
   initName();
   initTitle();
});