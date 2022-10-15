class ProductClass {
  private _normalPrice: number = 0;
  private discount: number = 0.05;
  private _priceDiscount = 0;
  public name: string = '';
  public size: string = '';

  constructor(name: string, size: string) {
    this.name = name;
    this.size = size;
  }

  set percentDiscount(value) {
    this.discount = value / 100;
  }

  set normalPrice(value) {
    this._normalPrice = value;
  }

  get normalPrice() {
    return this._normalPrice;
  }

  get percentDiscount() {
    return this.discount * 100;
  }

  get priceDiscount() {
    const discountNeto = this._normalPrice * this.discount;
    return this._normalPrice - discountNeto;
  }
}

class GetProduct extends ProductClass {
  constructor(name: string, size: string, price: number, discount: number) {
    super(name, size);
    this.normalPrice = price;
    this.percentDiscount = discount;
  }

  public detailProduct() {
    return {
      name: this.name,
      size: this.size,
      normal_price: this.normalPrice,
      percent_discount: this.percentDiscount,
      total_price: this.priceDiscount,
    };
  }
}

const product = new GetProduct('tshirt', 'xxl', 100000, 5);
const infoProduct = product.detailProduct();
console.log('productInfo', infoProduct);
