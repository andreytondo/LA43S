import { startRouter } from './router.js';

window.onload = () => {
    startRouter();
    loadHeader();
    loadFooter();
};


function loadHeader() {
    fetch('./components/header/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header').innerHTML = html;
        })
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
