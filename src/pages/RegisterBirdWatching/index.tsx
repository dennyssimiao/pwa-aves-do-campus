import { useBirdwatching } from 'contexts/BirdwatchingContext';
import { mockBirds } from 'mockdata';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBirdsFromDb } from 'services/firebase';
import { Bird } from 'types/Birds';
import BirdItem from 'components/BirdItem';
import SearchBar from 'components/SearchBar';

const RegisterBirdwatch: React.FC = () => {
    const navigate = useNavigate();
    const { selectedBirds, date, setDate, handleBirdToggle, resetBirdwatching } = useBirdwatching();

    const [searchTerm, setSearchTerm] = useState('');
    const [birds, setBirds] = useState<Bird[]>([]);

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';

    useEffect(() => {
        const fetchUserData = async () => {
            setBirds(useMockData ? mockBirds : await getBirdsFromDb());
        };
        fetchUserData();
    }, [useMockData, setBirds]);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [year, month, day] = e.target.value.split('-').map(Number);
        setDate(new Date(
            year,
            month,
            day,
            date.getHours(),
            date.getMinutes()
        ));
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [hours, minutes] = e.target.value.split(':').map(Number);
        setDate(new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            hours,
            minutes
        ));
    };

    const handleSave = () => {
        // TODO: Salvar a passarinhada no banco
        console.log('Passarinhada salva com sucesso!');
        resetBirdwatching();
        navigate('/user-profile');
    };

    const handleCancel = () => {
        console.log('Passarinhada cancelada!');
        resetBirdwatching();
        navigate('/user-profile');
    };

    const filteredBirds = birds.filter((bird) =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-lg mx-auto p-5 pb-20">
            <div className="p-4 rounded-lg bg-gray-800 text-white">
                <h1 className="text-2xl font-bold mb-4">Nova Passarinhada</h1>

                <div className="flex justify-between">
                    <label className="flex flex-col items-start w-1/2 mr-2">
                        <span className="text-sm font-semibol">Data:</span>
                        <input
                            type="date"
                            value={`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`}
                            onChange={handleDateChange}
                            className="mt-1 p-2 text-gray-800 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </label>
                    <label className="flex flex-col items-start w-1/2 ml-2">
                        <span className="text-sm font-semibold">Hora:</span>
                        <input
                            type="time"
                            value={`${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`}
                            onChange={handleTimeChange}
                            className="mt-1 p-2 text-gray-800 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </label>
                </div>
            </div>

            <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Pesquisar pássaros..."
            />

            <ul className="space-y-4">
                {filteredBirds.map((bird) => (
                    <BirdItem
                        key={bird.id}
                        bird={bird}
                        isSelected={selectedBirds.has(bird.id)}
                        showSwitch={true}
                        onToggle={handleBirdToggle}
                    />
                ))}
            </ul>

            <div className="flex fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 shadow-md">
                <button
                    className="flex-1 py-4 bg-red-500 text-white font-bold text-lg hover:bg-red-600 transition"
                    onClick={handleCancel}
                >
                    Cancelar
                </button>
                <button
                    className="flex-1 py-4 bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition"
                    onClick={handleSave}
                >
                    Salvar
                </button>
            </div>
        </div>
    );
};

export default RegisterBirdwatch;