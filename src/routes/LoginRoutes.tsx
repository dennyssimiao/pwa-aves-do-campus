import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

import Login from 'pages/Login';

const LoginRoutes: React.FC = () => {
  const { isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && location.pathname === "/") {
      navigate("/login");
    }
  }, [isLoading, location, navigate]);

  return (
    <Routes>
      <Route path="/login" Component={Login} />
    </Routes>
  );
};

export default LoginRoutes;