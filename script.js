let cart = [];
let userInput = "";

function addItem() {
  userInput = document.getElementById("input").value;

  if (userInput.trim() === "") {
    alert("Kindly, Add item to cart.");
  } else {
    cart.push(userInput);
    displayItem();

    console.log(cart);
    document.getElementById("input").value = "";
  }
}

function displayItem() {
  let display = document.getElementById("display");
  display.innerHTML = "";

  for (let index = 0; index < cart.length; index++) {
    display.innerHTML += `
      <p>${index + 1}. ${cart[index]}</p>
      <p><button onclick="removeItem(${index})" class="btn btn-primary">remove</button></p>
    `;
  }
}

function deleteLast() {
  if (cart.length === 0) {
    alert("Cart is empty.");
    return;
  } else {
    cart.pop();
    displayItem();

    console.log(cart);
    document.getElementById("input").value = "";
  }
}

function removeItem(i) {
  let check = confirm("Are you sure you want to remove the item?");
  if (check) {
    cart.splice(i, 1);
  }
  displayItem();
}

function deleteAll() {
  if (cart.length === 0) {
    alert("Cart is empty.");
    return;
  }

  let check = confirm("Are you sure you want to clear the entire cart?");
  if (check) {
    cart = [];
    displayItem();
    document.getElementById("input").value = "";
    console.log(cart);
  }
}

// isolated function are function created inside javascript alone to represent a particular event that appears moe than once