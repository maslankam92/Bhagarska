/**
 * Created by MarcinM on 21-Oct-15.
 */
$(function(){

    var Application = function(){
        function init(){
            console.log("init");
        }

        function scrollPage(){
            console.log("scrolling");
        }

        return {
            init:init
        }
    };

    var app = new Application();
    app.init();


    var links = $(".header-nav a, .main-nav a, .last-logo a");
    console.log(links);

    links.click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000, 'swing');
        return false;
    });







    //the end of DOM LOADED function
});