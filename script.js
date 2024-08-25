const menuList = [];

function addItem() {
  const menuItem = document.getElementById("menuItem").value;
  if (menuItem) {
    menuList.push(menuItem);
    displayMenu();
    document.getElementById("menuItem").value = ""; // Clear input field
  }
}

function displayMenu() {
  const menuListElement = document.getElementById("menuList");
  menuListElement.innerHTML = ""; // Clear the list before displaying

  menuList.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    // Add a remove button to each item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeItem(index);
    };
    listItem.appendChild(removeButton);

    menuListElement.appendChild(listItem);
  });
}

function removeItem(index) {
  menuList.splice(index, 1); // Remove item from the array
  displayMenu(); // Update the displayed menu
}
