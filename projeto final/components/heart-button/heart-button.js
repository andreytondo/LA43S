customElements.define('heart-button',
    class extends HTMLElement {

        liked = false;

        constructor() {
            super();
        }

        connectedCallback() {
            this.liked = this.getAttribute('liked') === 'true';
            this.render();
        }

        render() {
            this.innerHTML = `
            <button class="heart-button primary">
                <i class="${this.icon}"></i>
            </button>`;
        }

        toggleLike() {
            this.liked = !this.liked;
            this.render();
        }

        get icon() {
            return this.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        }
    }
)