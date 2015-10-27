/**
 * Created by MarcinM on 21-Oct-15.
 */
$(function(){

    var Application = function(){

        function scrollPage(){
            var links = $(".header-nav a, .main-nav a, .last-logo a");

            links.click(function(){
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top
                }, 1000, 'swing');
                return false;
            });
        }


        function stickyMenu() {
            var menuBar = $("#navigation");
            var lastPositionTop = 0;

            $(window).scroll(function(event) {

                if (menuBar.hasClass("sticky") === false &&
                    $(this).scrollTop() > menuBar.offset().top) {

                    lastPositionTop = menuBar.offset().top;
                    menuBar.addClass("sticky");
                    menuBar.css("opacity", ".5");
                }

                if (menuBar.hasClass("sticky") &&
                    $(this).scrollTop() < lastPositionTop) {

                    menuBar.removeClass("sticky");
                    menuBar.css("opacity", "1");
                }
            });
        }

        //function clickAndSlide() {
        //    var arrowRight = $(".arrow-right");
        //    var arrowLeft = $(".arrow-left");
        //    var slidedItems = $(".team-member");
        //    var highlightedItem = 1;
        //    var i = 1;
        //
        //    slidedItems.css("opacity", ".3");
        //    $(".team-content > div:nth-child(2)").css("opacity", "1");
        //
        //    arrowRight.click(function(){
        //        //highlightedItem++;
        //        //
        //        //if(highlightedItem >= slidedItems.length){
        //        //            highlightedItem = 0;
        //        //        }
        //        //
        //        //        images.eq(visibleImage).show();
        //        i++;
        //        slidedItems.eq(i).css("order", "3");
        //        slidedItems.eq(i+1).css("order", "1");
        //        slidedItems.eq(i-1).css("order", "2");
        //    });
        //
        //    arrowLeft.click(function(){
        //        slidedItems.eq(1).css("order", "1");
        //        slidedItems.eq(2).css("order", "2");
        //        slidedItems.eq(0).css("order", "3");
        //    });
        //
        //}


        //var images = $(".team-content > div");
        //var visibleImage = 0;
        //images.eq(visibleImage).show();
        //
        //
        //images.click(function(event){
        //    images.eq(visibleImage).css("opacity", ".5"));
        //    if(event.offsetX < $(this).width()/2){
        //        visibleImage--;
        //    }
        //    else {
        //        visibleImage++;
        //    }
        //
        //    if(visibleImage >= images.length){
        //        visibleImage = 0;
        //    }
        //
        //    if(visibleImage < 0) {
        //        visibleImage = images.length-1;
        //    }
        //
        //    images.eq(visibleImage).show();
        //
        //});


        return {
            scrollPage: scrollPage,
            stickyMenu: stickyMenu,
            //clickAndSlide: clickAndSlide
        }
    };

    var app = new Application();
        app.scrollPage();
        app.stickyMenu();
        //app.clickAndSlide();



    //the end of DOM LOADED function
});