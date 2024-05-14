// import { loadHeaderFooter, getParam } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";
// import ProductDetails from "./ProductDetails.mjs";

// loadHeaderFooter()

// const dataSource = new ProductData("tents");
// const productId = getParam("product");

// const product = new ProductDetails(productId, dataSource);
// product.init();

import { setLocalStorage, getLocalStorage, getParam } from './utils.mjs';
import { findProductById } from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs"

 function addProductToCart(product) {
  const currentCart = getLocalStorage('so-cart') || [];
  currentCart.push(product);
  setLocalStorage('so-cart', currentCart);
}

async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

  //add listener to Add to Cart button
  document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

const productId = getParam ('product');
// findProductById(productId).then(console.log);
ProductDetails(productId);
