import { useAuth } from "contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "utils/firebase";
import { mockBirdwatching, mockUserStats } from "mockdata";
import { Birdwatching } from "types/Birdwatching";
import { UserStats } from "types/UserStats";
import { getBirdwatchingArrayFromDb, getUserStatsFromDb } from "services/firebase";
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';

import Modal from "components/Modal";
import ProgressBar from "components/ProgressBar";
import BirdwatchingItem from "components/BirdwatchingItem";

const UserProfile: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const [user, setUser] = useState<any>(null);
    const [birdwatchingHistory, setBirdwatchingHistory] = useState<Birdwatching[]>([]);
    const [userStats, setUserStats] = useState<UserStats | undefined>(undefined);

    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';

    useEffect(() => {
        setSelectedItems(new Set());
        const fetchUserData = async () => {
            if (auth.currentUser) {
                setUser({
                    name: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL,
                });

                setBirdwatchingHistory(useMockData ? mockBirdwatching : await getBirdwatchingArrayFromDb(auth.currentUser.uid));
                setUserStats(useMockData ? mockUserStats : await getUserStatsFromDb(auth.currentUser.uid));
            }
        };
        fetchUserData();
    }, [useMockData, setUser, setBirdwatchingHistory, setUserStats]);

    const handleAddBirdwatching = () => {
        navigate(`/birdwatching`);
    };

    const handleClick = (id: string) => {
        if (selectedItems.size) {
            handleLongPress(id)
        } else {
            navigate(`/birdwatching/${id}`);
        }
    };

    const handleLongPress = (id: string) => {
        setSelectedItems(prevState => {
            const newSelectedItems = new Set(prevState);
            if (newSelectedItems.has(id)) {
                newSelectedItems.delete(id);
            } else {
                newSelectedItems.add(id);
            }
            return newSelectedItems;
        });
    };

    const handleDeleteSelected = () => {
        console.log('Deleting selected items:', Array.from(selectedItems));
        // Proceed with deletion logic...
        setDeleteModalOpen(false);
        setSelectedItems(new Set());
    };

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(date);
    }

    return (
        <div className="max-w-lg mx-auto flex flex-col min-h-screen bg-background">
            {user && <div className="sticky top-0 w-full z-10 p-5 flex flex-col items-center bg-white">
                <div className="flex flex-row-reverse w-full">
                    <button onClick={handleLogout}><LogoutIcon /></button>
                </div>
                <img src={user.photoURL} alt="User profile" className="rounded-full w-24 h-24" />
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <div className="flex justify-between items-start gap-8 w-full mt-8">
                    <ProgressBar userStats={userStats} />
                    <p className="text-3xl font-semibold whitespace-nowrap leading-none">{userStats?.totalBirdwatchPoints} pts</p>
                </div>

            </div>}

            <div className="flex-grow overflow-y-auto z-0 p-5">
                <ul className="space-y-3">
                    {birdwatchingHistory.map((birdwatching, index) => {
                        const monthYearLabel = `${formatDate(birdwatching.date.toDate())}`;
                        const showMonthYearLabel = index === 0 || monthYearLabel !== formatDate(birdwatchingHistory[index - 1].date.toDate());

                        return (
                            <div key={birdwatching.id}>
                                {showMonthYearLabel && (
                                    <p className={`text-base pb-2 ${index === 0 ? '' : 'pt-4'}`}>{monthYearLabel}</p>
                                )}
                                <BirdwatchingItem
                                    birdwatching={birdwatching}
                                    isSelected={selectedItems.has(birdwatching.id)}
                                    onClick={() => {handleClick(birdwatching.id)}}
                                    onLongPress={() => {handleLongPress(birdwatching.id)}}
                                />
                            </div>
                        );
                    })}
                </ul>
            </div>

            <div className="sticky bottom-0 w-full p-5 bg-white">
                {selectedItems.size > 0 && (
                    <div className="flex justify-between">
                        <button onClick={() => setSelectedItems(new Set())}><CloseIcon /><span> {selectedItems.size}</span></button>
                        <button onClick={() => setDeleteModalOpen(true)}><DeleteOutlineIcon /></button>
                    </div>
                )}
                {selectedItems.size === 0 && (
                    <div className="flex flex-row-reverse w-full bg-white">
                        <button onClick={handleAddBirdwatching}><AddIcon/></button>
                    </div>
                )}
            </div>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteSelected}
                title="Confirmar Deleção"
                message={`Você tem certeza que deseja deletar ${selectedItems.size} registro(s)? Esta ação não pode ser desfeita.`}
            />
        </div>
    );
};

export default UserProfile;
