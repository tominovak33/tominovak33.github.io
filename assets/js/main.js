// Load email address
var emailLink = document.getElementById("emailLink");
emailLink.href = "mailto:tomi@tomi33.co.uk";
emailLink.innerHTML = 'tomi@tomi33.co.uk';

var aboutMeLink = document.getElementById("aboutMeLink");
aboutMeLink.addEventListener("click", function(){
    tomiScroll("about", 800);
});

function tomiScroll(targetID, scrollDuration) {
    var page = $('html,body');
    var element_to_scroll_to = $("#"+targetID);
    page.animate({
        scrollTop: element_to_scroll_to.offset().top
    }, scrollDuration);
}


