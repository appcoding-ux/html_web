$(document).ready(function(){
    $(".a").click(function(){
        $("#flex-nav_wrap").slideToggle();
    });
    $(window).resize(function(){
        if(window.innerWidth>=1025){
            $("#flex-nav_wrap").show();
        }
    });
    $(window).resize(function(){
        if(window.innerWidth<=1024){
            $("#flex-nav_wrap").hide();
        }
    });
});