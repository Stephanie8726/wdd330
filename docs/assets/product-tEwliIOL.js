import{s as r,a as d}from"./utils-67-oIHQZ.js";function s(t){if(t.ok)return t.json();throw new Error("Bad Response")}class c{constructor(a){this.category=a,this.path=`../json/${this.category}.json`}getData(){return fetch(this.path).then(s).then(a=>a)}async findProductById(a){return(await this.getData()).find(o=>o.Id===a)}}function i(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Image}"
      alt="${t.NameWithoutBrand}"
    />
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product__color">${t.Colors[0].ColorName}</p>
    <p class="product__description">
    ${t.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div></section>`}class n{constructor(a,e){this.productId=a,this.product={},this.dataSource=e}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){r("so-cart",this.product)}renderProductDetails(a){document.querySelector(a).insertAdjacentHTML("afterBegin",i(this.product))}}loadHeaderFooter();const u=new c("tents"),l=d("product"),h=new n(l,u);h.init();
