registerSubstance('Peyote', {

    /* General */
    img: 'peyote.png',
    info: 'Peyote contains Mescaline that is one of the oldest known hallucinogen. Subjective effects include open and closed-eye visuals and ego-loss.',
    category: CATEGORIES.HALLUCINOGIC,
    addictionLevel: 0,
    special: false,
    power: 1,
    unlockPoints: 1000,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK, METHOD_TYPE.SMOKE],

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
    mirrorEffect: POWER.MODERATE,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
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
        4: POWER.NONE,
        5: POWER.NONE,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.THRESHOLD,
        3: POWER.MODERATE,
        4: POWER.STRONG,
        5: POWER.STRONG,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(100%)',
            2: 'saturate(3) contrast(110%)',
            3: 'saturate(5) contrast(140%)',
            4: 'saturate(6) contrast(150%)',
            5: 'saturate(6) hue-rotate(0deg) contrast(200%)',
        },
        to: {
            1: 'saturate(1) contrast(100%)',
            2: 'saturate(1) contrast(100%)',
            3: 'saturate(1) contrast(100%)',
            4: 'saturate(1) contrast(100%)',
            5: 'saturate(1) hue-rotate(360deg) contrast(100%)',
        }
    },
});
