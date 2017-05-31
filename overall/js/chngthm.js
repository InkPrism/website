var main_light = "http:\/\/dotsilver.net\/overall\/css\/main_light.css";
var main_dark = "http:\/\/dotsilver.net\/overall\/css\/main_dark.css";
document.getElementById("chngthm").addEventListener("click",_chngthm);
function _chngthm(){
	if(document.getElementById("theme").getAttribute('href') == main_light){
		document.getElementById("theme").setAttribute('href', main_dark)
	} else {
		document.getElementById("theme").setAttribute('href', main_light)
	}
}