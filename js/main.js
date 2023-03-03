$(function(){

    /* menu scroll */
    $(window).on('scroll',function(){
        if($(window).scrollTop() >= 400) $('.nav').addClass('active');
        else $('.nav').removeClass('active')
    });

    /* mobile menu */
    $('.menu_r').click(function(){
        $('.menu_bg').fadeIn();
        $('.menu_con').animate({right:0});
        $('.menu_con').css({
            "top":(($(window).height() - $(".menu_con").outerHeight())/2 + $(window).scrollTop()) + "px"
        });
        $("body").css("overflow", "hidden");
        $("html").css("overflow", "hidden");
    });

    $('.menu_bg').click(function(){
        $('.menu_bg').fadeOut();
        $('.menu_con').animate({right:'-60%'});
        $("body").css("overflow", "auto");
        $("html").css("overflow", "auto");
    });

    /* section position */
    $('.m1').click(function(){
        var offset = $('#company').offset()
        $('html').animate({scrollTop : offset.top - 80}, 200);
        $('.menu_bg').fadeOut();
        $('.menu_con').animate({right:'-60%'});
        $("body").css("overflow", "auto");
        $("html").css("overflow", "auto");
        
    });
    $('.m2').click(function(){
        var offset = $('#ceo').offset()
        $('html').animate({scrollTop : offset.top - 80}, 200);
        $('.menu_bg').fadeOut();
        $('.menu_con').animate({right:'-60%'});
        $("body").css("overflow", "auto");
        $("html").css("overflow", "auto");
    });
    $('.m3').click(function(){
        var offset = $('#history').offset()
        $('html').animate({scrollTop : offset.top - 80}, 200);
        $('.menu_bg').fadeOut();
        $('.menu_con').animate({right:'-60%'});
        $("body").css("overflow", "auto");
        $("html").css("overflow", "auto");
    });
    $('.m4').click(function(){
        var offset = $('#factory').offset()
        $('html').animate({scrollTop : offset.top - 80}, 200);
        $('.menu_bg').fadeOut();
        $('.menu_con').animate({right:'-60%'});
        $("body").css("overflow", "auto");
        $("html").css("overflow", "auto");
    });
    $('.m5').click(function(){
        var offset = $('#vision').offset()
        $('html').animate({scrollTop : offset.top - 80}, 200);
        $('.menu_bg').fadeOut();
        $('.menu_con').animate({right:'-60%'});
        $("body").css("overflow", "auto");
        $("html").css("overflow", "auto");
    });
    $('.m6').click(function(){
        var offset = $('#contact').offset()
        $('html').animate({scrollTop : offset.top - 80}, 200);
        $('.menu_bg').fadeOut();
        $('.menu_con').animate({right:'-60%'});
        $("body").css("overflow", "auto");
        $("html").css("overflow", "auto");
    });

    /* factory */
    $('.fac_com').hide();
    $('#tab1').show();

    $('.fac_ul li').each(function(){
        $(this).click(function(){
            $('.fac_ul li').removeClass('on');
            $(this).addClass('on');
            $('.fac_com').hide();
            var con = $(this).attr('rel');
            $('#' + con).show();
        });
    });

    /* modal */
    $('.product_btn button').each(function(){
        var prd = $(this).attr('id');
        $(this).click(function(event){
            $("#" + prd + "_view").css({
                "top":(($(window).height() - $("#" + prd + "_view").outerHeight())/2 + $(window).scrollTop()) + "px",
                "left":(($(window).width() - $("#" + prd + "_view").outerWidth())/2 + $(window).scrollLeft()) + "px"
            });

            $(".modal_bg").css("display","block");
            $("#" + prd + "_view").css("display","block");
            $("body").css("overflow", "hidden");
            $("html").css("overflow", "hidden");
        });

        $(".modal_bg").click(function(){
            $(".modal_bg").css("display","none");
            $("#" + prd + "_view").css("display","none");
            $("body").css("overflow", "auto");
            $("html").css("overflow", "auto");
        });

        $(".btnClose").click(function(){
            $(".modal_bg").css("display","none");
            $('.menu_bg').fadeOut();
            $('.menu_con').animate({right:'-60%'});
            $("#" + prd + "_view").css("display","none");
            $("body").css("overflow", "auto");
            $("html").css("overflow", "auto");
        });
    });

});