import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { UserStats } from "types/UserStats";

interface ProgressBarProps {
    userStats: UserStats | undefined;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ userStats }) => {
    const totalBirds = userStats?.birdSightings.length ?? 0;
    const seenBirds = userStats?.birdSightings.filter((sighting) => sighting.wasSeen).length ?? 0;
    const birdsSeenProgress = totalBirds === 0 ? 0 : (seenBirds / totalBirds) * 100;

    return (
        <div className="w-full max-w-md mx-auto">
            <LinearProgress
                variant="determinate"
                value={birdsSeenProgress}
                sx={{
                    height: 10, // Altura da barra de progresso
                    borderRadius: 5, // Bordas arredondadas
                    backgroundColor: '#e0e0e0', // Cor do fundo da barra
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: birdsSeenProgress === 100 ? '#4caf50' : '#1976d2', // Cor da barra (verde se 100%, azul caso contrário)
                    },
                }}
            />
            <div className="mt-1 text-left">
                <span className="text-base font-semibold text-gray-700">
                    {seenBirds}/{totalBirds} espécies
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
