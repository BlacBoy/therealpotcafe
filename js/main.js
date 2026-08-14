/* ============================================
   The Real Pot Café
   Main JavaScript
   ============================================ */

/* --- MENU DATA ---
   To add or edit menu items, just update this object.
   Each key is a tab category. Each item has: name, description, price.
   ============================================ */
const menuData = {
  'The Rice Gallery [Main Dishes]': [
    { name: 'Smoky Jollof Rice',       desc: 'Party-style jollof with that signature smoky bottom',          price: '₦2,000' },
    { name: 'Native Jollof (Basmati)', desc: 'Aromatic basmati native jollof, a premium favourite',          price: '₦3,500' },
    { name: 'Seafood Rice',            desc: 'Loaded with fresh seafood, rich and flavourful',               price: '₦3,500' },
    { name: 'Coconut Rice',            desc: 'Luxury rice cooked in rich coconut cream',                     price: '₦3,500' },
    { name: 'Paella Rice',             desc: 'Nigerian twist on the Spanish classic — a must-try',           price: '₦3,500' },
    { name: 'Asun Rice',               desc: 'White rice served with spicy peppered goat meat (asun)',       price: '₦4,000' },
    { name: 'White Rice',              desc: 'Plain steamed white rice',                                     price: '₦800'   },
    { name: 'Ofada Rice',              desc: 'Locally grown ofada rice with native sauce',                   price: '₦1,500' },
    { name: 'Rissi Bissi',             desc: 'Rice and peas cooked together, simple and comforting',         price: '₦1,500' },
  ],
  'The Swallow Selection': [
    { name: 'Seafood Okro',   desc: 'Rich, viscous okro soup loaded with assorted seafood',             price: '₦6,000' },
    { name: 'Efo Riro',       desc: 'Classic Yoruba spinach stew, slow-cooked and hearty',              price: '₦2,200' },
    { name: 'Efo Elegusi',    desc: 'Melon seed soup cooked with assorted meat and vegetables',         price: '₦1,500' },
    { name: 'Edikaikong',     desc: 'Rich Cross River leafy vegetable soup',                            price: '₦2,000' },
    { name: 'Okro Soup',      desc: 'Classic okro soup with assorted meats',                            price: '₦1,000' },
    { name: 'Afang Soup',     desc: 'Calabar style afang soup',                                         price: '₦2,000' },
    { name: 'Ogbono Soup',    desc: 'Velvety, thick, Ogbono soup',                                      price: '₦2000'  },
	{ name: 'Poundo Yam',     desc: 'Smooth and stretchy poundo yam — a Nigerian staple',               price: '₦800'   },
    { name: 'Eba',            desc: 'Garri-based swallow, perfect with any soup',                       price: '₦500'   },
    { name: 'Amala',          desc: 'Yam flour swallow, pairs beautifully with ewedu and/or gbegiri',   price: '₦500'   },
    { name: 'Semo',           desc: 'Semolina swallow, smooth and light',                               price: '₦500'   },
  ],
  'The Protein Pit': [
    { name: 'Roasted Chicken',          desc: 'Whole roasted chicken seasoned with our special blend',   price: '₦3,400' },
    { name: 'Chilli Chicken',           desc: 'Tender chicken in a fiery chilli sauce',                  price: '₦2,500' },
    { name: 'Asun',                     desc: 'Spicy peppered goat meat, smoky and irresistible',        price: '₦4,000' },
    { name: 'Peppered Turkey (Large)',  desc: 'Generous portion of peppered turkey, ODC size',           price: '₦3,500' },
    { name: 'Goat Meat',                desc: 'Tender goat meat in a rich pepper sauce',                 price: '₦2,400' },
    { name: 'Titus Fish in Stew',       desc: 'Mackerel fish slow-cooked in tomato stew',                price: '₦2,000' },
    { name: 'Panla Fish',               desc: 'Delicious panla fish stirred in rich stew.',              price: '₦3,300' },
    { name: 'Beef',                     desc: 'Well-seasoned, tender beef cuts',                         price: '₦1,200' },
    { name: 'Shaki',                    desc: 'Tripe cooked in rich seasoning',                          price: '₦1,200' },
  ],
  'Drinks': [
    { name: 'Coke (PET)',          desc: 'Cold Coca-Cola in a PET bottle',                    price: '₦800'   },
    { name: 'Malt Drink',          desc: 'Rich, creamy malt beverage',                        price: '₦1,300' },
    { name: 'Hollandia 500ml',     desc: 'Hollandia yoghurt drink, smooth and refreshing',    price: '₦1,600' },
    { name: 'Hollandia 1 Litre',   desc: 'Full litre of Hollandia yoghurt drink',             price: '₦4,000' },
    { name: 'Fayrouz PET',         desc: 'Fruity non-alcoholic malt drink',                   price: '₦1,100' },
    { name: 'Chi Exotic (1 Litre)',desc: '100% fruit juice in 1 litre pack',                  price: '₦1,800' },
    { name: 'Chivita Active (Big)',desc: 'Active fruit drink, large size',                    price: '₦3,400' },
    { name: '5 Alive Pulpy (Big)', desc: 'Pulpy fruit juice, large bottle',                   price: '₦2,500' },
    { name: 'Water (Eva Medium)',  desc: 'Medium-size Eva bottled water',                     price: '₦500'   },
  ],
  'Pastries': [
    { name: 'Chicken Pie',   desc: 'Flaky pastry filled with seasoned chicken',     price: '₦1,600' },
    { name: 'Meat Pie',      desc: 'Classic Nigerian meat pie with potato filling', price: '₦1,300' },
    { name: 'Sausage Roll',  desc: 'Crispy pastry wrapped around seasoned sausage', price: '₦800'   },
    { name: 'Scotch Egg',    desc: 'Hard-boiled egg wrapped in seasoned meat',      price: '₦800'   },
    { name: 'Jam Doughnut',  desc: 'Soft doughnut filled with fruity jam',          price: '₦600'   },
    { name: 'Hot Dog Bread', desc: 'Fresh-baked hot dog bread roll',                price: '₦1,000' },
    { name: 'Hot Bread',     desc: 'Freshly baked loaf, straight from the oven',    price: '₦800'   },
    { name: 'White Bread',   desc: 'Sliced white loaf',                             price: '₦2,000' },
  ],
};

/* --- WHATSAPP PHONE NUMBER ---
   Format: country code + number, no spaces, dashes or + sign.
   ============================================ */
const WHATSAPP_NUMBER = '2347039025475';

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
  showToast(`${name} added — tap the WhatsApp button to send your order`);

  // Update WhatsApp links and badge
  updateWhatsAppLinks();
  updateOrderBadge();
}

function buildWhatsAppMessage() {
  if (orderItems.length === 0) return `Hi, I'd like to place an order!`;
  const lines = orderItems.map(item => `• ${item.name} (${item.price})`).join('\n');
  return `Hi, I'd like to order:\n\n${lines}\n\nPlease confirm availability and delivery details. Thank you!`;
}

function updateWhatsAppLinks() {
  const message = encodeURIComponent(buildWhatsAppMessage());
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  // Use Set to avoid updating the same element twice
  const links = new Set([
    ...document.querySelectorAll('.btn-whatsapp'),
    ...document.querySelectorAll('.whatsapp-link'),
  ]);
  links.forEach(link => {
    link.href = url;
  });
}

/* --- FLOATING WHATSAPP BUTTON --- */
function initFloatingWhatsApp() {
  const btn = document.createElement('a');
  btn.id = 'wa-float';
  btn.className = 'whatsapp-link';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.858L.057 23.486a.5.5 0 0 0 .603.634l5.799-1.52A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.524-5.208-1.435l-.372-.22-3.853 1.011 1.029-3.762-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
    <span id="wa-badge" style="display:none">0</span>
  `;

  // Inline styles for the floating button
  btn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37,211,102,0.4);
    z-index: 998;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  `;

  // Badge styles
  const badge = btn.querySelector('#wa-badge');
  badge.style.cssText = `
    position: absolute;
    top: -4px;
    right: -4px;
    background: #C0392B;
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
  `;

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.1)';
    btn.style.boxShadow = '0 6px 25px rgba(37,211,102,0.5)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)';
  });

  document.body.appendChild(btn);
}

function updateOrderBadge() {
  const badge = document.getElementById('wa-badge');
  if (!badge) return;
  if (orderItems.length > 0) {
    badge.style.display = 'flex';
    badge.textContent = orderItems.length;
  } else {
    badge.style.display = 'none';
  }
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
  initFloatingWhatsApp(); // floating green button bottom-right
  updateWhatsAppLinks();  // set default WhatsApp link on load
});