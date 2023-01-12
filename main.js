let collections = [
  {
    id: '0',
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
{
  const contentCart= document.querySelector('.contentCart');
  const iconCart= document.querySelector('.bx-shopping-bag');
   
iconCart.addEventListener('click', function(){
  contentCart.classList.toggle('contentCart__show');
});
}
const products = document.querySelector(".products");
const cartProducts= document.querySelector('.cartProducts');
let objCart= {};

function printProductsInCart(){
  let html= '';

  const arrayCart= Object.values(objCart);

  arrayCart.forEach(function ({ id, Name, Price, urlImage, amount }) {  

    html += `

        <div class="product">
          <div class="product__img">
            <img src="${urlImage}" alt="${Name}">
          </div>

          <div class="product__icons" id="${id}">
            <i class='bx bx-minus'></i>
            <i class='bx bx-plus'></i>
            <i class='bx bxs-trash'></i>
          </div>

          <div class="product__info">        
            <p>${Name}</p>
            <p>${Price}</p>
            <p><b>Amount</b>: ${amount}</p>
          </div>
        </div>
`
  });
  
  cartProducts.innerHTML = html;
  
}

function printProducts() {
  let html = '';
  
  collections.forEach(function ({ id, Name, Price, Stock, urlImage }) {
    html += `

        <div class="product">

        <div class="product__img">
          <img src="${urlImage}" alt="${Name}">
          <button id= "${id}" class="btn btn__add">+</button>
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



products.addEventListener('click', function(e){
if(e.target.classList.contains('btn__add')){
 const id= e.target.id;

 let findProduct= collections.find(function(collection){
  return collection.id === id;
 });
 if (objCart[id]){
  objCart[id].amount++;
 }else{
  objCart[id]= {
    ...findProduct,
    amount: 1
  };
  
 }
}

printProductsInCart();

});


//////////////////

function printAmountCart() {
  let sum = 0;

  const arrayCart = Object.values(objCart);

  if (!arrayCart.length) {
      amountCart.style.display = "none";
      return;
  }

  amountCart.style.display = "inline-block";

  arrayCart.forEach(function ({ amount }) {
      sum += amount;
  });

  amountCart.textContent = sum;
}
////////////////////////////////

cartProducts.addEventListener("click", function (e) {
  if (e.target.classList.contains("bx-minus")) {
      const id = e.target.parentElement.id;
      
      if (objCart[id].amount === 1) {
          const res = confirm("Seguro quieres eliminar este producto");
          if (res) delete objCart[id];
      } else {
          objCart[id].amount--;
      }
  }

  if (e.target.classList.contains("bx-plus")) {
      const id = e.target.parentElement.id;

      let findProduct = collections.find(function (collection) {
          return collection.id === id;
      });

      if (objCart[id].amount) {
        objCart[id].amount++;
      } 
      
  }

  if (e.target.classList.contains("bxs-trash")) {
      const id = e.target.parentElement.id;

      const res = confirm("Seguro quieres eliminar este producto");
      if (res) delete objCart[id];
  }

    printProductsInCart();
    printTotalCart();
    printAmountCart();
});