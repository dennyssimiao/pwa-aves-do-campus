import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

import UserProfile from 'pages/UserProfile';
import RegisterBirdwatch from 'pages/RegisterBirdWatching';
import BirdDetails from 'pages/BirdDetails';
import { BirdwatchingProvider } from 'contexts/BirdwatchingContext';
import BirdwatchingDetails from 'pages/BirdwatchingDetails';

const UserRoutes: React.FC = () => {
    const { isLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && (location.pathname === "/" || location.pathname === "/login")) {
            navigate("/user-profile");
        }
    }, [isLoading, location, navigate]);

    return (
        <Routes>
            <Route path="/user-profile" Component={UserProfile} />
            <Route path="/birdwatching/:birdwatchingId" Component={BirdwatchingDetails} />
            <Route path="/register-birdwatching" element={
                <BirdwatchingProvider><RegisterBirdwatch /></BirdwatchingProvider>
            } />
            <Route path="/bird-details/:birdId" element={
                <BirdwatchingProvider><BirdDetails /></BirdwatchingProvider>
            } />

        </Routes>
    );
};

export default UserRoutes;