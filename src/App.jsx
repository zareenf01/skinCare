import Navbar from "./navbar.jsx";
import Home from "./Home.jsx";
import Quiz from "./Quiz.jsx";
import SignUp from "./SignUp.jsx";
import LogIn from "./LogIn.jsx";
import Details from "./Details.jsx";
import Cart from "./Cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ContextProvider, { ShopContext } from "./shopContext.jsx";
import { ProductProvider } from "./productContext.jsx";

export default function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <ContextProvider>
        <ProductProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/:Productid" element={<Details />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ProductProvider>
      </ContextProvider>
    </div>
  );
}
