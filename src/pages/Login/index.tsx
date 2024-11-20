import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { loginWithGoogle } = useAuth();
    const [selectedIsAdmin, setSelectedIsAdmin] = useState<boolean>(false);

    const handleGoogleSignIn = async () => {
        const newUser = await loginWithGoogle(selectedIsAdmin);

        if (newUser) {
            console.log("Usuário logado:", newUser);
            navigate(selectedIsAdmin ? "/admin-profile" : "/user-profile");
        } else {
            console.log("Falha no login.");
        }
    };

    return (
        <div className="flex flex-col items-center mt-20 pt-20">
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="mb-5">
                <label className="mr-4">
                    <input
                        type="radio"
                        value="false"
                        checked={!selectedIsAdmin}
                        onChange={() => setSelectedIsAdmin(false)}
                        className="mr-2"
                    />
                    Usuário Comum
                </label>
                <label className="ml-4">
                    <input
                        type="radio"
                        value="true"
                        checked={selectedIsAdmin}
                        onChange={() => setSelectedIsAdmin(true)}
                        className="mr-2"
                    />
                    Administrador
                </label>
            </div>
            <button
                onClick={handleGoogleSignIn}
                className="px-6 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Sign In with Google
            </button>
        </div>

    );
};

export default Login;
