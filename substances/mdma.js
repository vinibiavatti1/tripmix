registerSubstance('MDMA', {

    /* General */
    img: 'mdma.png',
    info: 'MDMA is classified as an stimulant due to how it facilitates feelings of closeness with one\'s self and others.',
    addictionLevel: 3,
    special: false,
    power: 4,
    unlockPoints: 500,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK],

    /* Stats */
    stats: {
        stimulant: true,
        sedative: false,
        hallucinogic: true,
        delirant: false,
        dissociative: false,
        depressant: false,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    randomWalkEffect: POWER.NONE,
    lowDelirantEffect: POWER.NONE,
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.HEAVY,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.HEAVY,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.THRESHOLD,
    highEuphoricEffect: POWER.MODERATE,
    flashEffect: POWER.THRESHOLD,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.NONE,

    /* Drunk */
    drunkEffects: {
        1: POWER.THRESHOLD,
        2: POWER.THRESHOLD,
        3: POWER.THRESHOLD,
        4: POWER.LIGHT,
        5: POWER.LIGHT,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.THRESHOLD,
        5: POWER.THRESHOLD,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'brightness(100%)',
            2: 'brightness(100%)',
            3: 'brightness(100%)',
            4: 'brightness(100%)',
            5: 'brightness(100%)',
        },
        to: {
            1: 'brightness(150%)',
            2: 'brightness(160%)',
            3: 'brightness(200%)',
            4: 'brightness(220%)',
            5: 'brightness(250%)',
        }
    },
});
