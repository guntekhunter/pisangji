window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.bodyscrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('header').style.background = "#051116cb ";
    } else {
        document.getElementById('header').style.background = "none";
    }
}