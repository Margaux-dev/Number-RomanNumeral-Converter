let numNumbers = document.querySelector("#num");
let romanNumbers = document.querySelector("#roman");
let convertButton = document.querySelector("#convert");
let clearButton = document.querySelector("#clear");


// CONVERT NUMERAL TO ROMAN
function numToRoman (num) {
	let numValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let romanValues = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	let result = "";
	for (let i = 0; i < numValues.length; i++) {
		while (numValues[i] <= num) {
			result += romanValues[i];
			num -= numValues[i];
		}
	}
	
	romanNumbers.value = result;
	return romanNumbers.value;
}


// CONVERT ROMAN TO NUMERAL
function romanToNumeral (romNum) {
	let romanValues = ["I", "V", "X", "L", "C", "D", "M"];
	let numValues = {I: 1, V: 5, X: 10, L:50, C: 100, D: 500, M: 1000};
	let result = 0;
	let prevIndex = 0;
	let roman = romNum.toUpperCase();
	
	for (let i = roman.length -1; i >= 0; i--) {
		if(romanValues.indexOf(roman[i]) >= prevIndex) {
			result += numValues[roman[i]];
		} else {
			result -= numValues[roman[i]];
		}
		prevIndex = romanValues.indexOf(roman[i]);
	}
	numNumbers.value = result;
	return numNumbers.value;
}


// CONVERT
function convert (e) {
	e.preventDefault();
	
	if (numNumbers.value !== "") {
		numToRoman(numNumbers.value);
	} else if (romanNumbers.value !== "") {
		let regex = /[ivxlcdm]/gi;
		if (regex.test(romanNumbers.value) == true) {
		romanToNumeral(romanNumbers.value);
		} else {
			document.querySelector("#error").style.display = "inline";
		}
	}
	numNumbers.disabled = true;
	romanNumbers.disabled = true;
}



// CLEAR THE TEXTAREAS
function clear (e) {
	e.preventDefault();
	numNumbers.value = "";
	romanNumbers.value = "";
	numNumbers.disabled = false;
	romanNumbers.disabled = false;
	document.querySelector("#error").style.display = "none";
}
	

convertButton.addEventListener("click", convert);
clearButton.addEventListener("click", clear);