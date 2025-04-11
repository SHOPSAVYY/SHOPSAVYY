let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(productName + " has been added to your cart!");
    console.log(cart);
}
