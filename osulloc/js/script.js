  // header slide-down
  $(document).scroll(function(){
    const scroll = $(window).scrollTop();

    if (scroll > 750) {
        $("header").hide();
        $(".scroll_header").fadeIn(500);
        $(".scroll_header .bg").addClass("down");
        $(".scroll_header .bg").removeClass("up");
    } else{
        $(".scroll_header .bg").removeClass("down");
        $(".scroll_header .bg").addClass("up");
        $(".scroll_header").fadeOut(500);
        $("header").show();
    }
  });


// bar mouseenter & click
$(".collection .food_inner").mouseenter(function(){ 
    $("section .collection_bar").fadeIn(1000);
});

$("section .collection_bar .teabeauty_bar").click(function(){ 
    $("section .collection_bar .teafood_bar").removeClass("on");
    $("section .collection_bar .teabeauty_bar").addClass("on");
    $("section .food_inner").hide();
    $("section .beauty_inner").show();
});
$("section .collection_bar .teafood_bar").click(function(){ 
    $("section .collection_bar .teabeauty_bar").removeClass("on");
    $("section .collection_bar .teafood_bar").addClass("on");
    $("section .beauty_inner").hide();
    $("section .food_inner").show();
});


//swiper
const slide = new Swiper('.swiper', {
    slidesPerView :1, // 한 슬라이드에 보여줄 갯수
    spaceBetween : 6, // 슬라이드 사이 여백
    loop : true, // 슬라이드 반복 여부
    loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    pagination : false, // pager 여부
    autoplay : false,
    navigation: {   // 버튼 사용자 지정
        nextEl: '.special .swiper .btn .next',
        prevEl: '.special .swiper .btn .prev',
    },
  })

//device size motion
$(function(){
    $(".collection .collection_inner").hide();
        
    $(".news ul li:nth-of-type(1)").hide();
    $(".news ul li:nth-of-type(2)").hide();
    $(".news ul li:nth-of-type(3)").hide();
    
    $(".map .map_inner .museum img:nth-of-type(2)").hide();
    $(".map .map_inner .museum .museum_txt").hide();
    $(".map .map_inner .museum img:nth-of-type(1)").hide();
        
    $(".map .map_inner .farm img:nth-of-type(1)").hide();
    $(".map .map_inner .farm img:nth-of-type(2)").hide();
    $(".map .map_inner .farm .farm_txt").hide();

    $(".map .map_inner .garden .garden_txt").hide();
    $(".map .map_inner .garden img:nth-of-type(2)").hide();
    $(".map .map_inner .garden img:nth-of-type(1)").hide();
    $(".map .map_inner .innisfree img:nth-of-type(2)").hide();
    $(".map .map_inner .innisfree img:nth-of-type(1)").hide();
    $(".map .map_inner .innisfree .innisfree_txt").hide();
        
    $(".map .map_inner .tea_stone img:nth-of-type(1)").hide();
    $(".map .map_inner .tea_stone .txt_stone").hide();
    $(".map .map_inner .tea_stone img:nth-of-type(2)").hide();
        
    $(".subscribe ul li:nth-of-type(1)").hide();
    $(".subscribe ul li:nth-of-type(2)").hide();

    $("footer .banner .txtbox .motion .animate").hide();
});

$(window).resize(function(){ 

    if (window.innerWidth > 1650) {  // 다바이스 크기가 1650이상 일때 
    
        // scroll motion
        $(function(){
        
            $(document).scroll(function(){
                const scroll = $(window).scrollTop();
                // console.log(scroll);
        
                if (scroll >= 850) {
                    $(".collection .collection_inner").show();
                }
        
                if (scroll >= 2100) {
                    $(".news ul li:nth-of-type(1)").show();
                    $(".news ul li:nth-of-type(2)").show();
                    $(".news ul li:nth-of-type(3)").show();
                }
            
                if (scroll >= 4900) {
                    $(".map .map_inner .museum img:nth-of-type(2)").show();
                    $(".map .map_inner .museum .museum_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .museum img:nth-of-type(1)").fadeIn();
                    },1500);
                }
                if (scroll >= 5500) {
                    $(".map .map_inner .farm img:nth-of-type(1)").show();
                    $(".map .map_inner .farm img:nth-of-type(2)").show();
                    $(".map .map_inner .farm .farm_txt").show();
                }
                if (scroll >= 6000) {
                    $(".map .map_inner .garden .garden_txt").show();
                    $(".map .map_inner .garden img:nth-of-type(2)").show();
                }
                if (scroll >= 6200) {
                    $(".map .map_inner .garden img:nth-of-type(1)").fadeIn();
                }
                if (scroll >= 6600) {
                    $(".map .map_inner .innisfree img:nth-of-type(2)").show();
                    $(".map .map_inner .innisfree img:nth-of-type(1)").show();
                    $(".map .map_inner .innisfree .innisfree_txt").show();
                }
                if (scroll >= 7100) {
                    $(".map .map_inner .tea_stone img:nth-of-type(1)").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .tea_stone img:nth-of-type(2)").fadeIn();
                    },1500);
                }
        
                if (scroll >= 8200) {
                    $(".subscribe ul li:nth-of-type(1)").show();
                    $(".subscribe ul li:nth-of-type(2)").show();
                }
                return false;
            });
        });
        
        // typing motion
        $(function(){
            
            $(".typing .typing-wrapper .typing-text").hide();
            $(".typing .teabox_container").hide();
        
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
        
            if(scroll >= 8950){
                $(".typing .typing-wrapper .typing-text").show();
                $(".typing .typing-wrapper").addClass("add_motion");
                setTimeout(function(){
                    $(".typing .teabox_container").fadeIn();
                },4500);
                }
            });
        });

        // footer text slide-up
        $(function(){
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
                // console.log(scroll);

            if(scroll >= 10670){ 
                $("footer .banner .txtbox .motion .animate").show();
                }
                else{
                $("footer .banner .txtbox .motion .animate").hide();
                }
            });
        });
    
    } 
    
    else if(window.innerWidth > 1400) { // 다바이스 크기가 1400이상 일때
    
        //scroll motion
        $(function(){
            $(document).scroll(function(){
                const scroll = $(window).scrollTop();
                // console.log(scroll);
        
                if (scroll >= 850) {
                    $(".collection .collection_inner").show();
                }
        
                if (scroll >= 2100) {
                    $(".news ul li:nth-of-type(1)").show();
                    $(".news ul li:nth-of-type(2)").show();
                    $(".news ul li:nth-of-type(3)").show();
                }
            
                if (scroll >= 4600) {
                    $(".map .map_inner .museum img:nth-of-type(2)").show();
                    $(".map .map_inner .museum .museum_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .museum img:nth-of-type(1)").fadeIn();
                    },1500);
                }
                if (scroll >= 5162) {
                    $(".map .map_inner .farm img:nth-of-type(1)").show();
                    $(".map .map_inner .farm img:nth-of-type(2)").show();
                    $(".map .map_inner .farm .farm_txt").show();
                }
                if (scroll >= 5600) {
                    $(".map .map_inner .garden .garden_txt").show();
                    $(".map .map_inner .garden img:nth-of-type(2)").show();
                }
                if (scroll >= 5862) {
                    $(".map .map_inner .garden img:nth-of-type(1)").fadeIn();
                }
                if (scroll >= 6162) {
                    $(".map .map_inner .innisfree img:nth-of-type(2)").show();
                    $(".map .map_inner .innisfree img:nth-of-type(1)").show();
                    $(".map .map_inner .innisfree .innisfree_txt").show();
                }
                if (scroll >= 6562) {
                    $(".map .map_inner .tea_stone img:nth-of-type(1)").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .tea_stone img:nth-of-type(2)").fadeIn();
                    },1500);
                }
        
                if (scroll >= 7400) {
                    $(".subscribe ul li:nth-of-type(1)").show();
                    $(".subscribe ul li:nth-of-type(2)").show();
                }
                return false;
            });
        });
        
         // 타이핑 효과
         $(function(){
            
            $(".typing .typing-wrapper .typing-text").hide();
            $(".typing .teabox_container").hide();
        
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
        
            if(scroll >= 8400){
                $(".typing .typing-wrapper .typing-text").show();
                $(".typing .typing-wrapper").addClass("add_motion");
                setTimeout(function(){
                    $(".typing .teabox_container").fadeIn();
                },4500);
                }
            });
        });

            // 푸터 텍스트 모션
        $(function(){
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
                // console.log(scroll);

            if(scroll >= 10193){ 
                $("footer .banner .txtbox .motion .animate").show();
            }
            else{
                $("footer .banner .txtbox .motion .animate").hide();
                }
            }); 
        });
    
    } 
    
    else if(window.innerWidth > 1100) { // 다바이스 크기가 1100이상 일때
    
        //scroll motion
        $(function(){
            $(document).scroll(function(){
                const scroll = $(window).scrollTop();
                // console.log(scroll);
        
                if (scroll >= 850) {
                    $(".collection .collection_inner").show();
                }
        
                if (scroll >= 2100) {
                    $(".news ul li:nth-of-type(1)").show();
                    $(".news ul li:nth-of-type(2)").show();
                    $(".news ul li:nth-of-type(3)").show();
                }
            
                if (scroll >= 4500) {
                    $(".map .map_inner .museum img:nth-of-type(2)").show();
                    $(".map .map_inner .museum .museum_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .museum img:nth-of-type(1)").fadeIn();
                    },1500);
                }
                if (scroll >= 4900) {
                    $(".map .map_inner .farm img:nth-of-type(1)").show();
                    $(".map .map_inner .farm img:nth-of-type(2)").show();
                    $(".map .map_inner .farm .farm_txt").show();
                }
                if (scroll >= 5300) {
                    $(".map .map_inner .garden .garden_txt").show();
                    $(".map .map_inner .garden img:nth-of-type(2)").show();
                }
                if (scroll >= 5500) {
                    $(".map .map_inner .garden img:nth-of-type(1)").fadeIn();
                }
                if (scroll >= 5700) {
                    $(".map .map_inner .innisfree img:nth-of-type(2)").show();
                    $(".map .map_inner .innisfree img:nth-of-type(1)").show();
                    $(".map .map_inner .innisfree .innisfree_txt").show();
                }
                if (scroll >= 6100) {
                    $(".map .map_inner .tea_stone img:nth-of-type(1)").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .tea_stone img:nth-of-type(2)").fadeIn();
                    },1500);
                }
        
                if (scroll >= 6900) {
                    $(".subscribe ul li:nth-of-type(1)").show();
                    $(".subscribe ul li:nth-of-type(2)").show();
                }
                return false;
            });
        });
        
         // 타이핑 효과
         $(function(){
            
            $(".typing .typing-wrapper .typing-text").hide();
            $(".typing .teabox_container").hide();
        
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
        
            if(scroll >= 7600){
                $(".typing .typing-wrapper .typing-text").show();
                $(".typing .typing-wrapper").addClass("add_motion");
                setTimeout(function(){
                    $(".typing .teabox_container").fadeIn();
                },4500);
                }
            });
        });

            // 푸터 텍스트 모션
            $(function(){
                $(document).scroll(function(){ 
                    const scroll = $(window).scrollTop();
                    // console.log(scroll);
    
                if(scroll > 9258){ 
                    $("footer .banner .txtbox .motion .animate").show();
                }
                else{
                    $("footer .banner .txtbox .motion .animate").hide();
                    }
                return false;
                });
            });
        } 
    
    else if(window.innerWidth > 880) { // 다바이스 크기가 880이상 일때
    
        //scroll motion
        $(function(){
            $(document).scroll(function(){
                const scroll = $(window).scrollTop();
                // console.log(scroll);
        
                if (scroll >= 850) {
                    $(".collection .collection_inner").show();
                }
        
                if (scroll >= 2100) {
                    $(".news ul li:nth-of-type(1)").show();
                    $(".news ul li:nth-of-type(2)").show();
                    $(".news ul li:nth-of-type(3)").show();
                }
            
                if (scroll >= 4200) {
                    $(".map .map_inner .museum img:nth-of-type(2)").show();
                    $(".map .map_inner .museum .museum_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .museum img:nth-of-type(1)").fadeIn();
                    },1500);
                }
                if (scroll >= 4600) {
                    $(".map .map_inner .farm img:nth-of-type(1)").show();
                    $(".map .map_inner .farm img:nth-of-type(2)").show();
                    $(".map .map_inner .farm .farm_txt").show();
                }
                if (scroll >= 4900) {
                    $(".map .map_inner .garden .garden_txt").show();
                    $(".map .map_inner .garden img:nth-of-type(2)").show();
                }
                if (scroll >= 5200) {
                    $(".map .map_inner .garden img:nth-of-type(1)").fadeIn();
                }
                if (scroll >= 5300) {
                    $(".map .map_inner .innisfree img:nth-of-type(2)").show();
                    $(".map .map_inner .innisfree img:nth-of-type(1)").show();
                    $(".map .map_inner .innisfree .innisfree_txt").show();
                }
                if (scroll >= 5600) {
                    $(".map .map_inner .tea_stone img:nth-of-type(1)").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt").show();
                    setTimeout(function(){
                        $(".map .map_inner .tea_stone img:nth-of-type(2)").fadeIn();
                    },1500);
                }
        
                if (scroll >= 6525) {
                    $(".subscribe ul li:nth-of-type(1)").show();
                    $(".subscribe ul li:nth-of-type(2)").show();
                }
                return false;
            });
        });
        
         // 타이핑 효과
        $(function(){
            
            $(".typing .typing-wrapper .typing-text").hide();
            $(".typing .teabox_container").hide();
        
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
        
            if(scroll >= 7025){
                $(".typing .typing-wrapper .typing-text").show();
                $(".typing .typing-wrapper").addClass("add_motion");
                setTimeout(function(){
                    $(".typing .teabox_container").fadeIn();
                },4500);
                }
            });
        });

            // 푸터 텍스트 모션
            $(function(){
                $(document).scroll(function(){ 
                    const scroll = $(window).scrollTop();
                    // console.log(scroll);
    
                if(scroll >= 8725){ 
                    $("footer .banner .txtbox .motion .animate").show();
                }
                else{
                    $("footer .banner .txtbox .motion .animate").hide();
                    }
                    return false;
                }); 
            });
    
    } 
    
    else if(window.innerWidth > 640) { // 다바이스 크기가 640이상 일때
        
        $(".wrap header i").click(function(){ 
            $(".wrap header .sub_menu").show();
            $(".wrap header .sub_menu").addClass("open");
            $(".wrap header .sub_menu").removeClass("close");
        });
        $(".wrap header .sub_menu i").click(function(){
            $(".wrap header .sub_menu").fadeOut(1500);
            $(".wrap header .sub_menu").addClass("close");
            $(".wrap header .sub_menu").removeClass("open");
        });
        $(".wrap .bg i").click(function(){ 
            $(".wrap .bg .sub_menu2").show();
            $(".wrap .bg .sub_menu2").addClass("open");
            $(".wrap .bg .sub_menu2").removeClass("close");
        });
        $(".wrap .bg .sub_menu2 i").click(function(){
            $(".wrap .bg .sub_menu2").fadeOut(1000);
            $(".wrap .bg .sub_menu2").addClass("close");
            $(".wrap .bg .sub_menu2").removeClass("open");
        });

        //scroll motion
        $(function(){
            $(document).scroll(function(){
                const scroll = $(window).scrollTop();
                // console.log(scroll);
                if (scroll >= 850) {
                    $(".collection .collection_inner").show();
                }
        
                if (scroll >= 1844) {
                    $(".news ul li:nth-of-type(1)").show();
                    $(".news ul li:nth-of-type(2)").show();
                    $(".news ul li:nth-of-type(3)").show();
                }
            
                if (scroll >= 3542) {
                    $(".map .map_inner .museum img:nth-of-type(2)").show();
                    $(".map .map_inner .museum .museum_txt").show();
                    // setTimeout(function(){
                    //     $(".map .map_inner .museum img:nth-of-type(1)").hide();
                    // },1500);
                }
                if (scroll >= 3942) {
                    // $(".map .map_inner .farm img:nth-of-type(1)").hide();
                    $(".map .map_inner .farm img:nth-of-type(2)").show();
                    $(".map .map_inner .farm .farm_txt").show();
                }
                if (scroll >= 4242) {
                    $(".map .map_inner .garden .garden_txt").show();
                    $(".map .map_inner .garden img:nth-of-type(2)").show();
                    // $(".map .map_inner .garden img:nth-of-type(1)").hide();
                }
                if (scroll >= 4642) {
                    // $(".map .map_inner .innisfree img:nth-of-type(2)").hide();
                    $(".map .map_inner .innisfree img:nth-of-type(1)").show();
                    $(".map .map_inner .innisfree .innisfree_txt").show();
                }
                if (scroll >= 4942) {
                    $(".map .map_inner .tea_stone img:nth-of-type(1)").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt span").show();
                    // setTimeout(function(){
                    //     $(".map .map_inner .tea_stone img:nth-of-type(2)").hide();
                    // },1500);
                }
        
                if (scroll >= 5782) {
                    $(".subscribe ul li:nth-of-type(1)").show();
                    $(".subscribe ul li:nth-of-type(2)").show();
                }
                return false;
            });
        });
        
         // 타이핑 효과
         $(function(){
            
            $(".typing .typing-wrapper .typing-text").hide();
            $(".typing .teabox_container").hide();
        
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
        
            if(scroll >= 6200){
                $(".typing .typing-wrapper .typing-text").show();
                $(".typing .typing-wrapper").addClass("add_motion");
                setTimeout(function(){
                    $(".typing .teabox_container").fadeIn();
                },4500);
                }
            });
        });

            // 푸터 텍스트 모션
            $(function(){
                $(document).scroll(function(){ 
                    const scroll = $(window).scrollTop();
                    console.log(scroll);
    
                if(scroll >= 8151){ 
                    $("footer .banner .txtbox .motion .animate").show();
                }
                else{
                    $("footer .banner .txtbox .motion .animate").hide();
                    }
                return false;
                }); 
            });
    
    }

    else if(window.innerWidth > 0) { // 다바이스 크기가 0이상 일때
        
        $(".wrap header i").click(function(){ 
            $(".wrap header .sub_menu").show();
            $(".wrap header .sub_menu").addClass("open");
            $(".wrap header .sub_menu").removeClass("close");
        });
        $(".wrap header .sub_menu i").click(function(){
            $(".wrap header .sub_menu").fadeOut(1500);
            $(".wrap header .sub_menu").addClass("close");
            $(".wrap header .sub_menu").removeClass("open");
        });
        $(".wrap .bg i").click(function(){ 
            $(".wrap .bg .sub_menu2").show();
            $(".wrap .bg .sub_menu2").addClass("open");
            $(".wrap .bg .sub_menu2").removeClass("close");
        });
        $(".wrap .bg .sub_menu2 i").click(function(){
            $(".wrap .bg .sub_menu2").fadeOut(1000);
            $(".wrap .bg .sub_menu2").addClass("close");
            $(".wrap .bg .sub_menu2").removeClass("open");
        });

        //scroll motion
        $(function(){
            $(document).scroll(function(){
                const scroll = $(window).scrollTop();
                // console.log(scroll);
                if (scroll >= 850) {
                    $(".collection .collection_inner").show();
                }
        
                if (scroll >= 1844) {
                    $(".news ul li:nth-of-type(1)").show();
                    $(".news ul li:nth-of-type(2)").show();
                    $(".news ul li:nth-of-type(3)").show();
                }
            
                if (scroll >= 3542) {
                    $(".map .map_inner .museum img:nth-of-type(2)").show();
                    $(".map .map_inner .museum .museum_txt").show();
                    // setTimeout(function(){
                    //     $(".map .map_inner .museum img:nth-of-type(1)").hide();
                    // },1500);
                }
                if (scroll >= 3942) {
                    // $(".map .map_inner .farm img:nth-of-type(1)").hide();
                    $(".map .map_inner .farm img:nth-of-type(2)").show();
                    $(".map .map_inner .farm .farm_txt").show();
                }
                if (scroll >= 4242) {
                    $(".map .map_inner .garden .garden_txt").show();
                    $(".map .map_inner .garden img:nth-of-type(2)").show();
                    // $(".map .map_inner .garden img:nth-of-type(1)").hide();
                }
                if (scroll >= 4642) {
                    // $(".map .map_inner .innisfree img:nth-of-type(2)").hide();
                    $(".map .map_inner .innisfree img:nth-of-type(1)").show();
                    $(".map .map_inner .innisfree .innisfree_txt").show();
                }
                if (scroll >= 4942) {
                    $(".map .map_inner .tea_stone img:nth-of-type(1)").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt").show();
                    $(".map .map_inner .tea_stone .tea_stone_txt span").show();
                    // setTimeout(function(){
                    //     $(".map .map_inner .tea_stone img:nth-of-type(2)").hide();
                    // },1500);
                }
        
                if (scroll >= 5782) {
                    $(".subscribe ul li:nth-of-type(1)").show();
                    $(".subscribe ul li:nth-of-type(2)").show();
                }
                return false;
            });
        });
        
         // 타이핑 효과
         $(function(){
            
            $(".typing .typing-wrapper .typing-text").hide();
            $(".typing .teabox_container").hide();
        
            $(document).scroll(function(){ 
                const scroll = $(window).scrollTop();
        
            if(scroll >= 6200){
                $(".typing .typing-wrapper .typing-text").show();
                $(".typing .typing-wrapper").addClass("add_motion");
                setTimeout(function(){
                    $(".typing .teabox_container").fadeIn();
                },4500);
                }
            });
        });

            // 푸터 텍스트 모션
            $(function(){
                $(document).scroll(function(){ 
                    const scroll = $(window).scrollTop();
                    console.log(scroll);
    
                if(scroll >= 8151){ 
                    $("footer .banner .txtbox .motion .animate").show();
                }
                else{
                    $("footer .banner .txtbox .motion .animate").hide();
                    }
                return false;
                }); 
            });
    
    }
    
    }).resize();


//teabox scroll
$(function(){
    $(".typing .teabox_container").niceScroll({
        cursorcolor: "grey",
        cursorwidth: 3,
        scrollspeed: 60,
        cursorborderradius: 60,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: true,
        cursorborder: true,
        autohidemode: true,
        boxzoom: true,
        smoothscroll: true,
        zindex: 9999
    });
})


// top button 


$(function(){

    $("footer .top_btn").hide();
    
    $(document).scroll(function() {

        var scrolltop = $(document).scrollTop();
        var height = $(document).height();
        var height_win = $(window).height();
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        $("footer .top_btn").show();}
    else{
        $("footer .top_btn").fadeOut();
    }  
    });
});




