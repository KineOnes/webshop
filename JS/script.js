/* This code is work in progress. Fetchin from localstorage.*/ 

fetch("products.json")
.then(function(response){
    return response.json();

})
.then(function(data){
    localStorage.setItem("products", JSON.stringify(data));
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart", "[]");
    }
});

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

function addItemToCart(productId){
    let product = products.find(function(product){
        return product.id == productId;   
    });
    
    if(cart.length == 0){
        cart.push(product);
    }else{
        let res =cart.find(element => element.id == productId);
        if(res === undefined){
            cart.push(product);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

}
addItemToCart(1);
addItemToCart(2);
addItemToCart(3);
