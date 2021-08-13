let statsLevels = {
    0: { name: 'None', class: 'l0' },
    1: { name: 'Threshold', class: 'l1' },
    2: { name: 'Light', class: 'l2' },
    3: { name: 'Moderate', class: 'l3' },
    4: { name: 'Strong', class: 'l4' },
    5: { name: 'Heavy', class: 'l5' },
};
let powerLevels = {
    0: { name: 'None', class: 'l0b' },
    1: { name: 'Light', class: 'l1b' },
    2: { name: 'Moderate', class: 'l2b' },
    3: { name: 'Strong', class: 'l3b' },
    4: { name: 'Heavy', class: 'l4b' },
    5: { name: 'Death Risk', class: 'l5b' },
};
let deepDreamPower = {
    none: 0,
    low: 1,
    high: 2,
}
let methods = {
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
}
let landscapes = {
    'Lake (Açores - PT)': {
        number: 1,
        imgs: ['lake/lake1.png', 'lake/lake2.png', 'lake/lake3.png', 'lake/lake4.png', 'lake/lake5.png', 'lake/lake6.png', 'lake/lake7.png', 'lake/lake8.png', 'lake/lake9.png', 'lake/lake10.png', 'lake/lake11.png', 'lake/lake12.png', 'lake/lake13.png', 'lake/lake14.png'],
        deepDreamImgLow: 'lake/lake_deep1.jpg',
        deepDreamImgHigh: 'lake/lake_deep2.jpg',
        dissociativeImgLow: '',
        dissociativeImgHigh: '',
    },
}
let substances = {}