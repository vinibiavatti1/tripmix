registerSubstance('Wine', {

    /* General */
    img: 'wine.png',
    info: 'Wine is an alcoholic drink typically made from fermented grapes.',
    category: CATEGORIES.DEPRESSANT,
    addictionLevel: 2,
    special: false,
    power: 3,
    unlockPoints: 100,
    worksOnMethod: [METHOD_TYPE.DRINK],

    /* Stats */
    stats: {
        stimulant: true,
        sedative: true,
        hallucinogic: false,
        delirant: false,
        dissociative: false,
        depressant: true,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    randomWalkEffect: POWER.NONE,
    lowDelirantEffect: POWER.NONE,
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.NONE,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.NONE,
    verticalMirrorEffect: POWER.NONE,

    /* Drunk */
    drunkEffects: {
        1: POWER.THRESHOLD,
        2: POWER.LIGHT,
        3: POWER.MODERATE,
        4: POWER.STRONG,
        5: POWER.STRONG,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.NONE,
        5: POWER.NONE,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        },
        to: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        }
    },
});
