export function loadCategories() {
    fetchCategories()
        .then(categories => {
            fillCategoriesContainer(categories);
        }
    );
}

function fillCategoriesContainer(categories) {
    const container = document.getElementById('category-container');
    categories.forEach(category => {
        const button = document.createElement('icon-button');
        button.setAttribute('icon', category.icon);
        button.setAttribute('label', category.label);
        button.setAttribute('color', category.color);
        container.appendChild(button);
    });
}

function fetchCategories() {
    return fetch('./data/categories.json')
        .then(response => response.json())
        .then(categories => categories)
        .catch(error => console.error('Erro ao carregar as categorias: ', error));
}