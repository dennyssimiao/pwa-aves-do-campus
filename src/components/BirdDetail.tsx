import React, { ReactNode } from "react";

interface BirdDetailProps {
    children: ReactNode;
    className: string;
}

const BirdDetail: React.FC<BirdDetailProps> = ({ children, className }) => (
    <span className={`flex items-center justify-center font-semibold uppercase rounded h-10 p-2 ${className}`}>
        {children}
    </span>
);

export default BirdDetail;
