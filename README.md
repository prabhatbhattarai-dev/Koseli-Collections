# Koseli Collections - E-Commerce Platform 🇳🇵

**Koseli Collections** is a fully functional, serverless e-commerce platform designed for small businesses in Nepal. It features a modern, mobile-first storefront where customers can browse products and place orders directly via WhatsApp. 

The backend is powered entirely by **Google Sheets** and **Google Apps Script**, providing a 100% free, reliable database and API solution without needing complex server hosting.

## 🌐 Live Demo
You can view the live storefront here: [Koseli Collections](https://koseli-imports.vercel.app/)

---

## ✨ Key Features

### 🛍️ Customer Storefront (`index.html`)
*   **Mobile-First Design:** Fully responsive layout optimized for smartphones, featuring a 2-column product grid and native-feeling bottom sheet modals.
*   **Dynamic Filtering:** Search by product name/SKU, filter by category, and filter by availability (Available, Out of Stock, Pre-order).
*   **Shopping Cart:** Persistent cart using `localStorage` (items stay in the cart even if the page is refreshed).
*   **WhatsApp Checkout:** Generates a perfectly formatted order summary and sends it directly to the business's WhatsApp.
*   **Phone Validation:** Strict 10-digit Nepali phone number validation at checkout.
*   **Image Bill Generator:** Customers can generate a professional PNG receipt of their order using `html2canvas`.
*   **Live Order Tracking:** Customers can enter their Order Code to fetch the live status directly from the Google Sheet.
*   **Order History:** Saves past orders on the customer's device for easy re-ordering or tracking.

### 🛡️ Admin Dashboard (`admin.html`)
*   **Secure Login:** Password-protected access to the dashboard.
*   **Live Statistics:** View Total Orders, Pending, Processing, and Delivered counts instantly.
*   **Order Management:** View all customer details, ordered items, and delivery addresses.
*   **Status Updates:** Update orders from *Pending* → *Processing* → *Shipped* → *Delivered*. This updates in the Google Sheet instantly, which customers can see on the tracking page.
*   **One-Click WhatsApp Greeting:** Instantly open a WhatsApp chat with the customer with a pre-filled greeting message.
*   **Export to Excel:** Download all orders as a formatted `.xlsx` file using `SheetJS`.

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript, Lucide Icons.
*   **Backend/API:** Google Apps Script (Serverless).
*   **Database:** Google Sheets.
*   **Libraries:** `html2canvas` (for image generation), `SheetJS` (for Excel export).
*   **Hosting:** Vercel.

---

## 🚀 How to Setup & Deploy

### 1. Database & Backend (Google Workspace)
1. Create a new Google Sheet.
2. Rename the bottom tab to exactly **`Orders`**.
3. Add these headers in Row 1: `Order Code`, `Date`, `Customer Name`, `Phone`, `Address`, `Items`, `Total`, `Status`.
4. Go to [Google Apps Script](https://script.google.com/) and create a new project.
5. Copy the code from the `Code.gs` provided in this project.
6. Update the `SPREADSHEET_ID` (found in your Google Sheet URL) and `ADMIN_PASSWORD` in the code.
7. Click **Deploy** -> **New deployment** -> Select type **Web app**.
8. Set *Execute as* to **Me** and *Who has access* to **Anyone**.
9. Copy the generated **Web App URL**.

### 2. Frontend Configuration
1. Open `index.html` and `admin.html`.
2. Replace the `GAS_URL` variable with your new Google Apps Script Web App URL.
3. Replace the `WHATSAPP_NUMBER` in `index.html` with your actual business WhatsApp number (including country code, e.g., `9779800000000`).
4. Upload your `logo.png` to the same directory.

### 3. Deployment (Vercel)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. In the Build Settings, make sure **Framework Preset** is set to **Other**.
5. Leave the Build Command and Output Directory empty.
6. Click **Deploy**.

---

## ⚙️ Customization

### Adding/Editing Products
Open `index.html` and scroll to the `<script>` section. Find the `const PRODUCTS = [...]` array. You can add, edit, or remove products by modifying the JSON objects:

```javascript
{ 
  id: 'p7', 
  name: 'Your Product Name', 
  sku: 'CAT-001', 
  category: 'cat1', 
  price: 1500, 
  oldPrice: 2000, 
  image: 'https://link-to-image.jpg', 
  status: 'AVAILABLE' 
}
Adding Categories
Find the const CATEGORIES = [...] array and add a new object. Make sure the id matches the category property of your products.

javascript
{ id: 'cat11', name: 'Toys & Games', status: 'AVAILABLE', image: 'https://link-to-image.jpg' }
👨‍💻 Author
Prabhat Bhattarai

Website: prabhatbhattarai.info.np

Project built for Koseli Collections.

Made with ❤️ in Nepal.

text
