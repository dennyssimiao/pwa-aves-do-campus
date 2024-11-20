import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

import AdminProfile from 'pages/AdminProfile';

const AdminRoutes: React.FC = () => {
  const { isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (location.pathname === "/" || location.pathname === "/login")) {
      navigate("/admin-profile");
    }
  }, [isLoading, location, navigate]);

  return (
    <Routes>
      <Route path="/admin-profile" Component={AdminProfile} />
    </Routes>
  );
};

export default AdminRoutes;