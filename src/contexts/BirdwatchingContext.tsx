import React, { createContext, useContext, useEffect, useState } from 'react';

interface BirdwatchingContextProps {
    selectedBirds: Set<string>;
    date: Date;
    handleBirdToggle: (birdId: string) => void;
    setDate: (newDate: Date) => void;
    resetBirdwatching: () => void;
}

const BirdwatchingContext = createContext<BirdwatchingContextProps | null>(null);

const BirdwatchingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedBirds, setSelectedBirds] = useState<Set<string>>(new Set());
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        setDate(new Date());
    }, []);

    const handleBirdToggle = (birdId: string) => {
        setSelectedBirds((prev) => {
            const updatedSet = new Set(prev);
            if (updatedSet.has(birdId)) {
                updatedSet.delete(birdId);
            } else {
                updatedSet.add(birdId);
            }
            return updatedSet;
        });
    };
    
    const resetBirdwatching = () => {
        setSelectedBirds(new Set());
    };

    return (
        <BirdwatchingContext.Provider
        value={{
            selectedBirds,
            date,
            setDate,
            handleBirdToggle,
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
