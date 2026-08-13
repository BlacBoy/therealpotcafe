# The Real Pot Café

<p align="center">
  <strong>Authentic Nigerian Cuisine</strong><br>
  A modern, responsive restaurant website for The Real Pot Café.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## 📖 About

**The Real Pot Café** is a responsive restaurant website designed to showcase authentic Nigerian cuisine and provide customers with a simple way to browse the menu and place orders through WhatsApp.

The website is built with **HTML5, CSS3, and vanilla JavaScript**, making it lightweight, easy to maintain, and suitable for static hosting platforms such as GitHub Pages, Netlify, Vercel, Cloudflare Pages, or traditional web hosting.

The Real Pot Café is presented as a subsidiary of **Opeyemi Ononuga General Enterprises**.

---

## ✨ Features

* 📱 Fully responsive design for desktop, tablet, and mobile
* 🍲 Dynamic menu generated from JavaScript data
* 🗂️ Interactive menu categories
* 🛒 Add-to-order functionality
* 📲 WhatsApp-based ordering
* 🔔 Order confirmation toast notifications
* 🧭 Smooth scrolling navigation
* 📌 Active navigation-section highlighting
* ✨ Scroll-triggered fade-in animations
* 🕐 Opening-hours section
* 📖 Restaurant story/about section
* 🔗 Parent-company integration
* 🎨 Nigerian-inspired warm colour palette
* ⚡ No frontend framework or build system required
* 🌐 Suitable for static website hosting

---

## 🛠️ Tech Stack

| Technology             | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| HTML5                  | Website structure and semantic markup              |
| CSS3                   | Layout, responsive design, animations, and styling |
| JavaScript ES6+        | Dynamic menu and interactive functionality         |
| Google Fonts           | Playfair Display and Nunito typography             |
| WhatsApp Click-to-Chat | Customer ordering                                  |

---

## 📁 Project Structure

```text
the-real-pot-cafe/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    └── main.js
```

### File Description

| File            | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| `index.html`    | Main website page and page structure                                       |
| `css/style.css` | Complete website styling and responsive layout                             |
| `js/main.js`    | Menu data, menu rendering, WhatsApp ordering, animations, and interactions |
| `README.md`     | Project documentation                                                      |

---

# 🍲 Managing the Menu

All menu items are stored inside:

```text
js/main.js
```

The main data structure is:

```javascript
const menuData = {
  'Rice Dishes': [
    {
      name: 'Smoky Jollof Rice',
      desc: 'Party-style jollof with that signature smoky bottom',
      price: '₦2,000'
    }
  ]
};
```

Each menu item contains:

| Property | Description       |
| -------- | ----------------- |
| `name`   | Name of the dish  |
| `desc`   | Short description |
| `price`  | Display price     |

---

## Adding a Menu Item

For example:

```javascript
{
  name: 'Fried Rice',
  desc: 'Fragrant Nigerian fried rice with vegetables and seasoning',
  price: '₦2,500'
}
```

Add it to the appropriate category.

---

## Adding a New Category

Create another category inside `menuData`:

```javascript
'Breakfast': [
  {
    name: 'Akara & Pap',
    desc: 'Fresh akara served with smooth Nigerian pap',
    price: '₦2,000'
  }
]
```

The website automatically generates the corresponding menu tab.

No changes to the HTML are required.

---

# 🛒 How Ordering Works

Customers can browse the menu and click:

```text
+ Add
```

on any menu item.

The selected items are stored temporarily in the browser:

```javascript
let orderItems = [];
```

The website then creates a WhatsApp message containing the selected items.

For example:

```text
Hi, I'd like to order:

• Smoky Jollof Rice (₦2,000)
• Asun (₦4,000)
• Coke (PET) (₦800)

Please confirm availability and delivery details. Thank you!
```

The customer can then send the order directly through WhatsApp.

---

## ⚠️ Current Ordering Limitations

The current ordering system is intentionally lightweight.

It does **not** currently include:

* Online payment processing
* Customer accounts
* Order history
* Server-side order storage
* Inventory management
* Delivery tracking
* Customer database
* Restaurant administration dashboard
* Automatic order confirmation
* Order status management

The current system simply builds a WhatsApp order message.

---

# 🎨 Styling

The main stylesheet is:

```text
css/style.css
```

The site's primary design variables are defined inside `:root`:

```css
:root {
  --red: #C0392B;
  --red-dark: #96281B;
  --orange: #E67E22;
  --cream: #FDF6EC;
  --dark: #1A0A00;
  --dark-2: #2C1503;
  --text: #3D1F00;
  --text-light: #7A5230;
  --border: rgba(192,57,43,0.15);
  --gold: #C9A84C;
}
```

Changing these variables allows the overall colour scheme to be modified from one location.

---

# 🔤 Typography

The website uses two Google Fonts:

* **Playfair Display** — headings and decorative typography
* **Nunito** — body text and interface elements

# 🌐 Deployment

Because this project is a static website, it can be deployed without a backend server.

Supported deployment options include:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages
* cPanel/shared hosting
* Apache
* Nginx
* Any static web server

---

# 🧪 Testing

The project currently does not use an automated testing framework.

Manual testing should be performed before every production release.

## Navigation

Test:

* Menu
* About
* Hours
* Find Us
* Order Now
* WhatsApp buttons

## Menu

Verify:

* All categories load.
* Category tabs switch correctly.
* Menu items render correctly.
* Prices display correctly.
* Add buttons work.
* Toast notification appears.
* WhatsApp links update correctly.

## Responsive Design

Test the website on:

* Desktop
* Laptop
* Tablet
* Mobile portrait
* Mobile landscape

## Browser Testing

Recommended browsers:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Android browsers
* iOS Safari

---

# 🔍 SEO

The current project contains basic HTML metadata, but the production website should be enhanced with:

* Meta description
* Canonical URL
* Open Graph metadata
* Social sharing metadata
* Restaurant structured data
* Location information
* Relevant Nigerian cuisine keywords

---

# 🗺️ Roadmap

Potential future improvements include:

* [ ] Shopping cart sidebar
* [ ] Item quantity controls
* [ ] Remove items from order
* [ ] Automatic order total
* [ ] Delivery/pickup selection
* [ ] Customer checkout form
* [ ] Online payment integration
* [ ] Database-backed ordering
* [ ] Restaurant administration dashboard
* [ ] Inventory management
* [ ] Order status tracking
* [ ] Delivery tracking
* [ ] Customer order history
* [ ] Restaurant image gallery
* [ ] Customer reviews
* [ ] Google Maps integration
* [ ] Restaurant schema markup
* [ ] Improved SEO
* [ ] Progressive Web App support

---

# 🤝 Contributing

If this repository is made public and contributions are accepted:

### 1. Fork the repository

```bash
git clone https://github.com/YOUR-USERNAME/the-real-pot-cafe.git
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

Update the relevant HTML, CSS, or JavaScript files.

### 4. Test your changes

Ensure that:

* The website loads correctly.
* Existing functionality still works.
* Responsive layouts remain intact.
* WhatsApp ordering still works.
* No placeholder links were accidentally introduced.

### 5. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

### 6. Push your branch

```bash
git push origin feature/your-feature
```

### 7. Open a Pull Request

Provide a clear description of:

* What changed
* Why it changed
* How it was tested

For a private business repository, contribution access should be limited to authorized collaborators.

---

# 📄 License

This project and its restaurant branding/content are proprietary to **The Real Pot Café** and **Opeyemi Ononuga General Enterprises**, unless a separate license is explicitly provided.

The following should not be redistributed, resold, or commercially reused without authorization:

* Restaurant branding
* Logo and visual identity
* Menu content
* Business information
* Restaurant images
* Website content
* Proprietary business information

---

# 👤 Project Information

**The Real Pot Café**
*Authentic Nigerian Cuisine*

**Parent Company:** Opeyemi Ononuga General Enterprises

---

<p align="center">
  Made for The Real Pot Café 🇳🇬
</p>
