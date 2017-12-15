// JavaScript Document

//Change Display
function d(val) {
	document.getElementById("d").value=val;
}

//Type numbers and operators
function v(val) {
	document.getElementById("d").value+=val;
}

//Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));	
	}
	catch(err) {
		d("Error");	
	}
}
//Factorial the Value
function q(val) {
	if(val === 1 || val === 0) {
		return 	1;
	}
	else {
		return val * q(val-1);	
	}
}
function q_button() {
		e();
		d(q(document.getElementById("d").value));	
}