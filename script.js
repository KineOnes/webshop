const baseUrl = "http://hello-world.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
            <div class="category-item"><h2>${product.name}</h2>
            <h2>${product.description}</h2></div>`;
    })
    
}

getProducts(baseUrl);