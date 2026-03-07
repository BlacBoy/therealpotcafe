/* ============================================
   The Real Pot Café
   Main JavaScript
   ============================================ */

/* --- MENU DATA ---
   To add or edit menu items, just update this object.
   Each key is a tab category. Each item has: name, description, price.
   ============================================ */
const menuData = {
  'Rice Dishes': [
    { name: 'Smoky Jollof Rice',       desc: 'Party-style jollof with that signature smoky bottom',         price: '₦2,000' },
    { name: 'Native Jollof (Basmati)', desc: 'Aromatic basmati native jollof, a premium favourite',         price: '₦3,500' },
    { name: 'Seafood Rice',            desc: 'Loaded with fresh seafood, rich and flavourful',               price: '₦3,500' },
    { name: 'Coconut Rice',            desc: 'Luxury rice cooked in rich coconut cream',                     price: '₦3,500' },
    { name: 'Paella Rice',             desc: 'Nigerian twist on the Spanish classic — a must-try',           price: '₦3,500' },
    { name: 'Asun Rice',               desc: 'White rice served with spicy peppered goat meat (asun)',       price: '₦4,000' },
    { name: 'White Rice',              desc: 'Plain steamed white rice',                                     price: '₦800'   },
    { name: 'Ofada Rice',              desc: 'Locally grown ofada rice with native sauce',                   price: '₦1,500' },
    { name: 'Rissi Bissi',             desc: 'Rice and peas cooked together, simple and comforting',         price: '₦1,500' },
  ],
  'Soups & Swallows': [
    { name: 'Seafood Okro',   desc: 'Rich, viscous okro soup loaded with assorted seafood',         price: '₦6,000' },
    { name: 'Efo Riro',       desc: 'Classic Yoruba spinach stew, slow-cooked and hearty',          price: '₦2,200' },
    { name: 'Efo Elegusi',    desc: 'Melon seed soup cooked with assorted meat and vegetables',     price: '₦1,500' },
    { name: 'Edikaikong',     desc: 'Rich Cross River leafy vegetable soup',                        price: '₦2,000' },
    { name: 'Okro Soup',      desc: 'Classic okro soup with assorted meats',                        price: '₦1,000' },
    { name: 'Pounded Yam',    desc: 'Smooth and stretchy pounded yam — a Nigerian staple',          price: '₦800'   },
    { name: 'Eba',            desc: 'Garri-based swallow, perfect with any soup',                   price: '₦400'   },
    { name: 'Amala',          desc: 'Yam flour swallow, pairs beautifully with ewedu or gbegiri',   price: '₦400'   },
    { name: 'Semo',           desc: 'Semolina swallow, smooth and light',                           price: '₦400'   },
  ],
  'Protein': [
    { name: 'Roasted Chicken',          desc: 'Whole roasted chicken seasoned with our special blend',   price: '₦3,400' },
    { name: 'Chilli Chicken',           desc: 'Tender chicken in a fiery chilli sauce',                  price: '₦2,500' },
    { name: 'Asun',                     desc: 'Spicy peppered goat meat, smoky and irresistible',        price: '₦4,000' },
    { name: 'Peppered Turkey (Large)',  desc: 'Generous portion of peppered turkey, ODC size',           price: '₦3,500' },
    { name: 'Goat Meat',                desc: 'Tender goat meat in a rich pepper sauce',                 price: '₦2,400' },
    { name: 'Titus Fish in Stew',       desc: 'Mackerel fish slow-cooked in tomato stew',               price: '₦2,000' },
    { name: 'Mexican Fish',             desc: 'Spiced fish with a Mexican-Nigerian flavour twist',       price: '₦3,300' },
    { name: 'Beef',                     desc: 'Well-seasoned, tender beef cuts',                         price: '₦1,200' },
    { name: 'Shaki',                    desc: 'Tripe cooked in rich seasoning',                          price: '₦1,200' },
  ],
  'Drinks': [
    { name: 'Coke (PET)',          desc: 'Cold Coca-Cola in a PET bottle',                    price: '₦800'   },
    { name: 'Malt Drink',          desc: 'Rich, creamy malt beverage',                        price: '₦1,300' },
    { name: 'Hollandia 500ml',     desc: 'Hollandia yoghurt drink, smooth and refreshing',   price: '₦1,600' },
    { name: 'Hollandia 1 Litre',   desc: 'Full litre of Hollandia yoghurt drink',            price: '₦4,000' },
    { name: 'Fayrouz PET',         desc: 'Fruity non-alcoholic malt drink',                   price: '₦1,100' },
    { name: 'Chi Exotic (1 Litre)',desc: '100% fruit juice in 1 litre pack',                 price: '₦1,800' },
    { name: 'Chivita Active (Big)',desc: 'Active fruit drink, large size',                    price: '₦3,400' },
    { name: '5 Alive Pulpy (Big)', desc: 'Pulpy fruit juice, large bottle',                  price: '₦2,500' },
    { name: 'Water (Eva Medium)',  desc: 'Medium-size Eva bottled water',                     price: '₦500'   },
  ],
  'Pastries': [
    { name: 'Chicken Pie',   desc: 'Flaky pastry filled with seasoned chicken',     price: '₦1,600' },
    { name: 'Meat Pie',      desc: 'Classic Nigerian meat pie with potato filling', price: '₦1,300' },
    { name: 'Sausage Roll',  desc: 'Crispy pastry wrapped around seasoned sausage', price: '₦800'   },
    { name: 'Scotch Egg',    desc: 'Hard-boiled egg wrapped in seasoned meat',      price: '₦800'   },
    { name: 'Jam Doughnut',  desc: 'Soft doughnut filled with fruity jam',          price: '₦600'   },
    { name: 'Hot Dog Bread', desc: 'Fresh-baked hot dog bread roll',                price: '₦1,000' },
    { name: 'Hot Bread',     desc: 'Freshly baked loaf, straight from the oven',   price: '₦800'   },
    { name: 'White Bread',   desc: 'Sliced white loaf',                             price: '₦2,000' },
  ],
};

/* --- WHATSAPP PHONE NUMBER ---
   Replace with the real number before going live.
   Format: country code + number, no spaces or dashes.
   ============================================ */
const WHATSAPP_NUMBER = '234XXXXXXXXXX';

/* ============================================
   RENDER MENU
   ============================================ */
function buildMenuCard(item) {
  return `
    <div class="menu-card">
      <div>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
      </div>
      <div class="menu-card-right">
        <div class="price">${item.price}</div>
        <button class="add-btn" data-name="${item.name}" data-price="${item.price}">+ Add</button>
      </div>
    </div>
  `;
}

function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  const items = menuData[category] || [];
  grid.innerHTML = items.map(buildMenuCard).join('');

  // Re-attach add button listeners
  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', handleAddToOrder);
  });
}

/* --- TAB SWITCHING --- */
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const categories = Object.keys(menuData);

  // Build tabs dynamically from menuData keys
  const tabContainer = document.querySelector('.menu-tabs');
  tabContainer.innerHTML = categories.map((cat, i) =>
    `<button class="tab ${i === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>`
  ).join('');

  // Render first tab
  renderMenu(categories[0]);

  // Tab click events
  tabContainer.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.category);
    });
  });
}

/* --- WHATSAPP ORDER HANDLER --- */
let orderItems = [];

function handleAddToOrder(e) {
  const name = e.target.dataset.name;
  const price = e.target.dataset.price;

  orderItems.push({ name, price });
  showToast(`${name} added — tap WhatsApp to send order`);

  // Update WhatsApp links with order summary
  updateWhatsAppLinks();
}

function buildWhatsAppMessage() {
  if (orderItems.length === 0) return `Hi, I'd like to place an order!`;
  const lines = orderItems.map(item => `• ${item.name} (${item.price})`).join('\n');
  return `Hi, I'd like to order:\n\n${lines}\n\nPlease confirm availability and delivery details. Thank you!`;
}

function updateWhatsAppLinks() {
  const message = encodeURIComponent(buildWhatsAppMessage());
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  document.querySelectorAll('.btn-whatsapp, .whatsapp-link').forEach(link => {
    link.href = url;
  });
}

/* --- TOAST NOTIFICATION --- */
function showToast(message) {
  const toast = document.getElementById('cart-toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* --- NAV SCROLL HIGHLIGHT --- */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
        });
      }
    });
  });
}

/* --- FADE IN ON SCROLL --- */
function initFadeIn() {
  const els = document.querySelectorAll('.feature, .hour-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* --- INIT ALL --- */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initNavHighlight();
  initFadeIn();
  updateWhatsAppLinks(); // set default WhatsApp link on load
});
