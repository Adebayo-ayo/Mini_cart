let cart = []

let userInput = document.getElementById("input").value

function addItem() {
  userInput = document.getElementById("input").value
  let c = document.getElementById("display")
  c.innerHTML = ""

  if (userInput.trim() == "") {
    alert("Kindly,Add item to cart.")
  } else {
    cart.push(userInput)
    displayItem() 
 
    console.log(cart);
    document.getElementById("input").value = ""

  }
}



function displayItem() {
  document.getElementById("display").innerHTML = ''
  for (let index = 0; index < cart.length; index++){
    document.getElementById('display').innerHTML += `<p>${index + 1}. ${cart[index]}
< margin button onclick="removeItem(${index})" class="btn btn-primary">remove</button>
    </p>`
  }
}



// isolated function are function created inside javascript alone to represent a particular event that appears moe than once