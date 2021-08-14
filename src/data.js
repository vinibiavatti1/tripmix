const POWER = {
    NONE: 0,
    THRESHOLD: 1,
    LIGHT: 2,
    MODERATE: 3,
    STRONG: 4,
    HEAVY: 5,
};
const SCREENS = {
    INTRO: '#intro',
    GAME: '#game',
    SIMULATION: '#simulation',
    GAME_OVER: '#game_over',
}
const STATS_LEVELS = {
    0: { name: 'None', class: 'text-gray' },
    1: { name: 'Threshold', class: 'text-cyan' },
    2: { name: 'Light', class: 'text-orange' },
    3: { name: 'Moderate', class: 'text-yellow' },
    4: { name: 'Strong', class: 'text-brown' },
    5: { name: 'Heavy', class: 'text-red' },
};
const POWER_LEVELS = {
    0: { name: 'None', class: 'gray' },
    1: { name: 'Light', class: 'cyan' },
    2: { name: 'Moderate', class: 'orange' },
    3: { name: 'Strong', class: 'yellow' },
    4: { name: 'Heavy', class: 'brown' },
    5: { name: 'Death Risk', class: 'red' },
};
const DRUNK_LEVELS = {
    1: '2px;',
    2: '8px;',
    3: '12px;',
    4: '20px;',
    5: '80px;',
}
const DEEP_DREAMS = [
    'deep1.png',
    'deep2.png',
    'deep3.png',
    'deep4.png',
    'deep5.png',
    'deep6.png',
    'deep7.png',
    'deep8.png',
    'deep9.png',
    'deep10.png',
];
const METHOD_TYPE = {
    ALL: 'all',
    EAT: 'eat',
    DRINK: 'drink',
    SMOKE: 'smoke',
};
const METHODS = {
    'Plate': {
        img: 'plate.png',
        type: METHOD_TYPE.EAT,
        info: 'Plate (eating): Mix the substances and eat it.',
        unlockPoints: 0,
    },
    'Cup': {
        img: 'cup.png',
        type: METHOD_TYPE.DRINK,
        info: 'Cup (drinking): Mix the substances inside the cup and drink it.',
        unlockPoints: 0,
    },
    'Bottle': {
        img: 'bottle.png',
        type: METHOD_TYPE.DRINK,
        info: 'Bottle (drinking): Mix the substances into a bottle and drink it.',
        unlockPoints: 0,
    },
    'Pipe': {
        img: 'pipe.png',
        type: METHOD_TYPE.SMOKE,
        info: 'Pipe (smoking): Put the substances into a pipe and smoke it.',
        unlockPoints: 0,
    },
    'Joint': {
        img: 'joint.png',
        type: METHOD_TYPE.SMOKE,
        info: 'Joint (smoking): Make a joint cigarette with the substances and smoke it.',
        unlockPoints: 0,
    },
    'Hookah': {
        img: 'hookah.png',
        type: METHOD_TYPE.SMOKE,
        info: 'Hookah (smoking): Put the substances into the Hookah to heating and smoke it with some water as filter.',
        unlockPoints: 0,
    },
    'Bong': {
        img: 'bong.png',
        type: METHOD_TYPE.SMOKE,
        info: 'Bong (smoking): Smoke the substances using a bong with water inside to filter the smoke.',
        unlockPoints: 0,
    },
    'All': {
        img: 'all.png',
        type: METHOD_TYPE.ALL,
        info: 'All: Use all you methods to use the drug. (Are you anxious?)',
        unlockPoints: 0,
    },
};
const LANDSCAPES = {
    'Lake (Açores - PT)': {
        folder: 'lake',
        imgs: ['lake1.png', 'lake2.png', 'lake3.png', 'lake4.png', 'lake5.png', 'lake6.png', 'lake7.png', 'lake8.png', 'lake9.png', 'lake10.png', 'lake11.png', 'lake12.png', 'lake13.png', 'lake14.png'],
    },
}
let SUBSTANCES = {};
