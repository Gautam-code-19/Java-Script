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
