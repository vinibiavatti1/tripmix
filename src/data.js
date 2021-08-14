const POWER = {
    NONE: 0,
    THRESHOLD: 1,
    LIGHT: 2,
    MODERATE: 3,
    STRONG: 4,
    HEAVY: 5,
};
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
const DEEP_DREAMS = {
    1: 'deep1.png',
    2: 'deep2.png',
    3: 'deep3.png',
    4: 'deep4.png',
    5: 'deep5.png',
    6: 'deep6.png',
    7: 'deep7.png',
    8: 'deep8.png',
    9: 'deep9.png',
    10: 'deep10.png',
}
const METHODS = {
    'Plate': {
        img: 'plate.png',
        type: 'eat',
        info: 'Plate (eating): Mix the substances and eat it.',
        unlockPoints: 0,
    },
    'Cup': {
        img: 'cup.png',
        type: 'drink',
        info: 'Cup (drinking): Mix the substances inside the cup and drink it.',
        unlockPoints: 0,
    },
    'Bottle': {
        img: 'bottle.png',
        type: 'drink',
        info: 'Bottle (drinking): Mix the substances into a bottle and drink it.',
        unlockPoints: 0,
    },
    'Pipe': {
        img: 'pipe.png',
        type: 'smoke',
        info: 'Pipe (smoking): Put the substances into a pipe and smoke it.',
        unlockPoints: 0,
    },
    'Joint': {
        img: 'joint.png',
        type: 'smoke',
        info: 'Joint (smoking): Make a joint cigarette with the substances and smoke it.',
        unlockPoints: 0,
    },
    'Hookah': {
        img: 'hookah.png',
        type: 'smoke',
        info: 'Hookah (smoking): Put the substances into the Hookah to heating and smoke it with some water as filter.',
        unlockPoints: 0,
    },
    'Bong': {
        img: 'bong.png',
        type: 'smoke',
        info: 'Bong (smoking): Smoke the substances using a bong with water inside to filter the smoke.',
        unlockPoints: 0,
    },
    'All': {
        img: 'all.png',
        type: 'all',
        info: 'All: Use all you methods to use the drug. (Are you anxious?)',
        unlockPoints: 0,
    },
};
const LANDSCAPES = {
    'Lake (Açores - PT)': {
        imgs: ['lake/lake1.png', 'lake/lake2.png', 'lake/lake3.png', 'lake/lake4.png', 'lake/lake5.png', 'lake/lake6.png', 'lake/lake7.png', 'lake/lake8.png', 'lake/lake9.png', 'lake/lake10.png', 'lake/lake11.png', 'lake/lake12.png', 'lake/lake13.png', 'lake/lake14.png'],
    },
}
let SUBSTANCIES = {};
