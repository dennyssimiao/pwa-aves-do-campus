import dietAmphibian from 'assets/diet_amphibian.png';
import dietCarnivore from 'assets/diet_carnivore.png';
import dietCrustacean from 'assets/diet_crustacean.png';
import dietFish from 'assets/diet_fish.png';
import dietFruits from 'assets/diet_fruits.png';
import dietGrains from 'assets/diet_grains.png';
import dietInsect from 'assets/diet_insect.png';
import dietMollusk from 'assets/diet_mollusk.png';
import dietNectar from 'assets/diet_nectar.png';
import dietVegetable from 'assets/diet_vegetable.png';
import activityCathemeral from 'assets/activity_cathemeral.png';
import activityDiurnal from 'assets/activity_diurnal.png';
import activityNocturnal from 'assets/activity_nocturnal.png';
import habitatAquatic from 'assets/habitat_aquatic.png';
import habitatForest from 'assets/habitat_forest.png';
import habitatOpen from 'assets/habitat_open.png';
import movement_migration from 'assets/movement_migration.png';
import defaultIcon from 'assets/default.png';

type BirdDetailTextProperty = {
    bgColor: string;
    textColor: string;
    text: string;
};

type BirdDetailIconProperty = {
    iconPath: string;
    bgColor: string;
};

const birdDetailIconMap: Record<string, BirdDetailIconProperty> = {
    // Diet
    'anfíbios': { iconPath: dietAmphibian, bgColor: 'bg-green-600' },
    'carnívoro': { iconPath: dietCarnivore, bgColor: 'bg-green-600' },
    'crustáceos': { iconPath: dietCrustacean, bgColor: 'bg-green-600' },
    'peixes': { iconPath: dietFish, bgColor: 'bg-green-600' },
    'frutas': { iconPath: dietFruits, bgColor: 'bg-green-600' },
    'grãos': { iconPath: dietGrains, bgColor: 'bg-green-600' },
    'insetos': { iconPath: dietInsect, bgColor: 'bg-green-600' },
    'molusculos': { iconPath: dietMollusk, bgColor: 'bg-green-600' },
    'néctar': { iconPath: dietNectar, bgColor: 'bg-green-600' },
    'vegetais': { iconPath: dietVegetable, bgColor: 'bg-green-600' },
    // Activity
    'dioturno': { iconPath: activityCathemeral, bgColor: 'bg-blue-600' },
    'diurno': { iconPath: activityDiurnal, bgColor: 'bg-blue-600' },
    'noturno': { iconPath: activityNocturnal, bgColor: 'bg-blue-600' },
    // Habitat
    'aquático': { iconPath: habitatAquatic, bgColor: 'bg-yellow-600' },
    'floresta': { iconPath: habitatForest, bgColor: 'bg-yellow-600' },
    'ambiente aberto': { iconPath: habitatOpen, bgColor: 'bg-yellow-600' },
    // Movement
    'migratótio': { iconPath: movement_migration, bgColor: 'bg-cyan-600' },
    // Default
    'default': { iconPath: defaultIcon, bgColor: 'bg-black' },
};

const birdDetailTextMap: Record<string, BirdDetailTextProperty> = {
    // Rarity
    'comum': { bgColor: 'bg-green-500', textColor: 'text-white', text: 'COMUM' },
    'médio': { bgColor: 'bg-orange-500', textColor: 'text-white', text: 'MÉDIO' },
    'raro': { bgColor: 'bg-cyan-500', textColor: 'text-white', text: 'RARO' },
    'lendário': { bgColor: 'bg-purple-500', textColor: 'text-white', text: 'LEGENDÁRIO' },
    // Conservertion Status
    'extinta': { bgColor: 'bg-black', textColor: 'text-red-600', text: 'EX' },
    'extinta na natureza': { bgColor: 'bg-black', textColor: 'text-white', text: 'EW' },
    'criticamente em perigo': { bgColor: 'bg-red-600', textColor: 'text-white', text: 'CR' },
    'em perigo': { bgColor: 'bg-orange-600', textColor: 'text-red-200', text: 'EN' },
    'vulnerável': { bgColor: 'bg-yellow-600', textColor: 'text-yellow-200', text: 'VU' },
    'quase ameaçada': { bgColor: 'bg-green-600', textColor: 'text-green-200', text: 'NT' },
    'menos preocupante': { bgColor: 'bg-green-600', textColor: 'text-white', text: 'LC' },
    // Default
    'default': { bgColor: 'bg-white', textColor: 'text-black', text: '??' },
};

const getBirdDetailIcon = (value: string): BirdDetailIconProperty =>
    birdDetailIconMap[value] || birdDetailIconMap.default;

const getBirdDetailText = (value: string): BirdDetailTextProperty =>
    birdDetailTextMap[value] || birdDetailTextMap.default;

const getBirdDetailIconProperty = (value: string, property: keyof BirdDetailIconProperty): string =>
    getBirdDetailIcon(value)[property];

const getBirdDetailTextProperty = (value: string, property: keyof BirdDetailTextProperty): string =>
    getBirdDetailText(value)[property];

export { getBirdDetailIconProperty, getBirdDetailTextProperty };
