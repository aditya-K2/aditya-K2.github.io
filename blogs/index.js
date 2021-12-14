function toggleClass(){
	document.body.classList.toggle("lightMode");
	document.getElementsByTagName("i")[0].classList.toggle("fa-sun");
	document.getElementsByTagName("i")[0].classList.toggle("fa-moon");
}

if ( localStorage.getItem("darkMode") === "true" ) {
	toggleClass()
	darkMode()
}

function toggleDarkMode(){
	toggleClass()
	if (localStorage.getItem("darkMode") === "false"){
		localStorage.setItem("darkMode", "true")
	} else {
		localStorage.setItem("darkMode", "false")
	}
}
