import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";


function addProductToCart(product) {
  //TODO productss should be an array
  const currentCart =getLocalStorage('so-cart')||[];
  currentCart.push(product);
  setLocalStorage("so-cart", currentCart);
}
//Add listner to Cart button
document
    .getElementById('addToCart')
    .addEventListener('click', addToCartHandler);