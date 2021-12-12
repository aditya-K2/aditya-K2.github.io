let lightMode = false;

function toggleDarkMode(){
	document.body.classList.toggle("lightMode")
	document.getElementsByTagName("i")[0].classList.toggle("fa-sun");
	document.getElementsByTagName("i")[0].classList.toggle("fa-moon");
	if ( !lightMode ){
		document.getElementsByClassName("github")[0].setAttribute("src", "./assets/githubD.png")
		document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitterD.png")
		document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedinD.png")
		lightMode = true
	} else {
		document.getElementsByClassName("github")[0].setAttribute("src", "./assets/github.png")
		document.getElementsByClassName("twitter")[0].setAttribute("src", "./assets/twitter.png")
		document.getElementsByClassName("linkedin")[0].setAttribute("src", "./assets/linkedin.png")
		lightMode = false
	}
}
