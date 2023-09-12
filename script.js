let cart = [];

function addToCart(productName, price) {
  cart.push({
    name: productName,
    price: price
  });

  updateCart();
}

function updateCart() {
  let cartDisplay = document.getElementById('cart');
  cartDisplay.innerHTML = `Cart (${cart.length})`;
}
