customElements.define('vinyl-info',
    class extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            this.id = this.getAttribute('id');
            this.vinylImage = this.getAttribute('vinyl-image');
            this.installmentPrice = this.getAttribute('installment-price');
            this.installments = this.getAttribute('installments') !== 'undefined' ? this.getAttribute('installments') : null;
            this.title = this.getAttribute('title');
            this.tracks = this.getAttribute('tracks');
            this.duration = this.getAttribute('duration');
            this.year = this.getAttribute('year');
            this.artistImage = this.getAttribute('artist-image');
            this.artistName = this.getAttribute('artist-name');
            this.artistDescription = this.getAttribute('artist-description');
            this.likedArtist = this.getAttribute('liked-artist');
            this.available = this.getAttribute('available');
            this.price = this.getAttribute('price') !== 'undefined' ? this.getAttribute('price') : null;
            this.fullPrice = this.getAttribute('full-price') !== 'undefined' ? this.getAttribute('full-price') : null;
            this.discountPrice = this.getAttribute('discount-price') !== 'undefined' ? this.getAttribute('discount-price') : null;
            this.render();
        }

        render() {
            this.innerHTML = `
            <div class="vinyl-box w-full">
                ${this.available ? `
                <div class="available">
                    <span>Disponível</span>
                </div>
                ` : ''}
                <div class="vinyl-info border pad-1">
                    <div class="vinyl-image">
                        <a href="product/${this.id}">
                            <img src="${this.vinylImage}" alt="vinyl" />
                        </a>
                    </div>
                    <div class="vinyl-info">
                        <div class="price">
                            <price-handler
                                full-price="${this.fullPrice || this.price}"
                                ${this.discountPrice ? `discount-price="${this.discountPrice}"` : ''}
                                ${this.installmentPrice ? `installment-price="${this.installmentPrice}"` : ''}
                                ${this.installments ? `installments="${this.installments}"` : ''}
                                show-installments="${this.installments ? 'true' : 'false'}"
                            ></price-handler>
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