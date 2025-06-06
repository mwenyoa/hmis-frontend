import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/ui';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const LoginForm = lazy(() => import('./pages/Login/LoginForm'));
const Register = lazy(() => import('./pages/Signup/Register'));
const AboutUs = lazy(() => import('./pages/static/about'));
const ContactUs = lazy(() => import('./pages/static/contact'));

type Props = {};

const App: React.FC<Props> = () => {
  let token = document.head.querySelector('meta[name="csrf-token"]');
  console.log('MY TOKEN: ', token);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quart',
    });
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
