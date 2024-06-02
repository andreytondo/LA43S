import LocalStorageService from "../../js/local-storage-service.js";

const storage = new LocalStorageService('vinil-br');
const productId = window.location.pathname.split('/').pop();
handleAlreadyInCart();

document.getElementById('shipping-button').addEventListener('click', calcularFrete);
document.getElementById('cep').onkeydown = function(event) {
  if(isNaN(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
};

document.getElementById('cart-link').addEventListener('click', (event) => {
  event.preventDefault();
  const cart = storage.getItem('cart') || [];
  const existingItem = cart.find(item => item.productId === productId);
  if (!existingItem) {
    cart.push({ productId, quantity: 1 });
  }
  storage.setItem('cart', cart);
  handleAlreadyInCart();
});

fetch('../../data/detailed-vinyl.json')
  .then(response => response.json())
  .then(products => {
    const product = products.find(product => product.id.toString() === productId);
    if (product) {
      fillProductData(product);
    }
  });

function fillProductData(product) {
  document.getElementById('title').innerText = product.title;
  document.getElementById('artist').innerText = product.artist;
  document.getElementById('info').innerText = product.info;
  document.getElementById('value').innerText = `R$ ${product.price} / à vista`;
  document.getElementById('installments').innerText = generateInstallmentsText(product.installments, product.installmentPrice);
  document.getElementById('description').innerText = product.description;
  document.getElementById('main-image').src = product.image;
  product.thumbnails.forEach(thumbnail => {
    const thumbnailElement = generateThumbnailElement(thumbnail);
    document.getElementById('thumbnails').appendChild(thumbnailElement);
  });
}

function generateInstallmentsText(installments, installmentPrice) {
  return installments ?
  `ou por R$ ${installmentPrice} em até ${installments}}x` :
  '';
}

function generateThumbnailElement(thumbnail) {
  const thumbnailElement = document.createElement('img');
  thumbnailElement.src = thumbnail;
  thumbnailElement.addEventListener('click', () => {
    document.getElementById('main-image').src = thumbnail;
  });
  return thumbnailElement;
}

function calcularFrete() {
  var cep = document.getElementById('cep').value.replace('-', '');
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var address = data.logradouro + ', ' + data.bairro + ', ' + data.localidade + ' - ' + data.uf;
      var pricing = 'SEDEX: R$ 10,00';
      document.getElementById('client-address').innerText = address;
      document.getElementById('shipping-price').innerText = pricing;
    });
}

function handleAlreadyInCart() {
  const cart = storage.getItem('cart') || [];
  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    document.getElementById('cart-link').innerHTML = `
      <i class="fas fa-check"></i>
      <span id="cart-action">
        Adicionado ao carrinho
      </span>
    `
    document.getElementById('cart-link').classList.add('disabled');
  }
}