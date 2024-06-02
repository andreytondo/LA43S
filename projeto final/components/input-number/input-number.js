customElements.define('input-number',
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.value = this.getAttribute('value') || 0;
      this.for = this.getAttribute('for');
      this.render();
      this.handleClick();
    }

    render() {
      this.innerHTML = `
        <style>
          input[type="number"] {
            width: 100px;
            padding: 5px;
            text-align: center;
          }
          button {
            padding: 10px;
            cursor: pointer;
          }
        </style>
        <button id="decrement" class="primary">-</button>
        <input type="number" name="quantity" value="${this.value}" min="0" max="100" disabled>
        <button id="increment" class="primary">+</button>
      `;
    }

    handleClick() {
      const input = this.querySelector('input');
      const decrement = this.querySelector('#decrement');
      const increment = this.querySelector('#increment');

      decrement.addEventListener('click', () => {
        if (parseInt(input.value) <= 0) return;
        input.value = parseInt(input.value) - 1;
        this.emitEvent();
      });

      increment.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
        this.emitEvent();
      });
    }

    emitEvent() {
      this.dispatchEvent(new CustomEvent('quantityChange', {
        bubbles: true,
        detail: {
          for: this.for,
          value: this.querySelector('input').value
        }
      }));
    }
  }
)