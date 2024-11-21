import { Switch } from "@headlessui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bird } from "types/Birds";

type BirdListItemProps =
    | {
        bird: Bird;
        showSwitch: true;
        isSelected: boolean;
        onToggle: (birdId: string) => void;
    }
    | {
        bird: Bird;
        showSwitch: false;
    };

const BirdItem: React.FC<BirdListItemProps> = (props) => {
    const { bird, showSwitch } = props;
    const navigate = useNavigate();

    const handleBirdDetails = (birdId: string) => {
        navigate(`/bird-details/${birdId}`);
    };

    return (
        <li
            key={bird.id}
            className={`flex items-center justify-between space-x-2 p-3 border rounded-lg shadow-sm ${showSwitch && props?.isSelected ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'} hover:shadow-md transition cursor-pointer`}
            onClick={() => handleBirdDetails(bird.id)}
        >
            <div className="flex items-center gap-4 flex-grow">
                <img
                    src={bird.imageUrl}
                    alt={bird.name}
                    className="w-12 h-12 object-cover rounded-lg" />
                <div className="flex flex-col">
                    <span className="font-semibold">{bird.name}</span>
                    <span className="text-sm italic">{bird.scientificName}</span>
                </div>
            </div>

            <span className="flex-shrink-0 font-semibold text-gray-600 text-right whitespace-nowrap">{bird.points} pts</span>

            {showSwitch && (
                <Switch
                    checked={props.isSelected}
                    onChange={() => props.onToggle(bird.id)}
                    onClick={(e) => e.stopPropagation()}
                    className={`${
                        props.isSelected ? 'bg-blue-500' : 'bg-gray-300'
                    } relative inline-flex flex-shrink-0 h-6 w-11 items-center rounded-full transition`}
                >
                    <span
                        className={`${
                            props.isSelected ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                </Switch>
            )}
        </li>
    );
};

export default BirdItem;
