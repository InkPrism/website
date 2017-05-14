document.getElementById("chngthm").addEventListener("click",_chngthm);
function _chngthm(){
	if(document.getElementById("theme").outerHTML == "<link id=\"theme\" rel=\"stylesheet\" href=\"http:\/\/dotsilver.net\/overall\/css\/main_light.css\">"){
		document.getElementById("theme").outerHTML = "<link id=\"theme\" rel=\"stylesheet\" href=\"http:\/\/dotsilver.net\/overall\/css\/main_dark.css\">"
	} else {
		document.getElementById("theme").outerHTML = "<link id=\"theme\" rel=\"stylesheet\" href=\"http:\/\/dotsilver.net\/overall\/css\/main_light.css\">"
	}
}