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

## 🚀 Getting Started

### Prerequisites

No Node.js, npm, database, framework, or build tools are required.

You only need:

* A modern web browser
* A code editor such as Visual Studio Code
* Git, if cloning the repository

---

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

They are loaded in `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Nunito:wght@300;400;600&display=swap"
  rel="stylesheet"
>
```

An internet connection is required for the Google Fonts to load.

---

# 🔗 Production Links

Before deploying the website, replace placeholder links such as:

```html
href="#"
```

with the appropriate production URLs.

Important links to configure include:

* WhatsApp ordering number
* Full menu PDF
* Restaurant location
* Google Maps location
* Restaurant email
* Parent-company website
* Social-media profiles

You can search the repository for:

```text
href="#"
```

to identify remaining placeholder links.

---

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

## GitHub Pages

To deploy using GitHub Pages:

1. Push the project to GitHub.
2. Open the repository.
3. Go to **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, select the desired branch.
6. Select the root directory if prompted.
7. Save the configuration.
8. GitHub will generate the website URL.

The project does not require a build command.

---

# 📋 Production Checklist

Before launching the website:

### Business Information

* [ ] Verify restaurant name.
* [ ] Verify restaurant description.
* [ ] Verify parent-company information.
* [ ] Verify opening hours.
* [ ] Verify restaurant email address.
* [ ] Add the correct restaurant location.

### Menu

* [ ] Verify all menu categories.
* [ ] Verify menu item names.
* [ ] Verify descriptions.
* [ ] Verify prices.
* [ ] Confirm that prices are current.
* [ ] Add the final downloadable menu PDF.

### Ordering

* [ ] Replace the placeholder WhatsApp number.
* [ ] Test adding menu items.
* [ ] Test WhatsApp order generation.
* [ ] Test WhatsApp ordering on mobile.
* [ ] Test WhatsApp ordering on desktop.
* [ ] Confirm the generated order message is correct.

### Links

* [ ] Replace all `href="#"` placeholders.
* [ ] Add Google Maps location.
* [ ] Verify parent-company links.
* [ ] Verify email links.
* [ ] Add social-media links if applicable.

### Website

* [ ] Add restaurant photography.
* [ ] Add a favicon.
* [ ] Add SEO metadata.
* [ ] Add Open Graph metadata.
* [ ] Test responsive layouts.
* [ ] Test navigation.
* [ ] Test all menu tabs.
* [ ] Test all buttons.
* [ ] Test major browsers.
* [ ] Enable HTTPS.
* [ ] Connect the production domain.

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

# ♿ Accessibility

When expanding the website, maintain accessibility best practices.

Recommended practices include:

* Use semantic HTML.
* Maintain sufficient colour contrast.
* Ensure buttons and links are keyboard accessible.
* Provide descriptive `alt` text for images.
* Avoid communicating important information using colour alone.
* Maintain visible focus states.
* Use meaningful link text.
* Test keyboard navigation.
* Test with screen readers where practical.

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

A future implementation could use `schema.org` structured data for the restaurant.

For example, the site could eventually include structured data using the `Restaurant` schema.

---

# 🔒 Security Considerations

The current website is a static frontend and does not contain a backend or database.

For production:

* Do not place API keys in `main.js`.
* Do not store payment credentials in frontend JavaScript.
* Use HTTPS.
* Avoid collecting unnecessary customer information.
* Validate all data server-side if a backend is introduced.
* Secure any future APIs.
* Keep third-party dependencies updated if dependencies are introduced.

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
