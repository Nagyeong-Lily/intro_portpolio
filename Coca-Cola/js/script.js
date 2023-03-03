
// 새로고침시 스크롤 맨 위로
window.onload = function(){
    setTimeout(function(){
        scrollTo(0,0);
    }, 100)
}

// 마우스 스크롤 넘버&네비게이션
$(function(){

    const scene = document.getElementById("container");
    const parallax = new Parallax(scene);

    $(document).scroll(function(){
        const scroll = $(window).scrollTop();
        // console.log(scroll);

        if (scroll >= 0) {
            $(".page_navigator li").removeClass("on");
            $(".page_navigator li:nth-child(1)").addClass("on");
            $(".page_number .current_number").text("01");
        }
        if (scroll >= 700) {
            $(".page_navigator li").removeClass("on");
            $(".page_navigator li:nth-child(2)").addClass("on");
            $(".page_number .current_number").text("02");
        }
        if (scroll >= 1300) {
            $(".page_navigator li").removeClass("on");
            $(".page_navigator li:nth-child(3)").addClass("on");
            $(".page_number .current_number").text("03");
        }
        if (scroll >= 2100) {
            $(".page_navigator li").removeClass("on");
            $(".page_navigator li:nth-child(4)").addClass("on");
            $(".page_number .current_number").text("04");
        }
        if (scroll >= 2800) {
            $(".page_navigator li").removeClass("on");
            $(".page_navigator li:nth-child(5)").addClass("on");
            $(".page_number .current_number").text("05");
        }
        if (scroll >= 3500) {
            $(".page_number .current_number").fadeOut();
            $(".page_number .total_number").fadeOut();
            $(".page_navigator li").fadeOut();
        } else {
            $(".page_number .current_number").fadeIn();
            $(".page_number .total_number").fadeIn();
            $(".page_navigator li").fadeIn();
        }
    });

});

// 푸터 텍스트 모션 
$(function(){

    $("footer .banner .txtbox .motion .animate").hide();

    $(document).scroll(function(){ 
        const scroll = $(window).scrollTop();
        // console.log(scroll);

    if(scroll >= 3400){ 
                $("footer .banner .txtbox .motion .animate").show();
        }
        else{
            $("footer .banner .txtbox .motion .animate").hide();
        }
    });
    
});

// 팝업 
    
$(function(){

    $("#scene01 .txt span a").click(function(){
        $(".modal_container").fadeIn();
        $("body").css("overflow-y","hidden");
        
    });
    $(".modal_container").click(function(){
        $(".modal_container").fadeOut();
        $("body").css("overflow-y","scroll");
    });

    $("#scene02 .txt2 span a").click(function(){
        $(".modal_container2").fadeIn();
        $("body").css("overflow-y","hidden");
        
    });
    $(".modal_container2").click(function(){
        $(".modal_container2").fadeOut();
        $("body").css("overflow-y","scroll");
    });

    $("#scene03 .txt span a").click(function(){
        $(".modal_container3").fadeIn();
        $("body").css("overflow-y","hidden");
        
    });
    $(".modal_container3").click(function(){
        $(".modal_container3").fadeOut();
        $("body").css("overflow-y","scroll");
    });

    $("#scene04 .txt2 span a").click(function(){
        $(".modal_container4").fadeIn();
        $("body").css("overflow-y","hidden");
        
    });
    $(".modal_container4").click(function(){
        $(".modal_container4").fadeOut();
        $("body").css("overflow-y","scroll");
    });

    $("#scene05 .txt span a").click(function(){
        $(".modal_container5").fadeIn();
        $("body").css("overflow-y","hidden");
        
    });
    $(".modal_container5").click(function(){
        $(".modal_container5").fadeOut();
        $("body").css("overflow-y","scroll");
    });

});

//팝업 스크롤
$(function(){
    $(".modal_con > div").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: false,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });
})