import React, { useRef } from 'react';
import { Birdwatching } from 'types/Birdwatching';

interface BirdwatchingItemProps {
    birdwatching: Birdwatching;
    isSelected?: boolean;
    onClick: (id: string) => void;
    onLongPress: (id: string) => void;
}

const BirdwatchingItem: React.FC<BirdwatchingItemProps> = ({ birdwatching, isSelected = false, onClick, onLongPress }) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isLongPress = useRef(false);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        isLongPress.current = false;
        timeoutRef.current = setTimeout(() => {
            isLongPress.current = true;
            onLongPress('');
        }, 500);
    };

    const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (!isLongPress.current) {
            onClick('');
        }
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    return (
        <li
            key={birdwatching.id}
            className={`rounded-lg ${isSelected ? "bg-blue-200" : "bg-white"}`}
        >
            <button
                className="w-full p-4"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                onTouchCancel={handleMouseLeave}
            >
                <div className="flex justify-between items-center gap-6 w-full text-left rounded-lg">
                    <div className="flex flex-col items-start flex-shrink-0">
                        <span className="text-sm">
                            {birdwatching.date.toDate().toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "short",
                            })
                                .replace(" de ", " ")
                                .replace(".", "")}
                        </span>
                        <span className="text-xs">
                            {birdwatching.date.toDate().toLocaleTimeString("pt-BR", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>
                    </div>

                    <span className="flex-grow text-xl whitespace-nowrap">{birdwatching.birdIds.length} espécies</span>

                    <span className="text-xl font-semibold flex-shrink-0 whitespace-nowrap">{birdwatching.totalPoints} pts</span>
                </div>
            </button>
        </li>
    );
};

export default BirdwatchingItem;
