
function sum(){
	cal((num,num2)=> num + num2);
}
function subtraction(){
	cal((num,num2)=> num - num2);
}
function divide(){	
	cal((num,num2)=> num / num2);
}
function multiply(){
	cal((num,num2)=> num * num2);
}

function cal(pra){
	let num=Number(document.getElementById('num1').value)
	let num2=Number(document.getElementById('num2').value)
	
	
	let result=pra(num,num2)
	document.getElementById('result').innerText=result;

}