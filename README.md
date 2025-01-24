# Audiophile E-commerce

Audiophile is an e-commerce web application for high-quality audio products. This project was built as a challenge from [Frontend Mentor](https://www.frontendmentor.io/). It provides users with a seamless shopping experience, from browsing products to completing checkout.

## Features

### General Features
- Fully responsive design for mobile, tablet, and desktop.
- Modern and clean UI/UX.

### Product Features
- Dynamic product pages with detailed descriptions, images, and features.
- Add products to the cart with adjustable quantities.
- "You may also like" recommendations for each product.

### Cart Functionality
- Add, remove, and update product quantities in the cart.
- Automatic cart item persistence using `localStorage`.
- Display of total price, VAT, and grand total.
- Toast notifications for cart updates (e.g., adding/removing items).

### Checkout Process
- Form validation for user information, including email format validation.
- Choose between "e-Money" and "Cash on Delivery" payment methods.
- Summary of cart items and pricing before final submission.

## Tech Stack

### Frontend
- **React**: Component-based architecture for a dynamic user experience.
- **React Router**: Enables navigation between pages.
- **Context API**: Manages cart, nav and menu states globally.
- **Tailwind CSS**: Provides fast, responsive styling.

### Libraries and Tools
- **PropTypes**: Validates props for React components.
- **React Toastify**: Displays toast notifications for user interactions.
- **Intl.NumberFormat**: Formats currency consistently.

### Data Handling
- Mock data for products and cart stored in JSON.
- Utility functions for operations like retrieving valid cart items.

## Directory Structure

```plaintext
src
├── components          # Reusable components (e.g., CategorySection, ProductCard)
├── context             # Context API providers (CartContext, MenuContext)
├── data                # Mock data files (cartData, product details, etc.)
├── pages               # Page components (Home, Checkout, ProductDetails, etc.)
├── utils               # Utility functions (e.g., cartUtils.js)
└── App.js              # Main app entry point
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clonehttps://github.com/Damilordz/audiophile-ecommerce.git
   ```

2. Navigate to the project directory:
   ```bash
   cd audiophile-ecommerce
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## How to Use

1. **Browse Products**: Explore the homepage and select a category (e.g., speakers, headphones, or earphones).
2. **View Product Details**: Click on a product to view its description, features, and price.
3. **Add to Cart**: Adjust the quantity and add items to your cart.
4. **Manage Cart**: Access your cart to update quantities, remove items, or clear the cart.
5. **Checkout**: Complete the checkout form and submit your order.

## Challenges Faced
- **Responsive Design**: Ensuring a consistent layout across devices.
- **State Management**: Handling cart and modal states efficiently using Context API.
- **Form Validation**: Implementing user-friendly validation for checkout inputs.

## Improvements
- **Backend Integration**: Connect to an API for real product data and order processing.
- **Authentication**: Add user accounts for order history and saved preferences.
- **Enhanced Cart Functionality**: Include features like discount codes and saved carts.

## License
This project is open-source and available under the MIT License.

---

Thank you for exploring the Audiophile E-commerce project! If you have any feedback or suggestions, feel free to reach out.