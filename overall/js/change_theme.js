function _theme_dtct(){
	var linkElement = document.getElementById("theme");
	var ftheme = linkElement.getAttribute("src");
	if(ftheme == "http://dotsilver.net/overall/css/main_dark.css"){
		curr_theme = docoument.getElementById("curr_theme").innerHTML = "Dark Theme";
	} else {
		curr_theme = docoument.getElementById("curr_theme").innerHTML = "Light Theme";
	}
	
}

function _change_theme(){
	var linkElement = document.getElementById("theme");
	var ftheme = linkElement.getAttribute("src");
	if(ftheme == "http://dotsilver.net/overall/css/main_dark.css"){
		linkElement.setAttribute("src", "http://dotsilver.net/overall/css/main_light.css");
	} else {
		linkElement.setAttribute("src", "http://dotsilver.net/overall/css/main_dark.css");
	}
	_theme_dtct();
}