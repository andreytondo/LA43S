customElements.define('icon-button',
    class extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            const icon = this.getAttribute('icon');
            const label = this.getAttribute('label');
            const color = this.getAttribute('color');

            this.render(icon, label, color);
        }

        render(icon, label, color) {
            this.innerHTML = `
            <button class="icon-button ${color}">
                <i class="${icon}"></i>
                <span>${label}</span>
            </button>`;
        }
    }
)