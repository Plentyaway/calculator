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

//Square the Value
function s(val) {
	return val *= val;
}
function s_button() {
	e();
	d(s(document.getElementById("d").value));
}
//Evaluate Value with Exponent
function se(val1,val2) {
	return Math.pow(val1, val2);
}
function se_button() {
	e();
	var x = document.getElementById("d").value;
	d();
	var y = eval(prompt("What is the value of your exponent?"));
	d(se(x,y));
}
