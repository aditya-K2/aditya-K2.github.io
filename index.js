let darkMode = false;

function toggleDarkMode(){
	document.body.classList.toggle("darkMode")
	document.getElementsByTagName("i")[0].classList.toggle("fa-sun");
	document.getElementsByTagName("i")[0].classList.toggle("fa-moon");
	if ( !darkMode ){
		document.getElementsByClassName("github")[0].setAttribute("src", "./assets/github.svg")
		document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitter.svg")
		document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedin.svg")
		darkMode = true
	} else {
		document.getElementsByClassName("github")[0].setAttribute("src", "./assets/githubD.svg")
		document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitterD.svg")
		document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedinD.svg")
		darkMode = false
	}
}
