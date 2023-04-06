const baseUrl = "http://hello-world.local//wp-json/wc/store/products";

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `
        <div class="product"><h2>${product.name}</h2></div>
        <div class="product-image" style="background-image:url('${product.images[0].src}')</div>
        <div class="product"><h2>${product.price_html}</h2></div>
        `
    })
}

getProducts(baseUrl);

