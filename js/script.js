$(function(){
    // 헤더고정투명도변화
    let Hheight = $('#header').outerHeight(true);
    let Header = $('#header');

    $(window).scroll(function(){
        let Wheight = $(document).scrollTop();
        if ( Wheight > Hheight){
            Header.addClass('white');
        }else{
            Header.removeClass('white');
        };
    })
    // 메뉴호버
    $('.depth1>li>a').hover(function(){
        $(this).next('ul').css({display: 'block'});
        Header.addClass('white');
    },function(){
        $(this).next('ul').css({display: 'none'});
        Header.removeClass('white');
    })
    // sm-top 닫기
    $('.sm-close').click(function(){
        $('.small-menu').slideUp(300);
        $('.hr-menu').removeClass('close');
    })

    // sm-tab
    $('.sm-tab-content > div').hide();
    $('.sm-tab-nav a').click(function () {
      $('.sm-tab-content > div').hide().filter(this.hash).fadeIn(0);
      $('.sm-tab-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();

    // sm-tab-content
    // sm-depth1
    $('.sm-depth1>li>a').click(function(){
        if($('.smd1-bg').hasClass('active')){
            $(this).removeClass('active');
            $(this).next('ul').slideUp(200);
        }else{
            $(this).addClass('active');
            $(this).next('ul').slideDown(200);
        };
    })
    // sm2-depth1
    $('.sm2-depth1>li>a').click(function(){
        if($('.sm2d1-bg').hasClass('active')){
            $(this).removeClass('active');
            $(this).next('ul').slideUp(200);
        }else{
            $(this).addClass('active');
            $(this).next('ul').slideDown(200);
        };
    })
    // swiper
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    // 반응형
    $(window).resize(function(){ 
        if (window.innerWidth > 800) {
        // 800이상일때
            // 햄버거메뉴 클릭
            $('.hr-menu').click(function(){
                if($(this).hasClass('close') === true){
                    $(this).removeClass('close');
                    $('#header').removeClass('white');
                    $('.full-menu').stop().slideUp(300);
                }else{
                    $(this).addClass('close');
                    $('#header').addClass('white');
                    $('.full-menu').stop().slideDown(300);
                };
            })

        } else {
        // 800이하일때
            // 햄버거메뉴 클릭
            $('.hr-menu').click(function(){
                if($(this).hasClass('close') === true){
                    $(this).removeClass('close');
                    $('.small-menu').stop().slideUp(300);
                }else{
                    $(this).addClass('close');
                    $('.small-menu').stop().slideDown(300);
                };
            })

        }
    }).resize();


})