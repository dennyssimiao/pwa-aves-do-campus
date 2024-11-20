import { useAuth } from "contexts/AuthContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <div>
            <h1>AdminProfile</h1>
            <button onClick={handleLogout} className="px-4 py-2 text-base">
                Logout
            </button>
        </div>
    );
};

export default AdminProfile;
