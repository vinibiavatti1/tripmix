registerSubstance('Ketamine', {

    /* General */
    img: 'ketamine.png',
    info: 'Ketamine is a classical dissociative substance. It is the most well-known and widely-used among the dissociatives.',
    category: CATEGORIES.DISSOCIATIVE,
    addictionLevel: 1,
    special: false,
    power: 3,
    unlockPoints: 1000,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK, METHOD_TYPE.SMOKE],

    /* Stats */
    stats: {
        stimulant: false,
        sedative: false,
        hallucinogic: true,
        delirant: false,
        dissociative: true,
        depressant: true,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    randomWalkEffect: POWER.NONE,
    lowDelirantEffect: POWER.NONE,
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.STRONG,
    whiteNoiseEffect: POWER.LIGHT,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.MODERATE,
    highDissociativeEffect: POWER.HEAVY,
    meltingEffect: POWER.HEAVY,

    /* Drunk */
    drunkEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.NONE,
        5: POWER.THRESHOLD,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.THRESHOLD,
        4: POWER.LIGHT,
        5: POWER.LIGHT,
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
            1: 'brightness(90%)',
            2: 'brightness(80%)',
            3: 'brightness(80%)',
            4: 'brightness(70%)',
            5: 'brightness(70%)',
        }
    },
});
