import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockBirds } from 'mockdata';
import { Bird } from 'types/Birds';
import { getBirdFromDb } from 'services/firebase';
import MainButton from 'components/MainButton';
import BirdDetailIcon from 'components/BirdDetailIcon';
import BirdDetailText from 'components/BirdDetailIText';

const BirdDetails: React.FC = () => {
    const navigate = useNavigate();
    const { birdId } = useParams<{ birdId: string }>();
    const [bird, setBird] = useState<Bird | null>(null);

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';

    useEffect(() => {
        const fetchBirdData = async (id: string) => {
            setBird((useMockData ?
                mockBirds.find(b => b.id === id) || null :
                await getBirdFromDb(id)));
        };

        if (birdId) {
            fetchBirdData(birdId);
        }
    }, [useMockData, birdId, setBird]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!bird) {
        return <p>Carregando dados do pássaro...</p>;
    }

    return (
        <div className="max-w-lg mx-auto p-5 pb-16">
            <div className="w-full rounded-lg bg-gray-800 text-white">
                <div className="flex justify-between items-start gap-2 p-4">
                    <div>
                        <h1 className="text-xl font-bold m-0">{bird.name}</h1>
                        <p className="text-base text-gray-200 m-0 italic">{bird.scientificName}</p>
                    </div>
                    <p className="text-lg font-semibold text-right whitespace-nowrap">{bird.points} pts</p>
                </div>

                <img src={bird.imageUrl} alt={bird.name} className="w-full h-56 m-0 p-0 object-cover" />

                <div className="flex flex-wrap gap-2 p-4 rounded-lg">
                    <BirdDetailText
                        key={`${bird.id + '-' + bird.rarity}`}
                        value={bird.rarity}
                    />

                    <BirdDetailIcon
                        key={`${bird.id + '-' + bird.activity}`}
                        value={bird.activity}
                    />

                    {bird.diet.map((diet) => (
                        <BirdDetailIcon
                            key={`${bird.id + '-' + diet}`}
                            value={diet}
                        />
                    ))}

                    {bird.habitat.map((habitat) => (
                        <BirdDetailIcon
                            key={`${bird.id + '-' + habitat}`}
                            value={habitat}
                        />
                    ))}

                    {bird.movement && (
                        <BirdDetailIcon
                            key={`${bird.id + '-' + bird.movement}`}
                            value={bird.movement}
                        /> )}

                    <BirdDetailText
                        key={`${bird.id + '-' + bird.conservationStatus}`}
                        value={bird.conservationStatus}
                    />
                </div>
            </div>

            <div className="text-gray-600 text-base">
                <p className="text-base my-4">{bird.description}</p>
                {bird.otherNames.length > 0 && (<p className="text-base my-4"><strong>Outros Nomes:</strong> {bird.otherNames.join(', ')}</p>)}
            </div>

            <MainButton onClick={handleBack}>Voltar</MainButton>
        </div>
    );
};

export default BirdDetails;