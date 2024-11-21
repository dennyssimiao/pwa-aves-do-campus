import { useBirdwatching } from 'contexts/BirdwatchingContext';
import { mockBirds } from 'mockdata';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBirdsFromDb } from 'services/firebase';
import { Bird } from 'types/Birds';
import BirdItem from 'components/BirdItem';
import SearchBar from 'components/SearchBar';
import Modal from 'components/Modal';
import DateTimePicker from 'components/DateTimePicker';

const RegisterBirdwatch: React.FC = () => {
    const navigate = useNavigate();
    const {
        selectedBirds,
        date,
        totalPoints,
        setSelectedBirds,
        setDate,
        setTotalPoints,
        resetBirdwatching
    } = useBirdwatching();

    const [searchTerm, setSearchTerm] = useState('');
    const [birds, setBirds] = useState<Bird[]>([]);

    const [isCancelModalOpen, setCancelModalOpen] = useState(false);
    const [isSaveModalOpen, setSaveModalOpen] = useState(false);

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';

    useEffect(() => {
        const fetchUserData = async () => {
            setBirds(useMockData ? mockBirds : await getBirdsFromDb());
        };
        fetchUserData();
    }, [useMockData, setBirds]);

    const handleBirdToggle = (birdId: string) => {
        const newSelectedBirds = new Set(selectedBirds);
        let newTotalPoints = totalPoints;

        const bird = birds.find(bird => bird.id === birdId);
        const birdPoints = bird?.points || 0;

        if (newSelectedBirds.has(birdId)) {
            newSelectedBirds.delete(birdId);
            newTotalPoints -= birdPoints;
        } else {
            newSelectedBirds.add(birdId);
            newTotalPoints += birdPoints;
        }

        setTotalPoints(newTotalPoints)
        setSelectedBirds(newSelectedBirds);
    };

    const handleSave = () => {
        // TODO: Salvar a passarinhada no banco
        console.log('Passarinhada salva com sucesso!');
        setSaveModalOpen(false);
        resetBirdwatching();
        navigate('/user-profile');
    };

    const handleCancel = () => {
        console.log('Passarinhada cancelada!');
        setCancelModalOpen(false);
        resetBirdwatching();
        navigate('/user-profile');
    };

    const filteredBirds = birds.filter((bird) =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-lg mx-auto p-5 pb-20">
            <div className="p-4 rounded-lg bg-gray-800 text-white">
                <div className="flex justify-between gap-2">
                    <h1 className="text-2xl font-bold mb-4">Nova Passarinhada</h1>
                    <span className="text-xl font-semibold text-right whitespace-nowrap">{totalPoints} pts</span>
                </div>

                <DateTimePicker date={date} setDate={setDate}/>
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
                    onClick={() => setCancelModalOpen(true)}
                >
                    Cancelar
                </button>
                <button
                    className="flex-1 py-4 bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition"
                    onClick={() => setSaveModalOpen(true)}
                >
                    Salvar
                </button>
            </div>

            <Modal
                isOpen={isCancelModalOpen}
                onClose={() => setCancelModalOpen(false)}
                onConfirm={handleCancel}
                title="Confirmar Cancelamento"
                message="Você tem certeza que deseja cancelar? Todos os dados não salvos serão perdidos."
            />

            <Modal
                isOpen={isSaveModalOpen}
                onClose={() => setSaveModalOpen(false)}
                onConfirm={handleSave}
                title="Confirmar Salvar"
                message="Você tem certeza que deseja salvar? Os dados serão registrados."
            />
        </div>
    );
};

export default RegisterBirdwatch;
