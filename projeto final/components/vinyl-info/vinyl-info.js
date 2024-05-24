customElements.define('vinyl-info',
    class extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            this.vinylImage = this.getAttribute('vinyl-image');
            this.installmentPrice = this.getAttribute('installment-price');
            this.installments = this.getAttribute('installments');
            this.title = this.getAttribute('title');
            this.tracks = this.getAttribute('tracks');
            this.duration = this.getAttribute('duration');
            this.year = this.getAttribute('year');
            this.artistImage = this.getAttribute('artist-image');
            this.artistName = this.getAttribute('artist-name');
            this.artistDescription = this.getAttribute('artist-description');
            this.likedArtist = this.getAttribute('liked-artist');
            this.available = this.getAttribute('available');

            this.render();
        }

        render() { // separar em componentes menores e mais manejáveis
            this.innerHTML = `
            <div class="vinyl-box w-full">
                ${this.available ? `
                <div class="available">
                    <span>Disponível</span>
                </div>
                ` : ''}
                <div class="vinyl-info border pad-1">
                    <div class="vinyl-image">
                        <img src="${this.vinylImage}" alt="vinyl" />
                    </div>
                    <div class="vinyl-info">
                        <div class="price">
                            <span>R$ 129,99</span>
                            <span>/ Em até 7x</span>
                        </div>
                        <h4>${this.title}</h4>
                        <div class="vinyl-description">
                            <span>${this.tracks} faixas</span>
                            <span>|</span>
                            <span>${this.duration}</span>
                            <span>|</span>
                            <span>${this.year}</span>
                        </div>
                    </div>
                </div>
                <div class="vinyl-artist pad-1">
                    <div class="vinyl-artist-info">
                        <div class="vinyl-artist-image">
                            <img src="${this.artistImage}" alt="artist" />
                        </div>
                        <div class="vinyl-artist-description">
                            <span>${this.artistName}</span>
                            <span>${this.artistDescription}</span>
                        </div>
                    </div>
                    <div class="vinyl-artist-liked">
                        <heart-button liked="${this.likedArtist}"></heart-button>
                    </div>
                </div>
            </div>
            `;
        }
    }
)