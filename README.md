The Real Pot Café

A responsive restaurant website for The Real Pot Café, an authentic Nigerian cuisine brand. The site presents the restaurant's story, menu, opening hours, contact information, and a simple WhatsApp-based ordering flow.

Features

Responsive layout for desktop, tablet, and mobile.

Fixed navigation bar with smooth scrolling.

Hero section with restaurant branding and calls to action.

Dynamic menu rendered from JavaScript data.

Menu categories/tabs:

Rice Dishes

Soups & Swallows

Protein

Drinks

Pastries

Add-to-order functionality.

WhatsApp order generation with selected menu items.

Toast notifications when items are added to an order.

Scroll-based navigation highlighting.

Fade-in animations for feature and opening-hours cards.

Opening-hours section.

Restaurant story/about section.

Parent-company links for Opeyemi Ononuga General Enterprises.

Responsive mobile styling.

Project Structure

the-real-pot-cafe/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── main.js

Getting Started

No build tools or frameworks are required.

1. Download or clone the project

Place the files in the structure shown above.

2. Open the website

Open index.html directly in a modern web browser.

For development, you can also use a local development server such as VS Code Live Server.

Configuration

WhatsApp Order Number

Before going live, update the placeholder WhatsApp number in js/main.js:

const WHATSAPP_NUMBER = '234XXXXXXXXXX';

Use the full international number without +, spaces, or dashes.

For example:

const WHATSAPP_NUMBER = '2348012345678';

The website will automatically generate a WhatsApp URL containing the customer's selected items.

Updating the Menu

All menu items are stored in the menuData object inside js/main.js.

Each item contains:

{
  name: 'Smoky Jollof Rice',
  desc: 'Party-style jollof with that signature smoky bottom',
  price: '₦2,000'
}

To add a new item, add another object to the appropriate category.

To create a new category, add another key to menuData:

'New Category': [
  {
    name: 'New Dish',
    desc: 'Description of the dish',
    price: '₦2,500'
  }
]

The menu tab is created automatically from the category name.

WhatsApp Ordering

Customers can select menu items using the + Add buttons.

The selected items are stored temporarily in the browser and used to build a WhatsApp message such as:

Hi, I'd like to order:

• Smoky Jollof Rice (₦2,000)
• Asun (₦4,000)

Please confirm availability and delivery details. Thank you!

The order is not stored on a server. It is simply converted into a WhatsApp message and opened using the customer's device/browser.

Styling

The main styles are contained in:

css/style.css

The design uses CSS variables for the primary colour palette:

:root {
  --red: #C0392B;
  --red-dark: #96281B;
  --orange: #E67E22;
  --cream: #FDF6EC;
  --dark: #1A0A00;
  --dark-2: #2C1503;
  --text: #3D1F00;
  --text-light: #7A5230;
  --gold: #C9A84C;
}

Changing these variables allows the site's overall colour scheme to be updated from one location.

Fonts

The website currently uses Google Fonts:

Playfair Display

Nunito

These are loaded from fonts.googleapis.com in index.html.

An internet connection is therefore required for the fonts to load from Google Fonts.

External Links to Update

Before deployment, replace placeholder links where necessary:

WhatsApp number in js/main.js

Full Menu PDF link

Restaurant location link

Any other href="#" placeholders

Restaurant email address if different

Parent company URL if the company website changes

Recommended Production Checklist

Replace the placeholder WhatsApp number.

Add the real restaurant location/Google Maps link.

Add the final downloadable menu PDF.

Verify all menu names, descriptions, and prices.

Confirm opening hours.

Confirm restaurant email address.

Test every navigation link.

Test WhatsApp ordering on desktop and mobile.

Test the website on Chrome, Edge, Firefox, Safari, Android, and iOS.

Add real restaurant photography if available.

Add a favicon.

Add appropriate SEO metadata.

Add Open Graph metadata for social-media sharing.

Connect the site to the production domain.

Enable HTTPS on the production domain.

Technology

This project uses:

HTML5

CSS3

Vanilla JavaScript

Google Fonts

WhatsApp Click-to-Chat

No frontend framework or backend is currently required.

Browser Support

The site is designed for modern browsers that support:

CSS Grid

CSS Flexbox

CSS Custom Properties

IntersectionObserver

ES6 JavaScript

Important Notes

The current ordering system is intentionally lightweight. It does not provide:

Online payment processing

Server-side order storage

Customer accounts

Inventory management

Delivery tracking

Order history

Restaurant administration dashboard

For a production restaurant ordering platform, these features could be added later through a backend/API and database.

License

This project is proprietary to The Real Pot Café and its parent company, Opeyemi Ononuga General Enterprises, unless otherwise stated.

Do not redistribute, resell, or reuse the branding, restaurant content, or business information without permission.
