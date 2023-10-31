//1. Adding a new item to the list of items:

function newItem() {
  let inputValue = $("#input").val();

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let li = $("<li></li>").text(inputValue);
    let list = $("#list");
    list.append(li);
  }

  //2. Crossing out an item from the list of items:

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //3(i). Adding the delete button "X":
  let crossOutButton = $("<button></button>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass("delete");
  }

  // 4. Reordering the items:
  $("#list").sortable();
}
//
