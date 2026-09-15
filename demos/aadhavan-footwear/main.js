// Aadhavan Handcrafted Chappals - Interactive Script

// State
let currentProduct = {
  name: "Classic Kolhapuri Chappals",
  size: "42",
  color: "Saddle Brown",
  price: "₹1,299"
};

// Toggle Mobile Navigation Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Update WhatsApp Link for PDP
function updatePdpWhatsAppLink() {
  const pdpBtn = document.getElementById("pdp-order-btn");
  if (!pdpBtn) return;
  const message = `Hello Aadhavan Atelier, I would like to order ${currentProduct.name} in Size: EU ${currentProduct.size}, Finish: ${currentProduct.color} (Price: ${currentProduct.price}).`;
  pdpBtn.href = `https://wa.me/919842215500?text=${encodeURIComponent(message)}`;
}

// Change Main Product Photo on PDP
function changePhoto(src) {
  const mainImg = document.getElementById("main-product-img");
  if (mainImg) {
    mainImg.style.opacity = "0.4";
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = "1";
    }, 150);
  }
}

// Select Product Size
function selectSize(size, el) {
  currentProduct.size = size;
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.classList.remove("border-2", "border-primary", "bg-primary", "text-on-primary");
    btn.classList.add("border-outline-variant/60");
  });
  if (el) {
    el.classList.add("border-2", "border-primary", "bg-primary", "text-on-primary");
    el.classList.remove("border-outline-variant/60");
  }
  updatePdpWhatsAppLink();
}

// Select Leather Color / Swatch
function selectColor(colorName, el) {
  currentProduct.color = colorName;
  const label = document.getElementById("selected-color-label");
  if (label) label.textContent = colorName;

  document.querySelectorAll(".swatch-btn").forEach(btn => {
    btn.classList.remove("border-2", "border-primary", "bg-surface-container");
    btn.classList.add("border-outline-variant/60", "bg-surface-container-low");
  });
  if (el) {
    el.classList.add("border-2", "border-primary", "bg-surface-container");
    el.classList.remove("border-outline-variant/60", "bg-surface-container-low");
  }
  updatePdpWhatsAppLink();
}

// Quick View Modal
function openQuickModal(title, price, imgSrc, desc) {
  const modal = document.getElementById("quick-modal");
  if (!modal) return;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-price").textContent = price;
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal-desc").textContent = desc;
  
  const waMsg = `Hello Aadhavan Atelier, I am interested in ordering: ${title} (${price}). Please guide me on available sizes.`;
  document.getElementById("modal-wa").href = `https://wa.me/919842215500?text=${encodeURIComponent(waMsg)}`;
  
  modal.classList.remove("hidden");
}

function closeQuickModal() {
  const modal = document.getElementById("quick-modal");
  if (modal) modal.classList.add("hidden");
}

// Sizing Guide Modal
function openSizeModal() {
  const modal = document.getElementById("size-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeSizeModal() {
  const modal = document.getElementById("size-modal");
  if (modal) modal.classList.add("hidden");
}

// Close modals on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeQuickModal();
    closeSizeModal();
  }
});
