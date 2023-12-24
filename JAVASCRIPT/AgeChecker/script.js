let isAgeValid = false;
let prompString = "";

while(!isAgeValid){
	let age = prompt(prompString + "Enter your True AGE");
	prompString = "";
	if(age < 0){
		prompString = "AIN'T FOOLING NOBODY NIGGA\n";
	}
	else if(age < 18){
		prompString = "NIGG YOU UNDERAGE!\n";
	}
	else{
		prompt("THANK THE LORD! ENJOY");
		isAgeValid = true;
	}
}
