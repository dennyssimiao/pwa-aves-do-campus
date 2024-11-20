import React, { ReactNode } from "react";

interface MainButtonProps {
    children: ReactNode;
    onClick: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-0 left-0 right-0 py-4 bg-blue-500 text-white font-bold text-center text-lg shadow-md hover:bg-blue-950">
            { children }
        </button>
    );
};

export default MainButton;
