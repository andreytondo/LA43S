export function loadGenres() {
    fetchGenres()
        .then(genres => {
            fillGenresContainer(genres);
        }
    );
}

function fillGenresContainer(genres) {
    const container = document.getElementById('genre-container');
    const total = genres.reduce((acc, genre) => acc + genre.total, 0);
    container.appendChild(addDefaultOption(total));
    genres.forEach(genre => {
        const genreElement = document.createElement('radio-button');
        genreElement.setAttribute('label', `${genre.name} (${genre.total})`);
        genreElement.setAttribute('name', 'genre');
        genreElement.setAttribute('id', genre.id);
        container.appendChild(genreElement);
    });
}

function addDefaultOption(total) {
    const allGenres = document.createElement('radio-button');
    allGenres.setAttribute('label', `Todos (${total})`);
    allGenres.setAttribute('name', 'genre');
    allGenres.setAttribute('id', '0');
    allGenres.setAttribute('checked', true);
    return allGenres;
}

function fetchGenres() {
    return fetch('./data/genres.json')
        .then(response => response.json())
        .then(genres => genres)
        .catch(error => console.error('Erro ao carregar os gêneros: ', error));
}