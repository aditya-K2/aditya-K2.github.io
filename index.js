function darkMode(){
	document.getElementsByClassName("github")[0].setAttribute("src", "./assets/github.svg")
	document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitter.svg")
	document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedin.svg")
}

function lightMode(){
	document.getElementsByClassName("github")[0].setAttribute("src", "./assets/githubD.svg")
	document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitterD.svg")
	document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedinD.svg")
}

function toggleClass(){
	document.getElementsByTagName("i")[0].classList.toggle("fa-sun");
	document.getElementsByTagName("i")[0].classList.toggle("fa-moon");
	document.body.classList.toggle("darkMode")
    document.getElementsByClassName("mainDiv")[0].classList.toggle("darkModeCard")
}

if ( localStorage.getItem("darkMode") === "true" ) {
	toggleClass()
	darkMode()
}

function toggleDarkMode(){
	toggleClass()
	if (localStorage.getItem("darkMode") === "false"){
		darkMode()
		localStorage.setItem("darkMode", "true")
		console.log(localStorage.getItem("darkMode"))
	} else {
		lightMode()
		localStorage.setItem("darkMode", "false")
		console.log(localStorage.getItem("darkMode"))
	}
}
