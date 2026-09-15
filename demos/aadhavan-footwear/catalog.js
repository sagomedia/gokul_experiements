// Aadhavan Handcrafted Chappals - Catalog & Cart Engine

// Cart State
let cart = [
  {
    id: "kolhapuri-42",
    name: "Classic Kolhapuri",
    price: 1299,
    image: "images/kolhapuri.png",
    variant: "Deep Terracotta / Size 42",
    qty: 1
  }
];

let wishlist = ["Classic Kolhapuri"];

// Render Cart UI
function renderCart() {
  const list = document.getElementById("cart-items-list");
  const subtotalEl = document.getElementById("cart-subtotal");
  const badgeEl = document.getElementById("cart-badge");
  const checkoutBtn = document.getElementById("cart-checkout-btn");
  
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="text-center py-12 text-on-surface-variant space-y-3">
        <span class="material-symbols-outlined text-4xl text-outline-variant">shopping_bag</span>
        <p class="text-xs uppercase tracking-wider font-semibold">Your Ledger is empty.</p>
        <p class="text-xs">Explore our archive and add a handcrafted pair.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (badgeEl) badgeEl.textContent = "0";
    if (checkoutBtn) {
      checkoutBtn.href = "https://wa.me/919842215500?text=Hello%20Aadhavan%20Atelier,%20I%20am%20browsing%20the%20catalog.";
    }
    return;
  }

  let total = 0;
  let totalQty = 0;
  let summaryText = "Hello Aadhavan Atelier, I would like to place an order for the following ledger items:\n";

  list.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    totalQty += item.qty;
    summaryText += `• ${item.qty}x ${item.name} (${item.variant}) — ₹${itemTotal}\n`;

    return `
      <div class="flex gap-4 pb-4 border-b border-outline-variant/20 border-dashed items-center">
        <div class="w-16 h-16 bg-surface-container-low rounded border border-outline-variant/30 p-1 flex-shrink-0 flex items-center justify-center">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain mix-blend-multiply"/>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start">
            <h4 class="font-serif text-sm font-bold text-on-surface truncate">${item.name}</h4>
            <button onclick="removeFromCart(${idx})" class="text-outline-variant hover:text-red-600 transition-colors p-1" title="Remove">
              <span class="material-symbols-outlined text-base">delete</span>
            </button>
          </div>
          <p class="text-[11px] text-on-surface-variant truncate">${item.variant}</p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center border border-outline-variant/50 rounded bg-surface">
              <button onclick="changeQty(${idx}, -1)" class="px-2 py-0.5 text-xs text-on-surface hover:bg-surface-variant">−</button>
              <span class="px-2 text-xs font-bold text-on-surface">${item.qty}</span>
              <button onclick="changeQty(${idx}, 1)" class="px-2 py-0.5 text-xs text-on-surface hover:bg-surface-variant">+</button>
            </div>
            <span class="font-serif text-sm font-bold text-primary">₹${itemTotal}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = `₹${total.toLocaleString()}`;
  if (badgeEl) badgeEl.textContent = totalQty.toString();

  summaryText += `Total Order: ₹${total.toLocaleString()}\nFree Pan-India Delivery. Please confirm bank/UPI details or COD.`;
  if (checkoutBtn) {
    checkoutBtn.href = `https://wa.me/919842215500?text=${encodeURIComponent(summaryText)}`;
  }
}

// Cart Drawer Toggle
function toggleCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  if (drawer.classList.contains("translate-x-full")) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.remove("opacity-0");
      overlay.classList.add("opacity-100");
    }, 10);
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
    document.body.style.overflow = "";
  }
}

// Add To Cart
function addToCart(name, price, image, variant) {
  const existing = cart.find(i => i.name === name && i.variant === variant);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: `${name}-${variant}`, name, price, image, variant, qty: 1 });
  }
  renderCart();
  toggleCartDrawer();
}

// Modify Qty
function changeQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  renderCart();
}

function removeFromCart(idx) {
  if (cart[idx]) {
    cart.splice(idx, 1);
    renderCart();
  }
}

// Filters & Facets
function filterCategory(cat) {
  document.querySelectorAll(".cat-filter").forEach(el => {
    el.classList.remove("text-primary", "font-bold", "underline");
    el.classList.add("text-on-surface-variant");
  });
  if (event && event.target) {
    event.target.classList.add("text-primary", "font-bold", "underline");
    event.target.classList.remove("text-on-surface-variant");
  }

  const items = document.querySelectorAll(".product-item");
  items.forEach(item => {
    if (cat === "all" || item.dataset.category === cat) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

function filterPrice(maxPrice) {
  document.getElementById("price-display").textContent = `₹${parseInt(maxPrice).toLocaleString()}`;
  const items = document.querySelectorAll(".product-item");
  items.forEach(item => {
    const price = parseInt(item.dataset.price);
    if (price <= maxPrice) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

function filterSize(size, btn) {
  document.querySelectorAll(".size-pill").forEach(p => {
    p.classList.remove("border-2", "border-primary", "bg-primary", "text-on-primary");
    p.classList.add("border-outline-variant/60", "text-on-surface-variant");
  });
  if (btn) {
    btn.classList.add("border-2", "border-primary", "bg-primary", "text-on-primary");
    btn.classList.remove("border-outline-variant/60", "text-on-surface-variant");
  }
}

function filterColor(colorName) {
  // Demo notification for color filter
  console.log("Filtered color:", colorName);
}

function removeChip(id) {
  const chip = document.getElementById(id);
  if (chip) chip.remove();
}

function resetFilters() {
  document.querySelectorAll(".product-item").forEach(item => item.classList.remove("hidden"));
  const slider = document.getElementById("price-slider");
  if (slider) {
    slider.value = 2000;
    document.getElementById("price-display").textContent = "₹2,000";
  }
}

function sortProducts() {
  const select = document.getElementById("sort-select");
  const grid = document.getElementById("product-grid");
  const items = Array.from(document.querySelectorAll(".product-item"));
  
  if (select.value === "low-high") {
    items.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
  } else if (select.value === "high-low") {
    items.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
  }
  items.forEach(item => grid.appendChild(item));
}

function setView(viewType) {
  const grid = document.getElementById("product-grid");
  const gridBtn = document.getElementById("grid-view-btn");
  const listBtn = document.getElementById("list-view-btn");

  if (viewType === "list") {
    grid.classList.remove("sm:grid-cols-2", "xl:grid-cols-2");
    grid.classList.add("grid-cols-1");
    listBtn.classList.add("bg-primary", "text-on-primary");
    listBtn.classList.remove("text-on-surface-variant");
    gridBtn.classList.remove("bg-primary", "text-on-primary");
    gridBtn.classList.add("text-on-surface-variant");
  } else {
    grid.classList.add("sm:grid-cols-2", "xl:grid-cols-2");
    grid.classList.remove("grid-cols-1");
    gridBtn.classList.add("bg-primary", "text-on-primary");
    gridBtn.classList.remove("text-on-surface-variant");
    listBtn.classList.remove("bg-primary", "text-on-primary");
    listBtn.classList.add("text-on-surface-variant");
  }
}

function toggleWishlistItem(btn, title) {
  const icon = btn.querySelector(".material-symbols-outlined");
  if (wishlist.includes(title)) {
    wishlist = wishlist.filter(t => t !== title);
    btn.classList.remove("text-red-600");
    btn.classList.add("text-outline");
    if (icon) icon.style.fontVariationSettings = "'FILL' 0";
  } else {
    wishlist.push(title);
    btn.classList.add("text-red-600");
    btn.classList.remove("text-outline");
    if (icon) icon.style.fontVariationSettings = "'FILL' 1";
  }
  const badge = document.getElementById("wishlist-badge");
  if (badge) badge.textContent = wishlist.length.toString();
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  
  // Mobile menu
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
