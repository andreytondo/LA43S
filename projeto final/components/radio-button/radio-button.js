customElements.define('radio-button',
    class extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            const label = this.getAttribute('label');
            const name = this.getAttribute('name');
            const id = this.getAttribute('id');
            const checked = this.getAttribute('checked') !== null; 
            this.render(label, name, id, checked);
            this.addEventListener('click', this.handleClick);
        }

        render(label, name, id, checked) {
            this.innerHTML = `
                <input type="radio" class="radio-button-check" name="${name}" id="${name + id}" ${checked ? 'checked' : ''}>
                <label class="radio-button" for="${name + id}">${label}</label>
            `;
        }
        
        handleClick(event) {
            const allRadioButtons = document.querySelectorAll(`radio-button`);
        
            allRadioButtons.forEach(rb => {
                const input = rb.querySelector('input');
                if (rb !== this) {
                    input.checked = false;
                    rb.removeAttribute('checked');
                }
            });

            const label = this.querySelector('label');
            const radioId = label.getAttribute('for');
            const input = document.getElementById(radioId);
            if (!input?.checked) {
                this.setAttribute('checked', true);
                input.checked = true;
                const event = new Event('change', { bubbles: true });
                input.dispatchEvent(event);
            }
        }

        static get observedAttributes() {
            return ['checked'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            const input = this.querySelector('input');
            if (input && name === 'checked') {
                input.checked = newValue !== null;
            }
        }

        disconnectedCallback() {
            this.removeEventListener('click', this.handleClick);
        }
    }
)