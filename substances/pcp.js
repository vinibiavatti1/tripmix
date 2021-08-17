registerSubstance('PCP', {

    /* General */
    img: 'pcp.png',
    info: 'Phencyclidine is a synthetic dissociative substance and produces potent long-lived dissociating and hallucinogic effects.',
    category: CATEGORIES.DISSOCIATIVE,
    addictionLevel: 1,
    special: false,
    power: 5,
    unlockPoints: 1100,
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
    shadowPeopleEffect: POWER.HEAVY,
    lowDissociativeEffect: POWER.LIGHT,
    highDissociativeEffect: POWER.HEAVY,
    meltingEffect: POWER.MODERATE,

    /* Drunk */
    drunkEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.THRESHOLD,
        5: POWER.THRESHOLD,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.THRESHOLD,
        2: POWER.LIGHT,
        3: POWER.LIGHT,
        4: POWER.MODERATE,
        5: POWER.MODERATE,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'brightness(100%) contrast(100%)',
            2: 'brightness(100%) contrast(100%)',
            3: 'brightness(100%) contrast(150%)',
            4: 'brightness(100%) contrast(150%) saturate(0)',
            5: 'brightness(100%) contrast(150%) saturate(0)',
        },
        to: {
            1: 'brightness(80%) contrast(150%)',
            2: 'brightness(70%) contrast(200%)',
            3: 'brightness(70%) contrast(200%)',
            4: 'brightness(60%) contrast(200%) saturate(2)',
            5: 'brightness(60%) contrast(200%) saturate(5)',
        }
    },
});
