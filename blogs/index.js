let lightMode = false

function toggleDarkMode(){
	document.body.classList.toggle("lightMode");
	document.getElementsByTagName("i")[0].classList.toggle("fa-sun");
	document.getElementsByTagName("i")[0].classList.toggle("fa-moon");
	if ( !lightMode ) {
		lightMode = true
	} else {
		lightMode = false
	}
}
