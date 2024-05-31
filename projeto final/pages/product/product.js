document.getElementById('shipping-button').addEventListener('click', calcularFrete);

function calcularFrete() {
  var cep = document.getElementById('cep').value;
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