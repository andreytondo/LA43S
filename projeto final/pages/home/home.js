import { loadCategories } from '../../js/category.js';
import { loadGenres } from '../../js/genre.js';
import { startHorizontalScroll } from '../../js/horizontalScroll.js';

loadCategories();
loadGenres();
handleScroll();
loadVinyls(null);

function handleScroll() {
    const container = document.getElementById('genre-container');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    startHorizontalScroll(container, scrollLeftButton, scrollRightButton);
}

function loadVinyls(genreId, page = 1, pageSize = 6) {
    fetchVinyls(genreId, page, pageSize)
        .then(vinyls => {
            fillVinylsContainer(vinyls);
        }
    );
}

function fillVinylsContainer(vinyls) {
    const container = document.getElementById('vinyl-container');
    container.innerHTML = '';
    vinyls.forEach(vinyl => {
        const vinylElement = createVinylInfo(vinyl);
        container.appendChild(vinylElement);
    });
}

function createVinylInfo(vinyl) {
    const vinylInfo = document.createElement('vinyl-info');
    vinylInfo.setAttribute('vinyl-image', vinyl.image);
    vinylInfo.setAttribute('installment-price', vinyl.installmentPrice);
    vinylInfo.setAttribute('installments', vinyl.installments);
    vinylInfo.setAttribute('title', vinyl.title);
    vinylInfo.setAttribute('tracks', vinyl.tracks);
    vinylInfo.setAttribute('duration', vinyl.duration);
    vinylInfo.setAttribute('year', vinyl.year);
    vinylInfo.setAttribute('artist-image', vinyl.artist.image);
    vinylInfo.setAttribute('artist-name', vinyl.artist.name);
    vinylInfo.setAttribute('artist-description', vinyl.artist.description);
    vinylInfo.setAttribute('liked-artist', vinyl.artist.liked);
    vinylInfo.setAttribute('available', vinyl.available);
    return vinylInfo;
}

function fetchVinyls(genreId, page, pageSize) {
    return fetch('/data/vinyls.json')
        .then(response => response.json())
        .then(vinyls => vinyls.filter(vinyl => genreId === null || vinyl.genreId === genreId))
        .catch(error => console.error('Erro ao carregar os vinis: ', error));
}