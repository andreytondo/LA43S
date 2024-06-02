customElements.define('line-break',
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
              <div class="line-break">
                <div class="main-line"></div>
                <div class="before-line"></div>
              </div>
            `;
      this.applyStyles();
    }

    applyStyles() {
      const style = document.createElement("style");
      style.textContent = `
                .line-break {
                  width: 80px;
                  heigth: 8px;
                  display: flex;
                  gap: 4px;
                }

                .main-line {
                  background-color: var(--red-500);
                  border: 4px solid var(--red-500);
                  border-radius: 48px;
                  position: relative;
                  overflow: visible;
                  width: 56px;
                }

                .before-line {
                  width: 24px;
                  height: 8px;
                  background: var(--red-500);
                  border-radius: 48px;
                }
            `;
      this.appendChild(style)
    }
  }
)