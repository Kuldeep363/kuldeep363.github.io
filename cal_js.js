var k;
function addChar(input, character) {
	if(input.value == null || input.value == "0"){
		input.value = character;
	}
	else{
		input.value += character;
	}
}
function openNav(){
	document.getElementById("myNav").style.height="100%";
	document.getElementById("menu").style.visibility="hidden";
  }
  function closeNav(){
	document.getElementById("myNav").style.height="0%";
	document.getElementById("menu").style.visibility="visible";
  }
/*
var k='1';
function set(input){
	k=input;
}
*/
function cos(input) {
	/*if (k=='1') {
		form.display.value =form.display.value*Math.PI/180; 
		form.display.value=Math.cos(form.display.value);
	}
	else {*/ 
		input.display.value = Math.cos(input.display.value);
		k=input.display.value;

}

function sin(input) {
	/*if(k=='1'){
		form.display.value=form.display.value*Math.PI/180;
		form.display.value = Math.sin(form.display.value);
	}
	else{*/
		input.display.value=Math.sin(input.display.value);
		k=input.display.value;
	
}

function tan(input) {
	/*if (k=='1'){
		form.display.value=form.display.value*Math.PI/180;
		form.display.value = Math.tan(form.display.value);
	}
	else{*/
		input.display.value=Math.tan(input.display.value);
		k=input.display.value;
	
}

function sqrt(input) {
	input.display.value = Math.sqrt(input.display.value);
	k=input.display.value;
}

function ln(input) {
	input.display.value = Math.log(input.display.value);
	k=input.display.value;
}

function exp(input) {
	input.display.value = Math.exp(input.display.value);
	k=input.display.value;
}

function asin(input){
	/*if (k=='1'){
		input.display.value=input.display.value*Math.PI/180;
		input.display.value=Math.asin(input.display.value);
	}
	else{*/
		input.display.value=Math.asin(input.display.value);
		k=input.display.value;
	
}

function acos(input){
	/*if (k=='1'){
		input.display.value=input.display.value*Math.PI/180;
		input.display.value=Math.acos(input.display.value);
	}
	else{*/
		input.display.value=Math.acos(input.display.value);
		k=input.display.value;
	
}
function atan(input){
	/*if (k=='1'){
		input.display.value=input.display.value*Math.PI/180;
		input.display.value=Math.atan(input.display.value);
	}
	else{*/
		input.display.value=Math.atan(input.display.value);
		k=input.display.value;
	
}

function cbrt(input){
	input.display.value=Math.cbrt(input.display.value);
	k=input.display.value;
}

function deleteChar(input) {
	if (input.value.length==1 && input.value=="0"){
		input.value="0";
		k=input.value;
	}
	else if (input.value.length>1){ 
		input.value=input.value.substring(0,input.value.length-1);
	}
	else{
		
		input.value="0";
	}
	
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-"){
		input.value = input.value.substring(1, input.value.length);
	}
	else{
		input.value = "-" + input.value;
	}
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
	form.display.value = eval(form.display.value);
	k=form.display.value;
}


function square(input) {
	input.display.value = Math.pow(input.display.value, 2);
	k=input.display.value;
}


function cube(input){
	input.display.value = Math.pow(input.display.value, 3);
	k=input.display.value;
 }

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."&& ch != "(" && ch!= ")" && ch!="%" ) {
				alert("invalid entry!")
				return false
			}
		}
	}
		return true
}
function facto(input){
	var f=1;
	if(input.value=="0" || input.value=="1"){
		input.value=f;
		k=f;
	}
	else if(Number(input.value)<0){
		alert("Invalid input Please Input +ve NUmber");
	}
	else{
		var x=Number(input.value);
		for(i=2;i<=x;i++){
				f=i*f;
		}
	}
	input.value=f;
	k=f;
}
function ans(input){
	if(Number(k)==NaN){
		alert("You can't borrow this value");
	}
	else{
		addChar(input,k);
	}
}