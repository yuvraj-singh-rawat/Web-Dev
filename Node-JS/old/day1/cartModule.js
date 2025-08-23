let addToCart = () => {
    return "add to cart";
}

let changeQty = () => {
    return 5;
}

let name = "Yuvraj";

// Normal Export
// module.exports = addToCart

// Named Export
module.exports = {addToCart, changeQty, name}