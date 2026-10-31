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


Made with ❤️ in Nepal.

text
