import { getParam } from './utils.mjs';
import productDetails from './ProductDetails.mjs';

const productId = getParam('product');
productDetails(productId);
