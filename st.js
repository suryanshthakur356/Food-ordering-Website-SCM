let cart = [];
let total = 0;
function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}
function updateCart()
{
  const cartList = document.getElementById('cart');
  const totalElement = document.getElementById('total');
  cartList.innerHTML = '';
  cart.forEach((product, index) => {
    const li = document.createElement('li');
    li.textContent = ${product.item} - $${product.price.toFixed(2)};
    cartList.appendChild(li);
  });
    totalElement.textContent = total.toFixed(2);
}
