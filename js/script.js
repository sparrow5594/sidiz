$(document).ready(function(){

    let about = $('.about');
    let about_menu = $('.about-menu');

    $.each(about, function(index){

        $(this).mouseenter(function(){
            about_menu.eq(index).show();
        });

        $(this).mouseleave(function(){
            about_menu.eq(index).hide();
        });
    });

    let products = $('.products');
    let products_menu = $('.products-menu');

    $.each(products, function(index){

        $(this).mouseenter(function(){
            products_menu.eq(index).show();
        });

        $(this).mouseleave(function(){
            products_menu.eq(index).hide();
        });
    });

    let support = $('.support');
    let support_menu = $('.support-menu');

    $.each(support, function(index){

        $(this).mouseenter(function(){
            support_menu.eq(index).show();
        });

        $(this).mouseleave(function(){
            support_menu.eq(index).hide();
        });
    });

    var swiper = new Swiper(".swiper", {
        loop : true ,
        speed: 1000,
        
        autoplay: {
            delay: 5000,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });

    let modal = $('.modal');
    let modal_close = $('.modal-close');

    $(document).click(function(e){
        if(modal.has(e.target).length == 0){
            modal.hide();
        }
    })

    modal_close.click(function(){
        modal.hide();
    });
});