$(document).ready(function () {
  const Addmore = ` <tr>
                                <td><input type="text" name="Item" placeholder="Item Name"></td>
                                <td><input type="text" name="description" placeholder="Description"></td>
                                <td><input type="number" name="Rate" placeholder="Price per unit"></td>
                                <td><input type="number" name="Units" value="1" placeholder="No. of units"></td>
                            </tr>`;
  const tbody = $("#tbody");
  $("#addItem").on("click", function () {
    tbody.append(Addmore);
  });
});
