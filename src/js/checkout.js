import { setLocalStorage, getLocalStorage } from './utils.mjs';
import { findProductDataById } from './ProductData.mjs';


function addProductToCart(product) {
  //TODO productss should be an array
  const currentCart = getLocalStorage('so-cart') || [];
  currentCart.push(product);
  setLocalStorage('so-cart', currentCart);
}
async function addToCartHandler (e){
  const product = await findProductDataById(e.target.dataset.id);
  addProductToCart(product);
}
//Add listner to Cart button
document
    .getElementById('addToCart') 
    .addEventListener('click', addToCartHandler);