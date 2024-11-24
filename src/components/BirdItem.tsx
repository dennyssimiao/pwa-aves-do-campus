import { Switch } from "@headlessui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bird } from "types/Birds";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface BirdListItemProps {
    bird: Bird;
    isSelected: boolean;
    disabled: boolean;
    onToggle: (birdId: string) => void;
};

const BirdItem: React.FC<BirdListItemProps> = ({ bird, isSelected, disabled, onToggle }) => {
    const navigate = useNavigate();

    const handleBirdDetails = (birdId: string) => {
        navigate(`/bird-details/${birdId}`);
    };

    return (
        <li
            key={bird.id}
            className={`flex items-start justify-between space-x-2 p-3 rounded-lg shadow-sm 
                ${ isSelected && !disabled ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'} 
                hover:shadow-md transition cursor-pointer`
            }
            onClick={() => handleBirdDetails(bird.id)}
        >
            <div className="flex items-top gap-4 flex-grow">
                <img
                    src={bird.imageUrl}
                    alt={bird.name}
                    className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex flex-col">
                    <span className="font-semibold">{bird.name}</span>
                    <span className="text-sm italic">{bird.scientificName}</span>
                </div>
            </div>

            <div className="flex-shrink-0 flex flex-col gap-2">
                <span className="font-semibold text-gray-600 text-right whitespace-nowrap">{bird.points} pts</span>

                {!disabled ? (
                    <Switch
                        checked={isSelected}
                        disabled={disabled}
                        onChange={() => !disabled && onToggle(bird.id)}
                        onClick={(e) => e.stopPropagation()}
                        className={`${isSelected ? 'bg-blue-500' : 'bg-gray-300'} 
                        relative inline-flex h-6 w-11 items-center rounded-full transition
                        ${disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`
                        }
                    >
                        <span
                            className={`${isSelected ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                    </Switch>
                ) : (
                    isSelected && (
                        <div className="ml-auto">
                            <CheckCircleIcon className="w-6 h-6 text-green-500" />
                        </div>
                    )
                )}
            </div>
        </li>
    );
};

export default BirdItem;
