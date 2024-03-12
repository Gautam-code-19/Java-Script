//first two function only for display and hide the code on event fired...
function showAddModal() {
  document.getElementById("addModalOverlay").style.display = "flex";
}
function closeAddModal() {
  document.getElementById("addModalOverlay").style.display = "none";
}
	//this function is adding the values in our localStorage...
function addData() {
  let fullname = document.getElementById("name");
  let Email = document.getElementById("email");
  let Class = document.getElementById("class");

  var storage = {
    name: fullname.value,
    email: Email.value,
    Class: Class.value,
  };

  console.log(storage);
  if (!fullname || !Class || !Email) {
    alert("fill all...");
  } else {
    let existingData = JSON.parse(localStorage.getItem("storage")) || [];

    existingData.push(storage);
    localStorage.setItem("storage", JSON.stringify(existingData));

    fullname.value = "";
    Emailvalue = "";
    Class.value = "";

    closeAddModal();
    display();
  }
}

//this is showing the data that is showen in the localStorage...

function display() {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  let existingData = JSON.parse(localStorage.getItem("storage"));
  existingData.forEach((data, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.name}</td>
                  <td>${data.Class}</td>
                  <td>${data.email}</td>
                  <td>
				  <button onclick="editOne(${index})">edit</button>	
				  <button onclick="deleteOne(${index})">delete</button></td>`;
    tbody.appendChild(tr);
  });
}

//this will delete the data item from tabel as well as localStorage...
function deleteOne(index) {
  let existingData = JSON.parse(localStorage.getItem("storage")) || [];

  if (index >= 0 && index < existingData.length) {
	  //window.confirm will give true or false value ...
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry? If you press OK than it will delete parmanetaly.."
    );
    if (confirmDelete) {
      existingData.splice(index, 1);
      localStorage.setItem("storage", JSON.stringify(existingData));

      // Refresh the table after deletion
      display();
    }
  }
}
display();

function editOne(index) {
  let existingData = JSON.parse(localStorage.getItem("storage")) || [];
  
  // Assuming you have an edit modal with input fields with IDs: "editName", "editClass", "editEmail"
  let editNameInput = document.getElementById("editName");
  let editClassInput = document.getElementById("editClass");
  let editEmailInput = document.getElementById("editEmail");

  // Populate the modal with existing data
  if (index >= 0 && index < existingData.length) {
    let selectedData = existingData[index];
    editNameInput.value = selectedData.name;
    editClassInput.value = selectedData.Class;
    editEmailInput.value = selectedData.email;

    // Show the edit modal
    showEditModal(index);
  }
}

// Show the edit modal
function showEditModal(index) {
  let editModalOverlay = document.getElementById("edit");
  editModalOverlay.style.display = "flex";

  // Set a custom attribute to store the index of the data being edited
  editModalOverlay.setAttribute("data-index", index);
}

// Close the edit modal
function closeEditModal() {
  document.getElementById("edit").style.display = "none";
}

// Update the existing data with edited values
function updateData() {
  let editOverlay = document.getElementById("edit");
  let index = editOverlay.getAttribute("data-index");

  let existingData = JSON.parse(localStorage.getItem("storage")) || [];
  let editedData = {
    name: document.getElementById("editName").value,
    Class: document.getElementById("editClass").value,
    email: document.getElementById("editEmail").value,
  };

  existingData[index] = editedData;
  localStorage.setItem("storage", JSON.stringify(existingData));

  // Close the edit modal and refresh the display
  closeEditModal();
  display();
}