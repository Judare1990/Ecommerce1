let collections = [
    {
        id: 'o',
        Name: 'Hoodies', 
        Price: 14.00,
        Stock: 10,
        urlImage: "./featured1.png" 
    },
    {
        id: '1',
        Name: 'Shirts', 
        Price: 24.00,
        Stock: 15,
        urlImage: "./featured2.png" 
    },
    {
        id: '2',
        Name: 'Sweatshirts', 
        Price: 24.00,
        Stock: 20,
        urlImage: "./featured1.png" 
    }
]


const products = document.querySelector(".products");

function printProducts(){
    let html= '';
    collections.forEach(function({id, Name, Price, Stock, urlImage}){
        html += `
        <div class="product">
        <div class="product__img">
          <img src="${urlImage}" alt="${Name}">
        </div>

        <div class="product__options" id= "${id}">
          <button class="btn btn__add">+</button>
        </div>

        
      
        <div class="product__info">
        
          <p>Name: ${Name}</p>
          <p>Price: ${Price}</p>
          <p>Stock: ${Stock}</p>
        </div>
      
        
      </div>
`
    });
    products.innerHTML = html
}
printProducts()