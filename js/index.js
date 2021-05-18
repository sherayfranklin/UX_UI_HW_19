
console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $(".aboutMeButton").hover(function(){
      $(this).css("background-color", "#F2CBBD");
      }, function(){
      $(this).css("background-color", "#F2DAD1");
    });
});

$(document).ready(function(){
    $("button").hover(function(){
      $(this).css("background-color", "#F2CBBD");
      }, function(){
      $(this).css("background-color", "#F2DAD1");
    });
});

$(document).ready(function() {
    var scrollLink = $('.nav-linkscroll');

    // Smooth Scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top 
        }, 1000);
    })

    //Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
    })



})