var siteURLParts = window.location.pathname.split('/');
var mainPage = siteURLParts[1];

if (mainPage == "") {
	document.getElementById("home").className += " active";
} else {
	document.getElementById(mainPage).className += " active";
}