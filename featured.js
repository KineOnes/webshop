const baseUrl = "http://hello-world.local/wp-json/wc/store/products?featured=true";
const productContainer = document.querySelector(".featured");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(featured){
        productContainer.innerHTML += `
            <a href="/item.html?id=${featured.id}" class="category-item"><h2>${featured.name}</h2>
            <h2>${featured.description}</h2></a>`;
    })
}

getProducts(baseUrl);