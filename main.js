function insertItem() {
  var itemName = document.getElementById("name").value;
  var itemPrice = document.getElementById("price").value;

  if (itemName != "" && itemPrice != "") {
    var table = document.querySelector("table");
    var srNo = table.rows.length -1;

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = srNo;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = itemName;
    cell2.setAttribute("data-ns-test", "item-name");

    var cell3 = row.insertCell(2);
    cell3.innerHTML = itemPrice;
    cell3.setAttribute("data-ns-test", "item-price");

    var grandTotal = document.getElementById("grandTotal").innerHTML;
    document.getElementById("grandTotal").innerHTML =
      Number(grandTotal) + Number(itemPrice);
  }
  itemPrice = "";
  itemName = "";
}
