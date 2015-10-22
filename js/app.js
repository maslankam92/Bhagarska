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
    app.scrollPage();


    //the end of DOM LOADED function
});