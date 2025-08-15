# Our Gadgets - React E-commerce Website

A modern, responsive e-commerce website built with React and React Router for browsing and purchasing the latest gadgets and technology products.

## 🚀 Live Website
**[Visit Our Gadgets Live Website](https://our-gadgets.netlify.app/)**

## 📋 Requirement Document
[Project Requirements Document]("./public/requirments_docx.pdf")

## ⚛️ React Fundamental Concepts Used

This project demonstrates various React fundamental concepts:

### 1. **Components & JSX**
- Functional components throughout the application
- JSX syntax for creating dynamic UI elements
- Component composition and reusability

### 2. **Props**
- Passing data between parent and child components
- Props drilling for sharing state across component hierarchy
- Default props and prop validation

### 3. **State Management (useState)**
- Managing local component state for UI interactions
- Cart and wishlist state management
- Modal state, menu toggle state, and form states

### 4. **Effect Hook (useEffect)**
- Side effects for data fetching and API calls
- Cleanup functions for event listeners
- Dependency arrays for optimizing re-renders

### 5. **Event Handling**
- onClick, onChange, onSubmit event handlers
- Form submissions and user interactions
- Custom event handling functions

### 6. **Conditional Rendering**
- Dynamic UI based on state conditions
- Loading states and error handling
- Show/hide components based on user actions

### 7. **Lists and Keys**
- Rendering dynamic lists of products
- Proper key assignment for React reconciliation
- Map function for rendering arrays

### 8. **React Router**
- Client-side routing with React Router v6
- Nested routes and dynamic routing
- Navigation with useNavigate hook
- Route parameters and loaders

## 🗄️ Data Handling & Management

### **Context API**
- **InterestContext**: Global state management for cart and wishlist functionality
- **ActiveTabContext**: Managing active tab state in dashboard
- Centralized state for sharing data across multiple components

### **Local Storage**
- Persistent storage for cart and wishlist items
- Data persistence across browser sessions
- Automatic synchronization between Context API and localStorage

### **JSON Data**
- Static JSON file (`gadgetsData.json`) for product information
- Route loaders for data fetching
- Structured product data with categories, prices, and specifications

## ✨ 5 Key Features

### 1. **🛒 Smart Shopping Cart & Wishlist**
- Add/remove products to cart and wishlist
- Real-time price calculation and total display
- Persistent storage using localStorage
- Sort products by price functionality
- Purchase modal with cart clearing functionality

### 2. **📱 Responsive Design & Modern UI**
- Fully responsive design for all device sizes
- Modern gradient designs and hover effects
- Tailwind CSS for styling and animations
- Mobile-friendly navigation with hamburger menu
- Clean and intuitive user interface

### 3. **🧭 Dynamic Navigation & Routing**
- React Router for seamless navigation
- Active route highlighting in navbar
- Dynamic navbar styling based on current page
- Breadcrumb navigation and proper URL structure
- 404 error page with custom styling

### 4. **📊 Data Visualization & Statistics**
- Interactive charts using Recharts library
- Product statistics and analytics dashboard
- Visual representation of product data
- Composed charts showing price and rating correlations

### 5. **🔍 Advanced Product Management**
- Detailed product pages with specifications
- Product filtering and categorization
- Search functionality across product catalog
- Product comparison features
- Toast notifications for user feedback

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Helmet** - Document head management
- **React Hot Toast** - Notification system
- **Recharts** - Data visualization library
- **React Icons** - Icon library
- **Vite** - Build tool and development server

## 🎯 Additional Features

- **SEO Optimization**: Dynamic page titles and meta tags
- **Loading States**: Smooth loading experiences
- **Error Handling**: Comprehensive error boundaries
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized bundle size and lazy loading

## 📁 Project Structure

```
src/
├── Routes/
│   ├── Home/              # Homepage components
│   ├── About Us/          # About page
│   ├── Dashboard/         # Dashboard and cart management
│   ├── Statistics/        # Charts and analytics
│   ├── NavBar/           # Navigation components
│   ├── Context/          # Context API providers
│   └── Cards/            # Reusable card components
├── assets/               # Images and static files
└── main.jsx             # Application entry point
```

## 📄 License

This project is licensed under the Programming Hero License.