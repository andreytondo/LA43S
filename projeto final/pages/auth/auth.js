import LocalStorage from '../../js/local-storage-service.js';

const storage = new LocalStorage('vinil-br');

document.getElementById('login-button').addEventListener('click', authenticate);

function authenticate() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  storage.setItem('user', { email, password });
  window.location.href = 'home';
}