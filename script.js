window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.bodyscrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('header').style.background = "rgba(0, 0, 0, 0.699)";
    } else {
        document.getElementById('header').style.background = "none";
    }
}
// -----function for map
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}