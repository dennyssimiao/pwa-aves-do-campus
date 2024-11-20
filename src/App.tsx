import React from 'react';
import { AuthProvider } from 'contexts/AuthContext';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PwaRoutes from 'routes';

const App: React.FC = () => (
    <AuthProvider>
        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}
        >
            <PwaRoutes />
        </BrowserRouter>
    </AuthProvider>
);

export default App;
