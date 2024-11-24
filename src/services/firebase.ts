import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Bird } from 'types/Birds';
import { Birdwatching } from 'types/Birdwatching';
import { UserStats } from 'types/UserStats';
import { database } from 'utils/firebase';

export const getBirdsFromDb = async () => {
    const birdsRef = collection(database, 'birds');
    const birdsQuery = query(birdsRef);
    const birdsSnapshot = await getDocs(birdsQuery);

    return birdsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Bird[];
}

export const getBirdsByIdFromDb = async (birdIds: string[] | null | undefined) => {
    if (!birdIds || birdIds.length === 0) return [];

    const birdsRef = collection(database, 'birds');
    const birdsQuery = query(birdsRef, where('id', 'in', birdIds));
    const birdsSnapshot = await getDocs(birdsQuery);

    return birdsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Bird[];
}

export const getBirdwatchingFromDb = async (id: string) => {
    const birdwatchingRef = collection(database, 'birdwatch');
    const birdwatchingQuery = query(birdwatchingRef, where('id', '==', id), orderBy('date', 'desc'));
    const birdwatchingSnapshot = await getDocs(birdwatchingQuery);

    return !birdwatchingSnapshot.empty ? birdwatchingSnapshot.docs[0].data() as Birdwatching : null;
}

export const getBirdwatchingArrayFromDb = async (userId: string) => {
    const birdwatchingRef = collection(database, 'birdwatch');
    const birdwatchingQuery = query(birdwatchingRef, where('userId', '==', userId));
    const birdwatchingSnapshot = await getDocs(birdwatchingQuery);

    return birdwatchingSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Birdwatching[];
};

export const getUserStatsFromDb = async (userId: string) => {
    const userStatsRef = collection(database, 'userStats');
    const userStatsQuery = query(userStatsRef, where('userId', '==', userId));
    const userStatsSnapshot = await getDocs(userStatsQuery);

    return !userStatsSnapshot.empty ? userStatsSnapshot.docs[0].data() as UserStats : undefined;
};

export const getBirdFromDb = async (id: string) => {
    const birdsRef = collection(database, 'birds');
    const birdQuery = query(birdsRef, where('id', '==', id));
    const birdSnapshot = await getDocs(birdQuery);

    return !birdSnapshot.empty ? birdSnapshot.docs[0].data() as Bird : null;
}
