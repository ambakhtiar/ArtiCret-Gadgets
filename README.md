# 🎧 Gadget Heaven

**Live Link:** [https://articret-gadgets.netlify.app/](https://articret-gadgets.netlify.app/)

---

## ✅ Project Overview

Gadget Heaven is a **complete** modern React-based e-commerce platform for purchasing gadgets. **Every feature, every challenge, and every optional requirement is fully implemented and polished.** This is a **production-ready** frontend SPA following **React best practices**.

---

## 📌 **Summary of Work**
✅ All required features completed  
✅ All **optional** features completed  
✅ **Challenging parts** handled successfully  
✅ Extra features added for better UX  
✅ **Context API only used** (No LocalStorage)  
✅ **Professional UI/UX implemented**  
✅ Proper error handling and corner-case coverage ✅

---

## 🌟 All Features (Required + Optional + Extra) — **COMPLETE LIST**

### 🔸 **1. Home Page**
- 🏷️ **Banner with CTA → Scrolls to product section**
- 🗂️ **Categories Section → Nested Routing → Filters products by category**
- 📦 **Products Grid** → Dynamic rendering from JSON
- ✅ **Context API globally managing state**

---

### 🔸 **2. Product Details Page**
- 🖼️ Product Image
- 📝 Title + Full Description
- 💰 Price
- 🌟 **Rating → visually shown with colored stars**
- 📑 **Specification list (array) shown as bullet points**
- 🔔 **Availability (In Stock / Stock Out)**
- 🛒 **Add To Cart button → Prevent duplicate add**
- ❤️ **Add To Wishlist button → Disabled after add**
- 🛑 **If product already exists → Disable buttons or show error**
- ✅ **Complete toast notifications → success, warning, error → clear feedback to user**
- ✅ **Purchase limit logic:** ➔ Can't purchase if total exceeds 5000 BDT

---

### 🔸 **3. Dashboard Page**
- 📌 **Nested routing** ➔ `/dashboard/cart` and `/dashboard/wishlist`
- 🎨 **Active NavLink highlighting** → Route-aware active styles
- 🛍️ **Cart Page**
  - ✅ Sort by Price Ascending / Descending
  - 🗑️ Remove individual items from Cart
  - 💳 Purchase Button ➔ Triggers Modal → Auto-Navigates to Home
  - 🛑 Cannot purchase empty cart → Disabled button logic
- 💖 **Wishlist Page**
  - 🗂️ Show Wishlist Items
  - 🛒 **Add To Cart directly from Wishlist** ➔ Fully Functional
  - 🗑️ Remove from Wishlist
- ⚙️ **Challenge solved:** ➔ Handled both Cart/Wishlist properly with correct route-specific logic

---

### 🔸 **4. Statistics Page (Challenge Part)**
- 📊 **Recharts Bar Chart**
- ✅ **Single Bar → Split into 2 colors → Price + Rating stacked visually**
- 📅 Tooltip shows product title & individual values
- 💻 **Fully responsive & interactive**

---

### 🔸 **5. Profile Page (Extra Feature)**
- 👤 Shows **User Name** & Branding
- 🛒 Displays **Full Purchase History:**
  - ✅ Purchase Date (Formatted → using `.toLocaleString()`)
  - ✅ Amount spent per transaction
  - ✅ Handles empty history gracefully → shows friendly message if no purchase yet
- 🏆 **Challenge solved:** ➔ Handled displaying dynamic, updated purchase history

---

### 🔸 **6. Complete Routing System**
- 🗺️ **Nested routing for Home/Dashboard**
- ✅ 404 **Error page** → With styled message for unknown routes
- 🧭 **Programmatic navigation (useNavigate)** → Used in Modal purchase confirmation

---

### 🔸 **7. Context API Management (NO LocalStorage)**
- **Global context used for:**
  - 🛒 Cart Items
  - 💖 Wishlist Items
  - 📅 Purchase Date/History
  - 💰 Purchase Amounts
- ✅ **No use of LocalStorage → everything handled dynamically via Context API**

---

### 🔸 **8. UI/UX Improvements**
- 🎨 **TailwindCSS & DaisyUI for responsive design**
- 🎯 Fully mobile responsive → Tested on mobile, tablet, desktop
- 🛑 Prevents accidental multiple clicks → Buttons disabled after appropriate actions
- ✨ **Toast notifications** for user feedback
- 🎈 Clean and attractive color palette ➔ Modern gadget e-commerce look

---


---

## 📌 Technologies Used
| **Technology**     | **Purpose**                               |
|--------------------|-------------------------------------------|
| React              | UI/Component Management                  |
| React Router DOM   | Routing, Nested Routes                   |
| Context API        | Global State Management (Cart, Wish, etc.)|
| Recharts           | **Bar Chart for Statistics**             |
| Tailwind CSS       | Styling (Utility First)                  |
| DaisyUI            | Prebuilt Components for UI                |
| React Toastify     | Notifications                             |
| React Helmet Async | Page Title, Metadata                      |
| Netlify            | Deployment                                |

---

## ⚙️ Getting Started Locally

```bash
git clone https://github.com/your-username/gadget-heaven.git
cd gadget-heaven
npm install
npm run dev

