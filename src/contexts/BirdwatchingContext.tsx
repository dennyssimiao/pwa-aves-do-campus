import React, { createContext, useContext, useEffect, useState } from 'react';

interface BirdwatchingContextProps {
    selectedBirds: Set<string>;
    date: Date;
    totalPoints: number;
    setSelectedBirds: (birdIds: Set<string>) => void;
    setDate: (date: Date) => void;
    setTotalPoints: (points: number) => void;
    resetBirdwatching: () => void;
}

const BirdwatchingContext = createContext<BirdwatchingContextProps | null>(null);

const BirdwatchingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedBirds, setSelectedBirds] = useState<Set<string>>(new Set());
    const [date, setDate] = useState<Date>(new Date());
    const [totalPoints, setTotalPoints] = useState<number>(0);

    useEffect(() => {
        resetBirdwatching();
    }, []);

    const resetBirdwatching = () => {
        setSelectedBirds(new Set());
        setDate(new Date());
        setTotalPoints(0);
    };

    return (
        <BirdwatchingContext.Provider
            value={{
                selectedBirds,
                date,
                totalPoints,
                setSelectedBirds,
                setDate,
                setTotalPoints,
                resetBirdwatching,
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
