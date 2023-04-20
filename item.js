const baseUrl = "http://hello-world.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".product");

async function getProduct(id) {
    const response = await fetch(baseUrl + "/" + id);
    const product = await response.json();
    console.log(product)
    productContainer.innerHTML += `
        <a class="category-item">
        <h2>${product.name}</h2>
        <h2>${product.description}</h2></a>`;
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
