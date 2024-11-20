import { Timestamp } from "firebase/firestore";

export interface Birdwatching {
    id: string;
    date: Timestamp;
    birdIds: string[];
    totalPoints: number;
}
