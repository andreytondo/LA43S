import LocalStorageService from '../../js/local-storage-service.js';

const storage = new LocalStorageService('vinil-br');

loadCart();
document.addEventListener('quantityChange', event => {
  const productId = event.detail.for;
  const quantity = event.detail.value;
  updateQuantity(productId, quantity);
  calcTotals();
});

async function loadCart() {
  const cart = storage.getItem('cart');
  if (cart?.length) {
    const totals = { subtotal: 0, discounts: 0, total: 0 }
    const cartList = document.getElementById('products');
    const products = await Promise.all(cart.map(item => loadProduct(item.productId)));
    cartList.innerHTML = '';
    products.forEach((product, index) => {
      totals.subtotal += product.price * cart[index].quantity;
      totals.discounts += calcDiscount(product.fullPrice, product.discountPrice, cart[index].quantity);
      const cartItemElement = createCartItemElement(product, cart[index].quantity);
      cartList.appendChild(cartItemElement);
    });

    totals.total = totals.subtotal - totals.discounts;
    updateTotals(totals);
  } else {
    document.getElementById('cart-page').innerHTML = '<h3>Seu carrinho está vazio</h2>';
  }
}

function calcDiscount(fullPrice, discountPrice, quantity) {
  if (!discountPrice || !fullPrice) return 0;
  return (fullPrice - discountPrice) * quantity;
}

function updateTotals(totals) {
  document.getElementById('subtotal').innerHTML = `R$ ${totals.subtotal.toFixed(2)}`;
  document.getElementById('discounts').innerHTML = `R$ ${totals.discounts.toFixed(2)}`;
  document.getElementById('total').innerHTML = `R$ ${totals.total.toFixed(2)}`;
}

async function loadProduct(productId) {
  return fetch('../../data/detailed-vinyl.json')
    .then(response => response.json())
    .then(products => products.find(product => product.id.toString() === productId));
}

function createCartItemElement(item, quantity) {
  const div = document.createElement('div');
  div.className = 'product flex align-center gap-2 pad-2 w-full';
  div.innerHTML = `
      <div>
        <img id="main-image"src="${item.image}">
      </div>
      <div>
        <div>
          <h6><b>${item.title}</b></h6>
          <h6>${item.artist}</h6>
        </div>

        <price-handler
          full-price="${item.fullPrice || item.price}"
          ${item.discountPrice ? `discount-price="${item.discountPrice}"` : ''}
          ${item.installmentPrice ? `installment-price="${item.installmentPrice}"` : ''}
          ${item.installments ? `installments="${item.installments}"` : ''}
          show-installments="false"
        ></price-handler>

        <div>
          <b id="info">${item.info}</b>
        </div>

        <input-number for="${item.id}" value="${quantity}"></input-number>
      </div>
  `;
  return div;
}

function calcTotals() {
  loadCart();
}

function updateQuantity(productId, quantity) {
  const cart = storage.getItem('cart');
  const index = cart.findIndex(item => item.productId === productId);
  if (quantity <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].quantity = quantity;
  }
  storage.setItem('cart', cart);
}