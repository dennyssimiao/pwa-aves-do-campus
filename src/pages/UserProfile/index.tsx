import { useAuth } from "contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "utils/firebase";
import { mockBirdwatching, mockUserStats } from "mockdata";
import { Birdwatching } from "types/Birdwatching";
import { UserStats } from "types/UserStats";
import { getBirdwatchingArrayFromDb, getUserStatsFromDb } from "services/firebase";
import BirdwatchingItem from "components/BirdwatchingItem";
import MainButton from "components/MainButton";

const UserProfile: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const [user, setUser] = useState<any>(null);
    const [birdwatchingHistory, setBirdwatchingHistory] = useState<Birdwatching[]>([]);
    const [userStats, setUserStats] = useState<UserStats | undefined>(undefined);

    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'true';

    useEffect(() => {
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
        navigate(`/register-birdwatching`);
    };

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <div className="max-w-lg mx-auto p-5 pb-16">
            {user && (
                <div className="w-full flex justify-between items-stretch p-4 rounded-lg bg-gray-800 text-white">
                    <div>
                        <img src={user.photoURL} alt="User profile" className="rounded-full" />
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded text-white text-sm">
                            Sair
                        </button>
                        <div className="text-right mt-auto">
                            <h2 className="text-xl font-bold">{user?.name}</h2>
                            <p className="text-lg font-semibold">{userStats?.totalBirdwatchPoints} pontos</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full flex items-center px-4 py-3 my-4 bg-gray-600 text-white rounded-lg">
                <h3 className="text-lg font-bold">Suas Passarinhadas</h3>
            </div>

            <ul className="space-y-4">
                {birdwatchingHistory.map((birdwatching) => (
                    <BirdwatchingItem
                        key={birdwatching.id}
                        birdwatching={birdwatching}
                    />
                ))}
            </ul>

            <MainButton onClick={handleAddBirdwatching}>Nova Passarinhada</MainButton>
        </div>
    );
};

export default UserProfile;
