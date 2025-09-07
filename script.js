let cart = [];
let total = 0;

// Add item to cart
function addItem() {
  const product = document.getElementById("product").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  if (product && quantity > 0 && price > 0) {
    const itemTotal = quantity * price;
    cart.push({ product, quantity, price, itemTotal });
    total += itemTotal;
    updateCart();
    clearInputs();
  } else {
    alert("Please enter valid details.");
  }
}

// Update cart display
function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ${item.quantity} @ ${item.price} = Ksh ${item.itemTotal}`;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

// Clear input fields after adding
function clearInputs() {
  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
}

// Checkout and reset cart
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert(`Total payable: Ksh ${total}`);
  cart = [];
  total = 0;
  updateCart();
}
