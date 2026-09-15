/**
 * V.T. VENKATACHALAM CHETTIAR & SONS (VTV BRASS & BRONZE)
 * Client Application Logic
 * Adheres strictly to https://github.com/elayadesign/ai-design-skills
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTaglineReveal();
  initScrollAnimations();
  initProductCatalog();
  initSeeruCalculator();
  initVideoPlayer();
  initFaqAccordion();
  initCartDrawer();
  initInquiryForm();
});

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNavigation() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileOverlay = document.getElementById('nav-mobile-overlay');
  const mobileLinks = document.querySelectorAll('.nav-mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileOverlay.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileOverlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section tracking
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   B11. MANDATORY TAGLINE REVEAL (Word-by-word scroll contrast activation)
   ========================================================================== */
function initTaglineReveal() {
  const taglineEl = document.getElementById('tagline-reveal-text');
  if (!taglineEl) return;

  const text = taglineEl.textContent.trim();
  const words = text.split(/\s+/);
  taglineEl.innerHTML = '';

  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'tagline-word';
    span.textContent = word;
    span.dataset.index = index;
    taglineEl.appendChild(span);
    taglineEl.appendChild(document.createTextNode(' '));
  });

  const wordSpans = taglineEl.querySelectorAll('.tagline-word');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const rect = entry.boundingClientRect;
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 0.7), 0), 1);
        const countToReveal = Math.floor(progress * wordSpans.length);

        wordSpans.forEach((span, idx) => {
          if (idx <= countToReveal) {
            span.classList.add('revealed');
          } else {
            span.classList.remove('revealed');
          }
        });
      }
    });
  }, {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  });

  observer.observe(taglineEl);

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = taglineEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = Math.min(Math.max((windowHeight * 0.75 - rect.top) / (rect.height + 150), 0), 1);
          const count = Math.floor(progress * wordSpans.length);
          wordSpans.forEach((span, idx) => {
            if (idx < count) {
              span.classList.add('revealed');
            } else {
              span.classList.remove('revealed');
            }
          });
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   B7. SCROLL REVEALS
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   PRODUCT CATALOG WITH WEIGHT (KG) & DYNAMIC PRICING
   ========================================================================== */
const PRODUCTS = {
  'p-uruli': {
    id: 'p-uruli',
    name: 'Heirloom Bell-Metal Bronze Uruli',
    basePrice: 5800,
    priceFormatted: '₹5,800',
    image: 'assets/product_uruli.jpg',
    leadTime: 'Heavy cast · In Stock',
    composition: '78% Copper, 22% Pure Tin (Bell Metal)',
    weights: {
      '3.5kg': { weight: '3.5 kg', price: 5800, formatted: '₹5,800', diameter: '11 inch' },
      '5.2kg': { weight: '5.2 kg', price: 8400, formatted: '₹8,400', diameter: '14 inch' },
      '8.0kg': { weight: '8.0 kg', price: 12900, formatted: '₹12,900', diameter: '17 inch' }
    }
  },
  'p-paanai': {
    id: 'p-paanai',
    name: 'Tirunelveli Traditional Vengala Paanai',
    basePrice: 4200,
    priceFormatted: '₹4,200',
    image: 'assets/product_paanai.jpg',
    leadTime: 'Lathe grooved · In Stock',
    composition: 'Ayurvedic bell metal for rice & pongal',
    weights: {
      '2.2kg': { weight: '2.2 kg', price: 4200, formatted: '₹4,200', capacity: '2 Liters' },
      '3.8kg': { weight: '3.8 kg', price: 6800, formatted: '₹6,800', capacity: '3.5 Liters' },
      '5.5kg': { weight: '5.5 kg', price: 9600, formatted: '₹9,600', capacity: '5.5 Liters' }
    }
  },
  'p-kadai': {
    id: 'p-kadai',
    name: 'Heavy Forged Brass Kadai & Coffee Set',
    basePrice: 3850,
    priceFormatted: '₹3,850',
    image: 'assets/product_kadai.jpg',
    leadTime: 'Pure silver-tin lining (Eeyam poosal)',
    composition: '3.2mm thick heavy gauge pure virgin brass',
    weights: {
      '2.0kg': { weight: '2.0 kg', price: 3850, formatted: '₹3,850', diameter: '10 inch' },
      '3.2kg': { weight: '3.2 kg', price: 5600, formatted: '₹5,600', diameter: '12 inch' },
      '4.5kg': { weight: '4.5 kg', price: 7800, formatted: '₹7,800', diameter: '14 inch' }
    }
  }
};

let selectedProductWeights = {
  'p-uruli': '3.5kg',
  'p-paanai': '2.2kg',
  'p-kadai': '2.0kg'
};

function initProductCatalog() {
  const weightPills = document.querySelectorAll('.weight-pill');
  weightPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const parent = pill.closest('.weight-selector-row');
      const productId = pill.dataset.productId;
      const weightKey = pill.dataset.weight;

      parent.querySelectorAll('.weight-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      selectedProductWeights[productId] = weightKey;

      // Update card price
      const card = pill.closest('.product-card');
      const priceEl = card.querySelector('.product-price');
      const product = PRODUCTS[productId];
      const weightInfo = product.weights[weightKey];

      if (priceEl && weightInfo) {
        priceEl.textContent = weightInfo.formatted;
      }
    });
  });

  const addToCartButtons = document.querySelectorAll('.btn-add-cart');
  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.productId;
      const product = PRODUCTS[productId];
      const weightKey = selectedProductWeights[productId];
      const weightInfo = product.weights[weightKey];
      addToCart(product, weightInfo);
    });
  });
}

/* ==========================================================================
   WEDDING SEERU & WHOLESALE CALCULATOR
   ========================================================================== */
function initSeeruCalculator() {
  const packageSelect = document.getElementById('seeru-package');
  const weightSlider = document.getElementById('seeru-weight-slider');
  const weightDisplay = document.getElementById('seeru-weight-val');
  const estTotal = document.getElementById('seeru-est-total');
  const estSavings = document.getElementById('seeru-est-savings');
  const estItems = document.getElementById('seeru-est-items');
  const whatsappQuoteBtn = document.getElementById('seeru-whatsapp-btn');

  if (!packageSelect || !weightSlider) return;

  function calculateSeeru() {
    let weight = parseInt(weightSlider.value, 10);
    const selectedPkg = packageSelect.value;

    let baseRatePerKg = 1580; // Avg bell metal & heavy brass per kg
    let discountPercent = 12;

    if (weight >= 50) {
      discountPercent = 20;
    } else if (weight >= 30) {
      discountPercent = 16;
    }

    const rawTotal = weight * baseRatePerKg;
    const discountedTotal = Math.round(rawTotal * (1 - discountPercent / 100));
    const savings = rawTotal - discountedTotal;

    if (weightDisplay) weightDisplay.textContent = `${weight} kg Total Metal`;
    if (estTotal) estTotal.textContent = '₹' + discountedTotal.toLocaleString('en-IN');
    if (estSavings) estSavings.textContent = `Includes ${discountPercent}% Factory Wholesale Discount (Save ₹${savings.toLocaleString('en-IN')})`;

    let countItems = '12 Heirloom Cookware & Lamp Pieces';
    if (weight >= 50) {
      countItems = '32 Full Wedding Set: Paanai, Uruli, 4 Kadais, Kuthu Vilakku & Tins';
    } else if (weight >= 25) {
      countItems = '20 Essential Grihastha Set: Vengala Paanai, Uruli, 2 Kadais & Coffee Sets';
    }
    if (estItems) estItems.textContent = countItems;

    if (whatsappQuoteBtn) {
      const msg = encodeURIComponent(
        `Vanakkam VTV Chettiar & Sons. I would like to get a formal quote for a ${weight} kg ${selectedPkg} Wedding Seeru package (Approx ₹${discountedTotal.toLocaleString('en-IN')}). Please share itemized list and transit details to my address.`
      );
      whatsappQuoteBtn.href = `https://wa.me/919443123456?text=${msg}`;
    }
  }

  packageSelect.addEventListener('change', () => {
    if (packageSelect.value === 'Standard Seeru') {
      weightSlider.value = 25;
    } else if (packageSelect.value === 'Grand Vivaha') {
      weightSlider.value = 45;
    } else if (packageSelect.value === 'Wholesale Restaurant') {
      weightSlider.value = 80;
    }
    calculateSeeru();
  });

  weightSlider.addEventListener('input', () => {
    calculateSeeru();
  });

  calculateSeeru();
}

/* ==========================================================================
   VIDEO PLAYER CONTROLLER
   ========================================================================== */
function initVideoPlayer() {
  const videoEl = document.getElementById('foundry-video');
  const playBtn = document.getElementById('video-play-btn');
  const muteBtn = document.getElementById('video-mute-btn');
  const statusBadge = document.getElementById('video-status-text');

  if (!videoEl || !playBtn) return;

  playBtn.addEventListener('click', () => {
    if (videoEl.paused) {
      videoEl.play();
      playBtn.innerHTML = '<i class="ph ph-pause"></i>';
      if (statusBadge) statusBadge.textContent = 'Playing Foundry Reel';
    } else {
      videoEl.pause();
      playBtn.innerHTML = '<i class="ph ph-play"></i>';
      if (statusBadge) statusBadge.textContent = 'Paused';
    }
  });

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      videoEl.muted = !videoEl.muted;
      muteBtn.innerHTML = videoEl.muted 
        ? '<i class="ph ph-speaker-slash"></i>' 
        : '<i class="ph ph-speaker-high"></i>';
    });
  }

  const heroWatchBtn = document.getElementById('hero-watch-foundry-btn');
  if (heroWatchBtn) {
    heroWatchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSection = document.getElementById('foundry-reel-section');
      if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth' });
        videoEl.currentTime = 0;
        videoEl.play();
        playBtn.innerHTML = '<i class="ph ph-pause"></i>';
        if (statusBadge) statusBadge.textContent = 'Playing Foundry Reel';
      }
    });
  }
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.faq-item');
      const isOpen = parent.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   CART DRAWER & WHATSAPP ORDER DISPATCH
   ========================================================================== */
let cart = [];

function initCartDrawer() {
  const cartTrigger = document.getElementById('cart-drawer-trigger');
  const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
  const closeBtn = document.getElementById('cart-drawer-close');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  if (cartTrigger) {
    cartTrigger.addEventListener('click', () => openCart());
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeCart());
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) closeCart();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your order bag is currently empty.');
        return;
      }
      
      // Build WhatsApp message for direct factory dispatch
      let itemsList = cart.map(item => `• ${item.name} (${item.weight}) x${item.qty} = ${item.priceFormatted}`).join('%0A');
      let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      let message = `Vanakkam VTV Brass & Bronze, Tirunelveli.%0A%0AI would like to place an order for direct workshop dispatch:%0A${itemsList}%0A%0A*Total: ₹${total.toLocaleString('en-IN')}*%0A%0APlease confirm availability and shipping payment details.`;
      
      window.open(`https://wa.me/919443123456?text=${message}`, '_blank');
      showToast('Opening WhatsApp with your order details...');
    });
  }
}

function openCart() {
  const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
  if (drawerBackdrop) {
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
  if (drawerBackdrop) {
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function addToCart(product, weightInfo) {
  const existing = cart.find(item => item.id === product.id && item.weight === weightInfo.weight);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      weight: weightInfo.weight,
      price: weightInfo.price,
      priceFormatted: weightInfo.formatted,
      image: product.image,
      qty: 1
    });
  }
  updateCartUI();
  openCart();
  showToast(`Added ${product.name} (${weightInfo.weight}) to your order bag.`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const listEl = document.getElementById('cart-items-container');
  const countBadge = document.getElementById('cart-count-badge');
  const subtotalEl = document.getElementById('cart-subtotal');

  if (countBadge) {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    countBadge.textContent = totalCount;
  }

  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-tertiary);">
        <i class="ph ph-scales" style="font-size: 36px; margin-bottom: 12px; display: inline-block; color: var(--accent-brass);"></i>
        <p class="text-sm">Your metalware bag is currently empty.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    return;
  }

  let subtotal = 0;
  listEl.innerHTML = '';

  cart.forEach((item, index) => {
    subtotal += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div style="flex-grow: 1;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h4 class="text-sm font-semibold" style="max-width: 190px;">${item.name}</h4>
          <button class="btn-remove-item" data-index="${index}" style="background:none; border:none; color:var(--text-tertiary); cursor:pointer;">
            <i class="ph ph-trash" style="font-size: 16px;"></i>
          </button>
        </div>
        <p class="text-xs font-mono" style="color: var(--text-secondary); margin: 4px 0;">Weight: ${item.weight} · Qty: ${item.qty}</p>
        <span class="text-sm font-mono font-semibold" style="color: var(--accent-amber);">${item.priceFormatted}</span>
      </div>
    `;
    listEl.appendChild(row);
  });

  if (subtotalEl) {
    subtotalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');
  }

  listEl.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      removeFromCart(idx);
    });
  });
}

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="ph ph-check-circle" style="color: var(--accent-brass); font-size: 18px;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   WHOLESALE & BESPOKE INQUIRY FORM (Validation per B10)
   ========================================================================== */
function initInquiryForm() {
  const form = document.getElementById('wholesale-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('inquiry-name');
    const phoneInput = document.getElementById('inquiry-phone');
    const cityInput = document.getElementById('inquiry-city');
    const errorBox = document.getElementById('inquiry-error');

    errorBox.style.display = 'none';
    errorBox.textContent = '';

    if (!nameInput.value.trim()) {
      showInlineError('Please provide your full contact name.');
      nameInput.focus();
      return;
    }

    const phonePattern = /^[6-9]\d{9}$/;
    const cleanPhone = phoneInput.value.replace(/[\s\-+]/g, '').slice(-10);
    if (!phonePattern.test(cleanPhone)) {
      showInlineError('Please enter a valid 10-digit Indian mobile or WhatsApp number.');
      phoneInput.focus();
      return;
    }

    if (!cityInput.value.trim()) {
      showInlineError('Please specify your delivery city or town for freight calculation.');
      cityInput.focus();
      return;
    }

    showToast('Inquiry logged. VTV Tirunelveli desk will contact you with wholesale pricing within 6 hours.');
    form.reset();
  });

  function showInlineError(msg) {
    const errorBox = document.getElementById('inquiry-error');
    if (errorBox) {
      errorBox.style.display = 'block';
      errorBox.textContent = msg;
    }
  }
}
