import { startRouter } from './router.js';
import LocalStorage from './local-storage-service.js';

const storage = new LocalStorage('vinil-br');

window.onload = () => {
    startRouter();
    loadHeader();
    loadFooter();
};

function loadHeader() {
    fetch('./components/header/header.html')
        .then(response => response.text())
        .then(html => document.getElementById('header').innerHTML = html)
        .then(() => verifyUser())
        .catch(error => console.error('Erro ao carregar o cabeçalho: ', error));
}

function loadFooter() {
    fetch('./components/footer/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer').innerHTML = html;
        })
        .catch(error => console.error('Erro ao carregar o rodapé: ', error));
}

function verifyUser() {
    const user = storage.getItem('user');
    if (user) {
        document.getElementById('auth-icon').innerHTML = `
            <a href="conta">
                <i class="fas fa-user"></i>
                <span>Conta</span>
            </a>
        `
    }
}