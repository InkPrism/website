var main_light = "http:\/\/dotsilver.net\/overall\/css\/main_light.css";
var main_dark = "http:\/\/dotsilver.net\/overall\/css\/main_dark.css";
var theme = document.getElementById("theme");
document.getElementById("chngthm").addEventListener("click",_chngthm);
function _chngthm(){
	if(theme.getAttribute('href').includes("main_light.css")){
		theme.setAttribute('href', main_dark);
	} else {
		theme.setAttribute('href', main_light);
	}
}