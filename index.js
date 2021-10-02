let isToggled = false;

let sunSVG = '<path d="M39.6173 10.4918C40.6136 12.9901 38.8304 15.7204 36.1423 15.8123C33.5005 15.9026 31.5422 13.3847 32.28 10.8464C33.3116 7.29776 38.2483 7.05918 39.6173 10.4918Z" fill="white" stroke="white"/>\n \n<path d="M57.7855 19.1678C56.7594 21.654 53.5779 22.3698 51.5858 20.5627C49.6279 18.7867 49.9777 15.6161 52.2757 14.3096C55.4883 12.4831 59.1955 15.7518 57.7855 19.1678Z" fill="white" stroke="white"/> \n<path d="M20.169 16.8016C22.6346 17.8763 23.2878 21.0713 21.4419 23.0275C19.6277 24.9501 16.4646 24.5381 15.2035 22.2149C13.4404 18.9671 16.7813 15.3248 20.169 16.8016Z" fill="white" stroke="white"/> \n<path d="M16.3999 54.3987C17.3575 51.9416 20.4631 51.1794 22.4494 52.914C24.4011 54.6184 24.1161 57.7324 21.8874 59.0542C18.7752 60.9 15.0859 57.7701 16.3999 54.3987Z" fill="white" stroke="white"/> \n<path d="M35.169 63.727C34.1652 61.2885 35.8855 58.5929 38.52 58.4762C41.1086 58.3615 43.0525 60.8109 42.353 63.3059C41.3761 66.79 36.5463 67.0731 35.169 63.727Z" fill="white" stroke="white"/> \n<path d="M54.2844 57.6065C51.8834 56.5092 51.2964 53.3633 53.14 51.474C54.9523 49.6168 58.05 50.0724 59.2508 52.3727C60.9313 55.592 57.5873 59.116 54.2844 57.6065Z" fill="white" stroke="white"/> \n<path d="M10.5353 34.8125C13.0104 33.7599 15.7803 35.4809 15.933 38.1662C16.0831 40.8053 13.6102 42.8201 11.0558 42.1399C7.48476 41.1889 7.13451 36.2588 10.5353 34.8125Z" fill="white" stroke="white"/> \n<path d="M63.3224 32.0209C60.7454 31.2322 58.1618 33.2254 58.2707 35.9181C58.3778 38.5695 61.0383 40.3465 63.5285 39.4301C67.044 38.1365 66.9044 33.1171 63.3224 32.0209Z" fill="white" stroke="white"/> \n<ellipse cx="37.1988" cy="37.1987" rx="17.6695" ry="17.9485" fill="white"/>'
let moonSVG = '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1312 1.60271C20.2001 -0.0786043 22.7942 2.27197 22.5425 4.92594C21.9428 11.2479 23.9678 17.7167 28.6673 22.5569C33.3664 27.3968 39.7722 29.6118 46.1087 29.1992C48.769 29.0259 51.0419 31.6884 49.3002 33.7067C48.844 34.2353 48.3604 34.7486 47.8495 35.2446C38.7091 44.1193 24.2927 44.0973 15.6497 35.1954C7.00659 26.2935 7.40979 11.8828 16.5502 3.0081C17.0614 2.51181 17.589 2.04335 18.1312 1.60271Z" fill="black"/>'

let icon_of_hello = document.querySelector(".svgTO")

function changeAttributes(foreground , background, viewBoxPosition, svgIcon){
	icon_of_hello.innerHTML = svgIcon;
	icon_of_hello.setAttribute("viewBox", viewBoxPosition);
	document.body.setAttribute("bgcolor", background);
	document.querySelector("h1").style.color=foreground;
	document.querySelector(".name").style.color=foreground;
	document.querySelector(".blog").style.color=foreground;
	document.querySelector("a").style.color = foreground;
	document.querySelector("a").style.textDecoration = "none";
}

function toggleDarkMode(){
	if(isToggled){
		changeAttributes("#ffffff", "#1D1E20", "0 0 75 74", sunSVG);
		document.querySelector("button").classList.remove("DarkMode");
		isToggled = false;
	}
	else{
		changeAttributes("#000000", "#ffffff", "0 0 80 40", moonSVG);
		document.querySelector("button").classList.add("DarkMode");
		isToggled = true;
	}
}
