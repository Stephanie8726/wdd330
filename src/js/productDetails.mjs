import { setLocalStorage, getLocalStorage } from './utils.mjs';
import {findProductById} from './ProductData.mjs';
import {  qs, setContent} from './utils.mjs';

function addProductToCart(product){
    const currentCart = getLocalStorage('so-cart') || [];
    currentCart.push(product);
    setLocalStorage('so-cart', currentCart);
}
async function addToCartHandler(e){
    const product = await findProductById(e.target.dataset.id)
    addProductToCart(product);
}
document
    .getElementById('addToCart')
    .addEventListener('click', addToCartHandler);

export default async function productDetails(productId){
    const productData = await findProductById(productId);
    renderProductDetails(productData);
}

function renderProductDetails(productData){
    
    setContent('#productName', productData.Brand.Name);
    setContent('#productNameWithoutBrand', productData.NameWithoutBrand);
    setContent('#productFinalPrice', productData.FinalPrice);
    setContent('#productDescriptionHtmlSimple',productData.DescriptionHtmlSimple);
    
    qs('#productImage').setAttribute('src', productData.Image);

    qs('#addToCart').addEventListener('click', addToCartHandler);
}