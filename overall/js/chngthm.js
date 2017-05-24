var main_light = "<link id=\"theme\" rel=\"stylesheet\" href=\"http:\/\/dotsilver.net\/overall\/css\/main_light.css\">";
var main_dark = "<link id=\"theme\" rel=\"stylesheet\" href=\"http:\/\/dotsilver.net\/overall\/css\/main_dark.css\">";
document.getElementById("chngthm").addEventListener("click",_chngthm);
function _chngthm(){
	if(document.getElementById("theme").outerHTML == main_light){
		document.getElementById("theme").outerHTML = main_dark
	} else {
		document.getElementById("theme").outerHTML = main_light
	}
}