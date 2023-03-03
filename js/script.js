$(".container #navi ul").hide();
setTimeout(function(){
    $(".container #navi ul").show();
},1200)

$(function(){
    $(".container #navi ul li:nth-of-type(1)").mouseenter(function(){
        $(".container .cola").stop().show();
    });
    $(".container #navi ul li:nth-of-type(1)").mouseleave(function(){
        $(".container .cola").stop().hide();
    });

    $(".container #navi ul li:nth-of-type(2)").mouseenter(function(){
        $(".container .bg").stop().show();
    });
    $(".container #navi ul li:nth-of-type(2)").mouseleave(function(){
        $(".container .bg").stop().hide();
    });

    $(".container #navi ul li:nth-of-type(3)").mouseenter(function(){
        $(".container .airpods").stop().show();
    });
    $(".container #navi ul li:nth-of-type(3)").mouseleave(function(){
        $(".container .airpods").stop().hide();
    });
});