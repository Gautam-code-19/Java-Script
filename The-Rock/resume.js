function output() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var streetAddress = document.getElementById("state");
  var city = document.getElementById("city");
  var State = document.getElementById("State");
  var type = document.getElementById("type");
  var stateProvince = document.getElementById("stateProvince");
  var zipCode = document.getElementById("zipCode");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");

  const firstNameOutput = document.getElementById("firstNameOutput");
  const lastNameOutput = document.getElementById("lastNameOutput");
  const streetAddressOutput = document.getElementById("streetAddressOutput");
  const cityOutput = document.getElementById("cityOutput");
  const typeOutput = document.getElementById("typeOutput");
  const StateOutput = document.getElementById("StateOutput");
  const phoneOutput = document.getElementById("phoneOutput");
  const zipOutput = document.getElementById("Zip");
  const emailOutput = document.getElementById("emailOutput");

  firstNameOutput.textContent = firstName.value;
  lastNameOutput.textContent = lastName.value;
  streetAddressOutput.textContent = "Address:" + streetAddress.value + " ,";
  cityOutput.textContent = "City:" + city.value + " ,";
  //   typeOutput.textContent = type.value;
  StateOutput.textContent = "State:" + State.value + " .";
  phoneOutput.textContent = phone.value;
  zipOutput.textContent = "Zip:" + zipCode.value;
  emailOutput.textContent = "Email: " + email.value;
}

function nextPage() {

 
  if(firstName.value && lastName.value && email.value && phone.value && State.value && cite.value && streetAddress.value){
    const currentPage = document.getElementById("firstPage");
    const page2 = document.getElementById("sencondPage");
    currentPage.style.display = "none";
    page2.style.display = "block";
  }{
    alert('fill All')
  
}
}
    