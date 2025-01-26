import React from "react";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Shop from "./components/products/Shop";
import Toast from "./components/toast-message/Toast";
import CartPage from "./components/cart-page/CartPage";
import FavoriteItem from "./components/favorite-page/FavoriteItem";
import NewsLetter from "./pages/news-letter/NewsLetter";
import NewArrivals from "./components/new-arrivals/NewArrivals";
import ProductDetails from "./components/product-details/ProductDetails";
import ArrivalsProductDetails from "./components/arrivals-product-details/ArrivalsProductDetails";
import NotFound from "./components/not-found/NotFound";
import Order from "./components/order-page/Order";
import Products from "./components/products/Products";
import Shop from "./components/shop-page/Shop";
import Blog from "./components/blog-page/Blog";
import LoginForm from "./components/signin-form/LoginForm";

function App() {
  return (
    <>
      <main>
        <Toast bottomRight={"bottom-right"} />
        <ScrollRestoration />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route
            path="/new-arrivals"
            element={<NewArrivals heading={"New Arrivals"} />}
          />
          <Route path="/favorite" element={<FavoriteItem />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route
            path="/arrivalsproductdetails/:id"
            element={<ArrivalsProductDetails />}
          />
          <Route path="/order" element={<Order />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}

export default App;
