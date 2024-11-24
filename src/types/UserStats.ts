export interface UserStats {
    id: string;
    totalBirdwatchPoints: number;
    birdSightings: {
        birdId: string;
        wasSeen: boolean;
    }[];
}