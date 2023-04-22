const baseUrl = "http://hello-world.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".product");
const textContainer = document.querySelector(".text")

async function getProduct(id) {
    const response = await fetch(baseUrl + "/" + id);
    const product = await response.json();
    console.log(product)
    productContainer.innerHTML += `${product.description}`;
    textContainer.innerHTML += `
    <h2>${product.name}</h2>
    <p>${product.short_description}</p>
    <h2>${product.prices.price / 100} NOK</h2>
    `;
}

function getId() {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    return id;
}

const productId = getId();

if (productId) {
    console.log("Your are viewing a product with the ID: " + productId);
    getProduct(productId)
} else {
    alert("No ID could be found!")
}
