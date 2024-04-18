$(document).ready(function () {
  let Idis = 2;

  $("#addItem").on("click", function () {
    let Addmore = `<tr id="${Idis}" >
                                    <td><input type="text" name="Item" placeholder="Item Name"></td>
                                    <td><input type="text" name="description" placeholder="Description"></td>
                                    <td><input type="number" name="Rate" placeholder="Price per unit"></td>
                                    <td class="d-flex"><input type="number" name="Units" value="1"
                                            placeholder="No. of units">
                                        <button type="button" class="delete-left" title='Delete' onclick="deleteOne(${Idis})">
                                            <i class="fa-solid fa-delete-left delete-left-icon"></i>
                                        </button>
                                    </td>
                                </tr>`;
    $("#tbody").append(Addmore);
    Idis++;
  });
});

function deleteOne(withid) {
  if (window.confirm("Confirm  if you want to Delete !")) {
    $("#" + withid).remove();
  }
}

function saveFormData() {
  const formData = {
    // Company details
    comName: $("#comName").val(),
    address: $("#address").val(),
    city: $("#City").val(),
    mypin: $("#mypin").val(),
    country: $("#country").val(),
    phone: $("#phone").val(),

    // Client details
    clientName: $("#clientName").val(),
    clientAdd: $("#clientAdd").val(),
    clientCity: $("#clientCity").val(),
    clientPin: $("#clientPin").val(),
    clientCountry: $("#client-country").val(),
    clientPhone: $("#client-phone").val(),

    // Invoice details
    issueDate: $("#issue-date").val(),
    invoiceNumber: $("#invoiceNumber").val(),
    referanceNumber: $("#referanceNumber").val(),
    dueDate: $("#dueDate").val(),

    // Invoice items (assuming only one row in the table)
    item: $("input[name='Item']").eq(0).val(),
    description: $("input[name='description']").eq(0).val(),
    rate: $("input[name='Rate']").eq(0).val(),
    qty: $("input[name='Units']").eq(0).val(),
  };

  localStorage.setItem("formData", JSON.stringify(formData));
  loadInvoice();
}

function loadInvoice() {
  const data = JSON.parse(localStorage.getItem("formData"));

  // Company details

  $("#YourComName").text(data.comName);
  $("#comAdd").text(data.address);
  $("#city").text("city," + data.city);
  $("#Mypin").text(data.mypin);
  $("#Country").text(data.country);
  $("#Phone").text("+91 " + data.phone);

  // Client details
  $("#clientNAme").text(data.clientName);
  $("#ClientAdd").text(data.clientAdd);
  $("#ClientCity").text("city," + data.clientCity);
  $("#ClientPin").text(data.clientPin);
  $("#ClientCountry").text(data.clientCountry);
  $("#ClientPhone").text("+91 " + data.clientPhone);

  // Invoice details
  $("#IssuedDate").text(data.issueDate);
  $("#InvoiceNumber").text(data.invoiceNumber);

  $("#DueDate").text(data.dueDate);
}
