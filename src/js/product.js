import { getLocalStorage, getParam, setLocalStorage } from './utils.mjs';
import {findProductById} from './ProductData.mjs';

function addProductToCart(product) {
  const currentCart = getLocalStorage('so-cart') || [];
  currentCart.push(product)
  setLocalStorage('so-cart', currentCart);
}
async function addProductToCartHandler(e){
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

document
  .getElementById('addToCart')
  .addEventListener('click', addProductToCartHandler);

const productId = getParam('product')
findProductById(productId).then(console.log);