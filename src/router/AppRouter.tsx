import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/scenes/footer';

// Pages
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';
import OurClasses from '@/scenes/ourClasses';
import ContactUs from '@/scenes/contactUs';
import Pricing from '@/scenes/pricing';
import Login from '@/scenes/auth/Login';
import Register from '@/scenes/auth/Register';

// Store
import { SelectedPage } from '@/shared/types';
import { useStore } from '@/store/useStore';

const MainPage = () => {
  const { selectedPage, setSelectedPage } = useStore();
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelectedPage]);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
    </>
  );
};

const AppRouter = () => {
  return (
    <div className="app bg-gray-20">
      <Routes>
        {/* Main single-page application */}
        <Route path="/" element={<MainPage />} />
        
        {/* Separate pages */}
        <Route path="/pricing" element={<Pricing />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;