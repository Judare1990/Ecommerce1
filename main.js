let collections = [
  {
    id: 'o',
    Name: 'Hoodies',
    Price: 14.00,
    Stock: 10,
    urlImage: "./images/featured1.png"
  },
  {
    id: '1',
    Name: 'Shirts',
    Price: 24.00,
    Stock: 15,
    urlImage: "./images/featured2.png"
  },
  {
    id: '2',
    Name: 'Sweatshirts',
    Price: 24.00,
    Stock: 20,
    urlImage: "./images/featured3.png"
  }
]


const products = document.querySelector(".products");

function printProducts() {
  let html = '';
  collections.forEach(function ({ id, Name, Price, Stock, urlImage }) {
    html += `

        <div class="product">

        <div class="product__img">
          <img src="${urlImage}" alt="${Name}">
          <button id= "${id}" class="btn btn__add"><i class='bx bx-plus' ></i></button>
        </div>

        <div class="product__info">        
          <p><b>Name</b>: ${Name}</p>
          <p><b>Price</b>: ${Price}</p>
          <p><b>Stock</b>: ${Stock}</p>
        </div>
             
      </div>
`
  });
  products.innerHTML = html
}
printProducts()