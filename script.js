const baseUrl = "http://hello-world.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)
    products.forEach(function(product){
        productContainer.innerHTML += `
            <a href="/item.html?id=${product.id}" class="category-item">
            <h2>${product.name}</h2>
            <h2>${product.description}</h2></a>`;
    })
}

getProducts(baseUrl);

