import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Product from "./components/Product";
import Button from "./components/Button";
import AddProduct from "./components/AddProduct";
import PaymentP from "./components/PaymentP";
import PaymentPage from "./components/Payment";
import PaymentPage1 from "./components/Payment1";
import PaymentPage2 from "./components/Payment2";
import PaymentPage3 from "./components/Payment3";
import PaymentPage4 from "./components/Payment4";
import PaymentPage5 from "./components/Payment5";
import PaymentPage6 from "./components/Payment6";
import PaymentPage7 from "./components/Payment7";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/paymentp" element={<PaymentP/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/payment1" element={<PaymentPage1/>}/>
        <Route path="/payment2" element={<PaymentPage2/>}/>
        <Route path="/payment3" element={<PaymentPage3/>}/>
        <Route path="/payment4" element={<PaymentPage4/>}/>
        <Route path="/payment5" element={<PaymentPage5/>}/>
        <Route path="/payment6" element={<PaymentPage6/>}/>
        <Route path="/payment7" element={<PaymentPage7/>}/>
      </Routes>
    </div>
  );
};

export default App;
