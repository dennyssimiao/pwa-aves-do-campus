import React, { createContext, useContext, useState } from 'react';

interface BirdwatchingContextProps {
    selectedBirds: Set<string>;
    date: Date;
    totalPoints: number;
    isLocked: boolean;
    setSelectedBirds: React.Dispatch<React.SetStateAction<Set<string>>>;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    setTotalPoints: React.Dispatch<React.SetStateAction<number>>;
    setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const BirdwatchingContext = createContext<BirdwatchingContextProps | null>(null);

const BirdwatchingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedBirds, setSelectedBirds] = useState<Set<string>>(new Set());
    const [date, setDate] = useState<Date>(new Date());
    const [totalPoints, setTotalPoints] = useState<number>(0);
    const [isLocked, setIsLocked] = useState(false);

    return (
        <BirdwatchingContext.Provider
            value={{
                selectedBirds,
                date,
                totalPoints,
                isLocked,
                setSelectedBirds,
                setDate,
                setTotalPoints,
                setIsLocked
            }}
        >
            {children}
        </BirdwatchingContext.Provider>
    );
};

const useBirdwatching = () => {
    const context = useContext(BirdwatchingContext);
    if (!context) {
        throw new Error('useBirdwatching must be used within a BirdingProvider');
    }
    return context;
};

export { BirdwatchingProvider, useBirdwatching }
