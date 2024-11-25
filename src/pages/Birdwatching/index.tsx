import { useBirdwatching } from 'contexts/BirdwatchingContext';
import { mockBirds, mockBirdwatching } from 'mockdata';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBirdsFromDb, getBirdwatchingFromDb } from 'services/firebase';
import { Bird } from 'types/Birds';
import BirdItem from 'components/BirdItem';
import SearchBar from 'components/SearchBar';
import DateTimePicker from 'components/DateTimePicker';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const Birdwatching: React.FC = () => {
    const { birdwatchingId } = useParams<{ birdwatchingId?: string }>();

    const navigate = useNavigate();
    const {
        selectedBirds,
        date,
        totalPoints,
        isLocked,
        setSelectedBirds,
        setDate,
        setTotalPoints,
        setIsLocked
    } = useBirdwatching();

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const [birds, setBirds] = useState<Bird[]>([]);

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';

    useEffect(() => {
        const fetchBirds = async () => {
            setBirds(useMockData ? mockBirds : await getBirdsFromDb());
        };

        const fetchBirdwatching = async () => {
            if (birdwatchingId) {
                const birdwatching = (useMockData
                    ? (mockBirdwatching.find(b => b.id === birdwatchingId) || null)
                    : await getBirdwatchingFromDb(birdwatchingId));

                if (birdwatching) {
                    setDate(birdwatching.date.toDate());
                    setSelectedBirds(new Set(birdwatching.birdIds));
                    setTotalPoints(birdwatching.totalPoints);
                    setIsLocked(true);
                } else {
                    console.warn(`Birdwatching with id ${birdwatchingId} not found.`);
                }
            } else {
                setDate(new Date());
                setSelectedBirds(new Set());
                setTotalPoints(0);
                setIsLocked(false);
            }
        };

        fetchBirds();
        fetchBirdwatching();
    }, [birdwatchingId, useMockData, setDate, setSelectedBirds, setTotalPoints, setIsLocked]);

    const handleSearchVisibility = (value: boolean) => {
        window.scrollTo({ top: 0 });
        setSearchTerm('');
        setIsSearchVisible(value);
    };

    const handleBirdToggle = (birdId: string) => {
        if (isLocked) return;

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

        setTotalPoints(newTotalPoints);
        setSelectedBirds(newSelectedBirds);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const filteredBirds = birds.filter((bird) =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-lg mx-auto flex flex-col min-h-screen bg-background">
            <div className="sticky top-0 w-full z-10 p-5 flex justify-between bg-white">
                <span className="text-xl font-semibold text-left">{selectedBirds.size} espécies</span>
                <span className="text-xl font-semibold text-right whitespace-nowrap">{totalPoints} pts</span>
            </div>

            <div className="flex-grow overflow-y-auto z-0 p-5">
                <SearchBar
                    value={searchTerm}
                    isVisible={isSearchVisible}
                    onChange={setSearchTerm}
                    onClose={() => handleSearchVisibility(false)}
                    placeholder="Pesquisar pássaros..."
                    className="mb-4"
                />

                <ul className="space-y-2">
                    {filteredBirds.map((bird) => (
                        (isLocked ? selectedBirds.has(bird.id) : true) &&
                        <BirdItem
                            key={bird.id}
                            bird={bird}
                            isSelected={selectedBirds.has(bird.id)}
                            onToggle={handleBirdToggle}
                            disabled={isLocked}
                        />
                    ))}
                </ul>
            </div>

            <div className="sticky bottom-0 w-full p-5 flex justify-between items-center bg-white">
                <div className="flex gap-2">
                    <button onClick={handleBack}><ArrowBackIcon fontSize="large" /></button>
                    <button
                        onClick={() => setIsLocked(!isLocked)}
                        className={`${!birdwatchingId ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                        {isLocked ? <ModeEditIcon fontSize="large" /> : <CheckIcon fontSize="large" />}
                    </button>
                </div>

                <DateTimePicker date={date} setDate={setDate} disabled={isLocked} />

                <div className="flex gap-2">
                    <button onClick={() => { handleSearchVisibility(true) }}>
                        <SearchIcon fontSize="large" />
                    </button>

                    <button><TuneIcon fontSize="large" /></button>
                </div>
            </div>
        </div>
    );
};

export default Birdwatching;
