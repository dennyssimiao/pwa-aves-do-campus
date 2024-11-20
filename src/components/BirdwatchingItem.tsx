import React from "react";
import { Link } from "react-router-dom";
import { Birdwatching } from "types/Birdwatching";

interface Props {
    birdwatching: Birdwatching;
}

const BirdwatchingItem: React.FC<Props> = ({ birdwatching }) => (
    <li key={birdwatching.id} className="border-b border-gray-300">
        <Link
            to={`/birdwatching/${birdwatching.id}`}
            className={`flex justify-between p-3 border rounded-lg shadow-sm} hover:shadow-md transition cursor-pointer`}
        >
            <div className="flex flex-col justify-center items-center w-12 h-12 rounded bg-gray-600">
                <span className="text-xl text-white font-semibold leading-tight">{birdwatching.birdIds.length}</span>
                <span className="text-sm text-white leading-tight">aves</span>
            </div>

            <div className="flex flex-col items-end">
                <span className="text-xl font-semibold text-gray-600 text-right">{birdwatching.totalPoints} pts</span>
                <span className="text-xs text-right">
                    {birdwatching.date.toDate().toLocaleDateString('pt-BR')} às {birdwatching.date.toDate().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </Link>
    </li>
);

export default BirdwatchingItem;
