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
  if ($("#invoice-form").valid()) {
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
      items: [],

      //
    };
    $("#tbody tr").each(function () {
      let itemData = {
        itemName: $(this).find("input[name='Item']").val(),
        description: $(this).find("input[name='description']").val(),
        rate: $(this).find("input[name='Rate']").val(),
        qty: $(this).find("input[name='Units']").val(),
      };
      formData.items.push(itemData);
    });

    localStorage.setItem("formData", JSON.stringify(formData));
    // $("#Formdiv").hide();

    loadInvoice();
  }
}

let subtotal = 0;
let discount = 0;
let Tax = 0;
let FinalTotal = 0;

function loadInvoice() {
  const data = JSON.parse(localStorage.getItem("formData"));
  // Company details
  $("#YourComName").text(data.comName);
  $("#comAdd").text(data.address);
  $("#city").text("City: " + data.city);
  $("#Mypin").text(data.mypin);
  $("#Country").text(data.country);
  $("#Phone").text("+91 " + data.phone);

  // Client details
  $("#clientNAme").text(data.clientName);
  $("#ClientAdd").text(data.clientAdd);
  $("#ClientCity").text("City: " + data.clientCity);
  $("#ClientPin").text(data.clientPin);
  $("#ClientCountry").text(data.clientCountry);
  $("#ClientPhone").text("+91 " + data.clientPhone);

  // Invoice details
  $("#IssuedDate").text(data.issueDate);
  $("#InvoiceNumber").text(data.invoiceNumber);
  $("#DueDate").text(data.dueDate);

  // Invoice items
  let html = "";
  data.items.forEach(function (item) {
    // Final Billing
    subtotal += item.rate * item.qty;
    discount = subtotal * 0.1;
    Tax = (subtotal - discount) * 0.18;
    FinalTotal = subtotal - discount + Tax;

    html += `<tr class="tr">
                <td class="td">${
                  item.itemName
                }<br><span style="font-size: 13px;">${
      item.description
    }</span></td>
                <td class="td">&#x20b9; ${item.rate}<br><span>+Tax</span></td>
                <td class="td">${item.qty}</td>
                <td class="td">&#x20b9; ${item.rate * item.qty}</td>
            </tr>`;
  });
  $("#Subtotal").text("₹ " + subtotal);
  $("#Discount").text("-₹ " + Math.round(discount));
  $("#Tax").text("+₹ " + Math.round(Tax));
  $("#FinalTotal").text("₹ " + Math.round(FinalTotal));
  $("#DepositRequest").text("₹ " + Math.round(FinalTotal));
  $("#DepositDue").text("₹ " + Math.round(FinalTotal));
  $("#TopDueAmount").text("₹ " + Math.round(FinalTotal));
  //
  $("#BillDetails").html(html);
  $("#print").show(2000);
}
