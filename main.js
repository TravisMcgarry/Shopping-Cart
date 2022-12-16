let carts = document.querySelectorAll('.add-cart');

let products = [
   {
     name: 'CryWank Album',
     tag: 'CryWankAlbum',
     price: 14.99,
     incart: 0
   },
   {
    name: 'Second CryWank Album',
    tag: 'SecondCryWankAlbum',
    price: 19.99,
    incart: 0
  },
  {
    name: 'Kishi Bashi Album',
    tag: 'KishiBashiAlbum',
    price: 30.00,
    incart: 0
  }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    }) 
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
  
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("my cart item are", cartItems)

    if (cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
            ...cartItems,
            [product.tag]: product
            }
        }
        cartItems[product.tag].incart += 1; 
    } else {
        product.incart = 1;
        cartItems = {
        [product.tag]: product
    }
   }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("the products price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("my cart cost is", cartCost);
    console.log(typeof cartCost);


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }else {
        localStorage.setItem("totalCost", product.price);
    }

   
}



onLoadCartNumbers();