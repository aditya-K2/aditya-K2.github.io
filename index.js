let lightMode = false;

function toggleDarkMode(){
	document.body.classList.toggle("lightMode")
	document.getElementsByTagName("i")[0].classList.toggle("fa-sun");
	document.getElementsByTagName("i")[0].classList.toggle("fa-moon");
	if ( !lightMode ){
		document.getElementsByClassName("github")[0].setAttribute("src", "./assets/githubD.svg")
		document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitterD.svg")
		document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedinD.svg")
		lightMode = true
	} else {
		document.getElementsByClassName("github")[0].setAttribute("src", "./assets/github.svg")
		document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitter.png")
		document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedin.svg")
		lightMode = false
	}
}
