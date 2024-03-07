function validate(){
	const name=document.getElementById("name")
	const age=document.getElementById("age")
	const school=document.getElementById("school")
	
	let checkName=/^[a-zA-Z]+ [a-zA-Z]/;
	if(name.value.trim()==""){
		document.getElementById("NameErr").innerHTML="Enter Name plz";
		return false;
	}
	else if(!checkName===name){
		document.getElementById("NameErr").innerText="Enter a valid name..";
		return false;
	}
	else if(age.value==""){
		document.getElementById("ageErr").innerHTML="Enter your age..";
		return false;
	}
	else if(age.value<6){
		document.getElementById("ageErr").innerHTML="you are too young to use this site..";
		return false;
	}
	else if(school.value.trim()==""){
				document.getElementById("schoolErr").innerHTML="Enter School Name..";

		return false;
	}
	else{
		return true;
	}
}
