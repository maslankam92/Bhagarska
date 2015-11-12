/**
 * Created by MarcinM on 21-Oct-15.
 */
$(function(){

    /** main module function
     * which contain all functions on the page.
     * Make functions more visible and organized **/

    var Application = function(){

        /** scrollPage() makes scrolling on the page nice and smooth once anchors are clicked **/
        function scrollPage(){
            var links = $(".header-nav a, .main-nav a, .last-logo a, .hamburger-menu a");

            links.click(function(){
                $("html, body").animate({                               //if links are clicked, animate (1s) html and body
                    scrollTop: $($(this).attr("href")).offset().top     //to the top of the clicked anchor's href
                }, 1000, 'swing');
                return false;
            });
        }

        /** stickyMenu() set position fixed (top)
         *  on the menu bar, while page is scrolled
         *  under the initial position of menu bar **/

        function stickyMenu() {
            var menuBar = $("#navigation");
            var lastPositionTop = 0;

            $(window).scroll(function(event) {

                if (menuBar.hasClass("sticky") === false &&         //if #naviagtion has not class "sticky" AND
                    $(this).scrollTop() > menuBar.offset().top) {   //if page is scrolled below original position of navigation bar

                    lastPositionTop = menuBar.offset().top;         //keep original top position of nav bar in this variable
                    menuBar.addClass("sticky");                     //add .sticky to nav bar
                    menuBar.css("opacity", ".5");                   //set opacity of nav bar to .5
                }                                                   //now navigation bar is attached to the top of the viewport until next IF statement is true

                if (menuBar.hasClass("sticky") &&                   //if #navigation has class "sticky" AND
                    $(this).scrollTop() < lastPositionTop) {        //if page is scrolled above original position of nav bar

                    menuBar.removeClass("sticky");                  //remove .sticky from nav bar
                    menuBar.css("opacity", "1");                    //set opacity of nav bar to 1
                }                                                   //now navigation is not fixed any longer
            });
        }

        /** clickHamburgerBtn() changes
         * look of clicked button and
         * makes navigation list appeared **/
        function clickHamburgerBtn(){
            var hamburgerBtn = $(".c-hamburger");

            hamburgerBtn.on("click", function(e){
                e.preventDefault();
                //if clicked btn has class "is-active", it removes this class; otherwise it adds this class
                //it makes hamburger icon clickable (hamburger changes its look to X) and navigation list appears
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                $(".hamburger-menu").toggle();
            });

            $(".hamburger-menu a").on("click", function(e){
                e.preventDefault();
                //once menu list is appeared and user will click on link, it hides the list and changes the look of hamburger btn to its initial look
                hamburgerBtn.hasClass("is-active") === true ? hamburgerBtn.removeClass("is-active") : hamburgerBtn.addClass("is-active");
                $(".hamburger-menu").toggle();
            });
        }

        /** learnMore() is triggered once
         * the button is clicked.
         * Next the alert will show up.  **/
        function learnMore (){
            var learnMoreBtn = $(".btn-learnMore");

            learnMoreBtn.on("click", function(){
                alert("Probably the new page or subpage is triggered here!");
                return false
            });
        }


        /** clickAndChange() rotates team members
         * and their skillset on right or left,
         * depends which arrow was clicked **/
        function clickAndChange() {
            var arrowRight = $(".arrow-right");
            var arrowLeft = $(".arrow-left");

            $(".team-content > div").css("opacity", ".2");                                                              //it makes that just second team member is fully visible
            $(".team-content > div:nth-child(2)").css("opacity", "1");

            $(".skills-container > div").hide();                                                                        //it makes that just second skillset of team member is visible
            $(".skills-container > div:nth-child(2)").show();

            arrowRight.click(function(){
                var firstTeamMember = $(".team-content > div:first-child");
                firstTeamMember.parent().append(firstTeamMember);                                                       //takes first team member and appends it to the end of list
                firstTeamMember.prev().css("opacity", "1").css("transform", "scale(1)");                                //makes second team member (on the middle) fully visible
                firstTeamMember.prev().prev().css("opacity", ".2").css("transform", "scale(.8)");                       //makes first team member (on the left hand side) zoomed out

                var firstTeamMemberSkillset = $(".skills-container > div:first-child");
                firstTeamMemberSkillset.parent().append(firstTeamMemberSkillset);                                       //takes first team member's skillset and appends it to the end of list
                firstTeamMemberSkillset.prev().prev().hide();                                                           //hides first skillset
                firstTeamMemberSkillset.hide();                                                                         //hides last skillset
                firstTeamMemberSkillset.prev().show();                                                                  //second skillset (on the middle) is visible
            });

            arrowLeft.click(function(){
               var lastTeamMember = $(".team-content > div:last-child");
                lastTeamMember.parent().prepend(lastTeamMember);                                                        //takes last team member and prepends it to the beginning of list
                lastTeamMember.next().css("opacity", "1").css("transform", "scale(1)");                                 //makes second team member (on the middle) fully visible
                lastTeamMember.next().next().css("opacity", ".2").css("transform", "scale(.8)");                        //makes last team member (on the right hand side) zoomed out

                var lastTeamMemberSkillset = $(".skills-container > div:last-child");
                lastTeamMemberSkillset.parent().prepend(lastTeamMemberSkillset);                                        //takes last team member's skillset and prepends it to beginning of list
                lastTeamMemberSkillset.next().next().hide();                                                            //hides last skillset
                lastTeamMemberSkillset.hide();                                                                          //hides first skillset
                lastTeamMemberSkillset.next().show();                                                                   //second skillset (on the middle) is visible
            });
        }

        /** intervalSlider() is sliding in and
         *  out 1 of 4 containers every 3 seconds **/
        function intervalSlider(){
            var currentPosition = 0;
            var slideWidth = 700;
            var slides = $('.testimonials-slide');
            var numberOfSlides = slides.length;
            var slideShowInterval;
            var speed = 3000;

            slideShowInterval = setInterval(changePosition, speed);
            slides.wrapAll('<div id="slidesHolder"></div>');                        //wraps all slides into one container
            slides.css({ 'float' : 'left' });                                       //set float left on each slide
            $('#slidesHolder').css('width', slideWidth * numberOfSlides);           //calculates how long should be slides' container width

            function changePosition() {
                if(currentPosition == numberOfSlides - 1) {                         //after last slide, function comes to the beginning and makes slider start over again
                    currentPosition = 0;
                } else {
                    currentPosition++;
                }
                moveSlide();
            }

            function moveSlide() {
                $('#slidesHolder')                                                  //functions animates slides by setting left margin
                    .animate({'marginLeft' : slideWidth*(-currentPosition)});
            }
        }

        /** lightbox() starts working while image is clicked.
         *  This image is zoomed in
         *  and the layer underneath is black.
         *  Once user clicks on image again or on black overlay,
         *  lightbox is switched off. **/
        function lightbox(){
            var imageClick = $(".gallery");
            imageClick.on('click', 'img', function(event){
                event.preventDefault();
                var imageSrc = $(this).attr("src");


                if($("#lightbox").length > 0) {                                             //this part of code runs when lightbox has been already created on the website(when in gallery image was clicked al least once)
                    $("#content").html('<img src="' + imageSrc + '" />');                   //this method gets img's source. Then displays this image zoomed in.
                    $("#lightbox").fadeIn(200);
                }
                else {
                    var lightbox =                                                          //this part of code runs when image in gallery is clicked for the first time after reloading the page
                        '<div id="lightbox">' +                                             //it creates div which stretches all over the website and puts the clicked image in the middle
                        '<p>Click to close</p>' +
                        '<div id="content">' + //insert clicked link's href into img src
                        '<img src="' + imageSrc +'" />' +
                        '</div>' +
                        '</div>';
                    $(lightbox).hide().appendTo("body").fadeIn(200);                        //it has to be hidden first to make fadeIn function work
                }
                $("#lightbox").click(function(){                                            //when black area is clicked, lightbox will turn off
                    $(this).fadeOut(200);
                });
            });
        }

        /** filterImages() is triggered when one of the
         *  filter buttons are clicked. Each image belongs
         *  to some category, so when ICON
         *  filter button is clicked, just images with ICON
         *  category will be displayed, and so on...   **/
        function filterImages() {
            var filterBtns = $(".filter-buttons");
            var allImages = $(".gallery figure");

            filterBtns.on("click", ".btn-filter", function(event){
                event.preventDefault();

                // this line is major for appropriate running of this function. when Watch More button is clicked, allImages variable updates all new loaded figures
                allImages = $(".gallery figure");

                if($(this).hasClass("activeBtn") === false) {                   //if clicked button has not activeBtn class, the code runs
                    $(this).addClass("activeBtn");                              //clicked button is highlighted
                    $(this).siblings().removeClass("activeBtn");                //all others buttons are not active
                    var dataFilterName = $(this).data("filter");                //this variable keeps value of data-filter attribute of clicked button
                    allImages.hide();                                           //before images from clicked category will be shown, all images must be hidden
                    var filteredImages = allImages.filter(dataFilterName);      //all images are filtered by data-filter value of clicked filter button
                    filteredImages.fadeIn(500);                                 //filtered images fade in (.5s)
                }
            });
        }

        /** addMoreImages() is triggered when
         *  Watch More button is clicked.
         *  In this case first six images are
         *  cloned and appended to the end of the gallery. **/
        function addMoreImages() {
            var addMoreBtn = $(".btn-watchMore");
            var moreImages = $(".gallery figure");
            addMoreBtn.click(function(event){
                event.preventDefault();
                var createdImages = moreImages.clone();
                createdImages.hide().appendTo(".gallery").slideDown(300);
            });
        }


        /** formValidator() checks if information
         * in input fields are filled out correctly.
         * If not, user is given warning in tooltip. **/
        function formValidator(){

            function checkName(){
                $('.contact-form input[name="yourName"]').on("input", function() {
                    var inputRealTime = this.value;                                     //gets value every single keyboard press
                    if(inputRealTime.length < 3
                        && inputRealTime.length > 0) {
                        $(".tooltip").fadeIn();                                         //tooltip appears when name is shorter than 3 letters
                    }
                    else {
                        $(".tooltip").fadeOut();
                    }
                });
            }

            function checkEmail(){
                $('.contact-form input[name="yourEmail"]').on("input", function() {
                    var inputRealTime = this.value;
                    if((inputRealTime.indexOf("@") < 0                                  //tooltip appears when email has no "@" character (at)
                        || inputRealTime.indexOf(" ") != -1                             //tooltip appears when email has " " character (space)
                        || inputRealTime.indexOf(".") < 0)                              //tooltip appears when email has no "." character (dot)
                        && inputRealTime.length > 0) {
                        $(".tooltipTwo").fadeIn();
                    }
                    else {
                        $(".tooltipTwo").fadeOut();
                    }
                });
            }

            function checkText(){
                $('.contact-form textarea').on("input", function() {
                    var inputRealTime = this.value;
                    if(inputRealTime.length < 10                                       //tooltip appears when text is shorter than 10 characters
                    && inputRealTime.length > 0) {
                        $(".tooltipThree").fadeIn();
                    }
                    else {
                        $(".tooltipThree").fadeOut();
                    }
                });
            }
            checkName();
            checkEmail();
            checkText();
        }

        /** sendEmail() is triggered once
         * the button is clicked.
         * Next the alert will show up.  **/
        function sendEmail (){
            var sendMailBtn = $(".btn-sendEmail");

            sendMailBtn.on("click", function(){
               alert("Wait a minute... This job belongs to backend guy!");
                return false
            });
        }


        return {
            scrollPage: scrollPage,
            stickyMenu: stickyMenu,
            clickAndChange: clickAndChange,
            intervalSlider: intervalSlider,
            lightbox: lightbox,
            filterImages: filterImages,
            addMoreImages: addMoreImages,
            formValidator: formValidator,
            sendEmail: sendEmail,
            learnMore: learnMore,
            clickHamburgerBtn: clickHamburgerBtn
        }
    };

    var app = new Application();
        app.scrollPage();
        app.stickyMenu();
        app.clickAndChange();
        app.intervalSlider();
        app.lightbox();
        app.filterImages();
        app.addMoreImages();
        app.formValidator();
        app.sendEmail();
        app.learnMore();
        app.clickHamburgerBtn();


    //the end of DOM LOADED function
});