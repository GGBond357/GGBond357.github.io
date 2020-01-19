var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        (  
        "飞机飞过天空 天空之城",
        "落雨下的黄昏的我们","此刻我在异乡的夜里",
        "感觉着你忽明忽暗","我想回到过去 沉默着欢喜",
        "天空之城在哭泣越来越明亮的你","爱情不过是生活的屁",
        "折磨着我也折磨着你","港岛妹妹 你献给我的西班牙馅饼",
        "甜蜜地融化了我 天空之城在哭泣","港岛妹妹 我们曾拥有的甜蜜的爱情","疯狂地撕裂了我 天空之城在哭泣",
        "港岛妹妹 你献给我的西班牙馅饼","甜蜜地融化了我 天空之城在哭泣",
        " 港岛妹妹 我们曾拥有的甜蜜的爱情","疯狂地撕裂了我 天空之城在哭泣",
        "港岛妹妹 你献给我的西班牙馅饼","甜蜜地融化了我 天空之城在哭泣",
        "港岛妹妹 我们曾拥有的甜蜜的爱情","疯狂地撕裂了我 天空之城在哭泣",
        "有人路过那里 回来告诉我","天空之城在哭泣无法呼吸的你",
        "此刻我在异乡的夜里","想念着你越来越远",
        );
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
      3000,
      function() {
          $i.remove();
      });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}