import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Layout from '@/components/Layout';

// Pages
import Home from '@/scenes/home';
import Benefits from '@/scenes/benefits';
import OurClasses from '@/scenes/ourClasses';
import Programs from '@/scenes/programs';
import Coaches from '@/scenes/coaches';
import Schedule from '@/scenes/schedule';
import Pricing from '@/scenes/pricing';
import Dashboard from '@/scenes/dashboard';
import Challenges from '@/scenes/challenges';
import Blog from '@/scenes/blog';
import Shop from '@/scenes/shop';
import Contact from '@/scenes/contact';
import Login from '@/scenes/auth/Login';
import Register from '@/scenes/auth/Register';

// Protected Route Component
import ProtectedRoute from '@/components/ProtectedRoute';

const AppRouter = () => {
  return (
    <div className="app bg-gray-20">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="classes" element={<OurClasses />} />
          <Route path="programs" element={<Programs />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        } />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;