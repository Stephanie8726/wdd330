import{g as l}from"./utils-67-oIHQZ.js";/* empty css              */function s(){let r=l("so-cart");Array.isArray(r)||(r=[r]);const a=r.map(t=>n(t));document.querySelector(".product-list").innerHTML=a.join("");const c=r.reduce((t,o)=>t+parseFloat(o.FinalPrice),0),e=document.querySelector(".total-price");e?e.textContent=`$${c.toFixed(2)}`:console.error("Total price not found.")}function n(r){return`<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${r.Image}"
        alt="${r.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${r.Name}</h2>
    </a>
    <p class="cart-card__color">${r.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$199.99</p>
    <p class="cart-card__price">$${r.FinalPrice}</p>
  </li>`}s();
