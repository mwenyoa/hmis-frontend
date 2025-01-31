import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LoginForm } from "./pages/Login";
import { Register } from "./pages/Signup";
import { Footer, Header } from "./components/ui";
import { AboutUs, ContactUs } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";


type Props = {};


const App: React.FC<Props> = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-quart",
    });
  }, []); 

  return (
        <Router>
          <Header />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          </main>
          <Footer />
        </Router>
  );
};

export default App;
