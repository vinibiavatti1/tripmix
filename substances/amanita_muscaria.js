registerSubstance('Amanita Muscaria', {

    /* General */
    img: 'amanita_muscaria.png',
    info: 'Amanita Muscaria  is a psychoactive mushroom which contains muscimol. Muscimol produces sedative, depressant and deliriant effects.',
    category: CATEGORIES.DELIRANT,
    addictionLevel: 0,
    special: false,
    power: 8,
    unlockPoints: 1500,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK, METHOD_TYPE.SMOKE],

    /* Stats */
    stats: {
        stimulant: false,
        sedative: true,
        hallucinogic: true,
        delirant: true,
        dissociative: false,
        depressant: false,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    randomWalkEffect: POWER.HEAVY,
    lowDelirantEffect: POWER.MODERATE,
    highDelirantEffect: POWER.HEAVY,
    mirrorEffect: POWER.STRONG,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.HEAVY,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.MODERATE,
    verticalMirrorEffect: POWER.NONE,

    /* Drunk */
    drunkEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.MODERATE,
        5: POWER.MODERATE,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.THRESHOLD,
        3: POWER.MODERATE,
        4: POWER.MODERATE,
        5: POWER.STRONG,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'grayscale(0%) blur(0px)',
            2: 'grayscale(0%) blur(0px)',
            3: 'grayscale(0%) saturate(0) blur(0px)',
            4: 'grayscale(0%) saturate(0) blur(0px)',
            5: 'grayscale(0%) saturate(0) blur(0px)',
        },
        to: {
            1: 'grayscale(20%) blur(0px)',
            2: 'grayscale(40%) blur(1px)',
            3: 'grayscale(60%) saturate(3) blur(1px)',
            4: 'grayscale(80%) saturate(4) blur(2px)',
            5: 'grayscale(90%) saturate(5) blur(3px)',
        }
    },
});
