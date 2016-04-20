// Load email address
var emailLink = document.getElementById("emailLink");
emailLink.href = "mailto:tomi@tomi33.co.uk";
emailLink.innerHTML = 'tomi@tomi33.co.uk';

var otherContentButton = document.getElementById("otherContentButton");
otherContentButton.addEventListener("click", function(){
    tomiScroll("otherContent", 800);
});

var projectButton = document.getElementById("projectButton");
projectButton.addEventListener("click", function(){
    tomiScroll("recentProjects", 800);
});

var backToTopButton = document.getElementById("backToTop");
backToTopButton.addEventListener("click", function(){
    tomiScroll("page", 800);
});

backToTop
function tomiScroll(targetID, scrollDuration) {
    var page = $('html,body');
    var element_to_scroll_to = $("#"+targetID);
    page.animate({
        scrollTop: element_to_scroll_to.offset().top
    }, scrollDuration);
}


