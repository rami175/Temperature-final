function convertTemperatureRange() {
	// clear previous results
	document.getElementById("resultArea").innerHTML = "";
	// asking for range values
	let startValue = Number(prompt("Enter start value"));
	let endValue = Number(prompt("Enter end value"));
	let scale = prompt("Enter C for Celsius or F for Fahrenheit");
	// check for a valid scal and then convert
	if (scale == "c" || scale == "C") {
		convertToF(startValue, endValue);
	} else if (scale == "f" || scale == "F") {
		convertToC(startValue, endValue);
	} else {
		//  invalid scales
		document.getElementById("resultArea").innerHTML =
			"<h2 >Invelid scale please enter C for Celsius or F for Fahrenheit</h2>";
	}
}
function convertToF(x, y) {
	if (x < y) {
		for (let i = x; i <= y; i++) {
			let feh = (i * 9) / 5 + 32;
			document.getElementById(
				"resultArea"
			).innerHTML += `<li>The conversion of ${i}<span>&#176;</span> Celsius is ${feh}<span>&#176;</span> Fehrenheit</li>`;
		}
	} else {
		for (let i = x; i >= y; i--) {
			let feh = (i * 9) / 5 + 32;
			document.getElementById(
				"resultArea"
			).innerHTML += `<li>The conversion of ${i}<span>&#176;</span> Celsius is ${feh}<span>&#176;</span> Fehrenheit</li>`;
		}
	}
}

function convertToC(x, y) {
	if (x < y) {
		for (let i = x; i <= y; i++) {
			let cel = Math.round(((i - 32) * 5) / 9);
			document.getElementById(
				"resultArea"
			).innerHTML += `<li>The conversion of ${i}<span>&#176;</span> Fehrenheit is ${cel}<span>&#176;</span> Celsius </li>`;
		}
	} else {
		for (let i = x; i >= y; i--) {
			let cel = Math.round(((i - 32) * 5) / 9);
			document.getElementById(
				"resultArea"
			).innerHTML += `<li>The conversion of ${i}<span>&#176;</span> Fehrenheit is ${cel}<span>&#176;</span> Celsius</li>`;
		}
	}
}
