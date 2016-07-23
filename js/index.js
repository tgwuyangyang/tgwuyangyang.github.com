var menu = [{"id": "1", "name": "java"}, 
            {"id": "2", "name": "html"}, 
            {"id": "3", "name": "github"}, 
            {"id": "3", "name": "mui"}];
var java = [];
var html = [];
var github = [{"id": "1", "name": "github常用命令", "time": "2016-07-24"}];
var type = "java";

// 初始化title
var initTitle = function() {
   var html = "";
   
   for(var i = 0; i < menu.length; i++) {
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
   else if(type == "html") {
      content = html;
   }
   else if(type == "github") {
      content = github;
   }

   for(var i = 0; i < content.length; i++) {
      html += '<h3>'
            +     '<a href="#">' + content[i].name + '</a><span class="time">' + content[i].time + '</span>'
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
   
   initName();
});

$(document).ready(function() {
   initTitle();
   initName();
});