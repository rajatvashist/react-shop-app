import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductDetail from "./pages/productDetail";
import About from "./pages/about";
import Service from "./pages/services";
import Contact from "./pages/contact";
import Layout from "./pages/layout";
import Login from "./pages/login";
import Lo from "./pages/Lon";
import Myaccounts from "./pages/myaccount";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import NodeApi from "./pages/nodeapi";
import Nopage from "./pages/nopage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:pid" element={<Product />} />
          <Route path="detail" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="lo" element={<Lo />} />
          <Route path="myaccounts" element={<Myaccounts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="nodeapi" element={<NodeApi />} />
          <Route path="*" element={<Nopage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
