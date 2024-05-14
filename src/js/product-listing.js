import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();
const category = getParam("category");

console.log("category", category);

// week 03 stretch to add title
document.title = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;


const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();


// Add discount indicator
listing.addDiscountIndicator();
