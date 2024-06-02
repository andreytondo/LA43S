customElements.define('price-handler',
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.fullPrice = this.getAttribute('full-price');
      this.discountPrice = this.getAttribute('discount-price');
      this.installmentPrice = this.getAttribute('installment-price');
      this.installments = this.getAttribute('installments');
      this.showInstallments = this.getAttribute('show-installments') === 'true';
      this.render();
    }

    render() {
      this.innerHTML = `
      <div class="price">
        ${this.discountPrice ? this.renderDiscountPrice() : ''}
        ${this.installmentPrice && this.showInstallments ? this.renderInstallmentPrice() : ''}
        ${!this.discountPrice && (!this.installmentPrice || !this.showInstallments) ? this.renderFullPrice() : ''}
      </div>
      `;
    }

    renderDiscountPrice() {
      return `
        <span>R$ ${this.discountPrice}</span>
        <span class="line-through">R$ ${this.fullPrice}</span>
      `;
    }

    renderInstallmentPrice() {
      return `
        <span>R$ ${this.installmentPrice}</span>
        <span>/ Em até ${this.installments}x</span>
      `;
    }

    renderFullPrice() {
      return `
        <span>R$ ${this.fullPrice}</span>
        <span>/ à vista</span>
      `;
    }

  }
)