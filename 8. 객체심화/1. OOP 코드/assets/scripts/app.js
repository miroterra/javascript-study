// class를 사용
class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProuct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML`
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, rednerHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;

    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  products = [
    new Product('A Pillow', '', 'A soft pillow', 19.99),
    new Product('A Carpet', '', 'A carpet which you might like - or not', 89.99),
  ];
  constructor(renderHookId) {
    super(renderHookId);
  }
  render() {
    this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, 'prod-list');
      productItem.render();
    }
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart('app');
    this.cart.render();
    const productList = new ProductList('app');
    productList.render();
  }
}

// 정적 메서드를 쓰기 좋음
class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();

// 객체 리터럴 표기법으로 만든 것
// const productList = {
//   products: [
//     {
//       title: 'A Pillow',
//       imageUrl: '',
//       price: 19.99,
//       description: 'A soft pillow',
//     },
//     {
//       title: 'A Carpet',
//       imageUrl: '',
//       price: 89.99,
//       description: 'A carpet which you might like - or not',
//     },
//   ],
//   render() {
//     const renderHook = document.getElementById('app');
//     const prodList = document.createElement('ul');
//     prodList.className = 'product-list';
//     for (const prod of this.products) {p
//       const prodEl = document.createElement('li');
//       prodEl.classname = 'product-item';
//       prodEl.innerHTML = `
//     <div>
//       <img src="${prod.imageUrl}" alt="${prod.title}">
//       <div class="product-item__content">
//         <h2>${prod.title}</h2>
//         <h3>\$${prod.price}</h3>
//         <p>${prod.description}</p>
//         <button>Add to Cart</button>
//       </div>
//     </div>
//     `;
//       prodList.append(prodEl);
//     }
//     renderHook.append();
//   },
// };

// productList.render();
