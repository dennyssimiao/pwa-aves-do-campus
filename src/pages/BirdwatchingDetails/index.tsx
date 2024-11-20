import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockBirdwatching, mockBirds } from 'mockdata';
import { Birdwatching } from 'types/Birdwatching';
import { Bird } from 'types/Birds';
import { getBirdsByIdFromDb, getBirdwatchingFromDb } from 'services/firebase';
import BirdItem from 'components/BirdItem';
import MainButton from 'components/MainButton';
import SearchBar from 'components/SearchBar';

const BirdwatchingDetails: React.FC = () => {
    const navigate = useNavigate();
    const { birdwatchingId } = useParams<{ birdwatchingId: string }>();
    const [birdwatching, setBirdwatching] = useState<Birdwatching | null>(null);
    const [birds, setBirds] = useState<Bird[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';

    useEffect(() => {
        const fetchBirdwatchingData = async (id: string) => {
            setBirdwatching(useMockData
                ? (mockBirdwatching.find(b => b.id === id) || null)
                : await getBirdwatchingFromDb(id));

            setBirds(useMockData
                ? mockBirds.filter(bird => birdwatching?.birdIds.includes(bird.id))
                : await getBirdsByIdFromDb(birdwatching?.birdIds));
        };

        if (birdwatchingId) {
            fetchBirdwatchingData(birdwatchingId);
        }
    }, [useMockData, birdwatchingId, birdwatching, setBirdwatching, setBirds]);

    const handleBack = () => {
        navigate(-1);
    };

    const filteredBirds = birds.filter((bird) =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!birdwatching) {
        return <p>Carregando dados do pássaro...</p>;
    }

    return (
        <div className="max-w-lg mx-auto p-5 pb-20">
            <div className="w-full flex justify-between items-end p-4 rounded-lg bg-gray-800 text-white">
                <div className="w-24 h-24 flex flex-col justify-center items-center rounded-full bg-gray-600 text-white">
                    <span className="text-4xl text-white font-bold leading-tight">{birdwatching.birdIds.length}</span>
                    <span className="text-xl text-white leading-tight">aves</span>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div className="text-right mt-auto">
                        <h2 className="text-2xl font-semibold">{birdwatching.totalPoints} pts</h2>
                        <p className="text-sm">{birdwatching.date.toDate().toLocaleDateString('pt-BR')} às {birdwatching.date.toDate().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
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
                        showSwitch={false}
                    />
                ))}
            </ul>

            <MainButton onClick={handleBack}>Voltar</MainButton>
        </div>
    );

};

export default BirdwatchingDetails;