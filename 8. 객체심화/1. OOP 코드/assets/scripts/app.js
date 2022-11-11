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

class ProductItem {
  constructor(product) {
    this.product = product;
  }
  render() {
    const prodEl = document.createElement('li');
    prodEl.classname = 'product-item';
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
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product('A Pillow', '', 'A soft pillow', 19.99),
    new Product('A Carpet', '', 'A carpet which you might like - or not', 89.99),
  ];
  constructor() {}
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem();
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append();
  }
}

const productList = new ProductList();
productList.render();

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
//     for (const prod of this.products) {
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
