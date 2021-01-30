window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.bodyscrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('header').style.background = "rgba(0, 0, 0, 0.699)";
    } else {
        document.getElementById('header').style.background = "none";
    }
}