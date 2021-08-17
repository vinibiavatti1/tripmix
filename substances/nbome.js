registerSubstance('NBOMe', {

    /* General */
    img: 'nbome.png',
    info: 'NBOMe produces an array of visually-dominant and stimulating psychedelic effects. Usually, it is sold misrepresented as LSD.',
    category: CATEGORIES.HALLUCINOGIC,
    addictionLevel: 2,
    special: false,
    power: 4,
    unlockPoints: 600,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK],

    /* Stats */
    stats: {
        stimulant: true,
        sedative: false,
        hallucinogic: true,
        delirant: false,
        dissociative: false,
        depressant: true,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    randomWalkEffect: POWER.NONE,
    lowDelirantEffect: POWER.NONE,
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.STRONG,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.STRONG,

    /* Drunk */
    drunkEffects: {
        1: POWER.THRESHOLD,
        2: POWER.LIGHT,
        3: POWER.LIGHT,
        4: POWER.MODERATE,
        5: POWER.STRONG,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.THRESHOLD,
        3: POWER.THRESHOLD,
        4: POWER.LIGHT,
        5: POWER.MODERATE,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(150%)',
            2: 'saturate(3) contrast(150%)',
            3: 'saturate(4) contrast(150%)',
            4: 'saturate(5) contrast(150%)',
            5: 'saturate(6) contrast(200%)',
        },
        to: {
            1: 'saturate(1) contrast(100%)',
            2: 'saturate(1) contrast(100%)',
            3: 'saturate(1) contrast(100%)',
            4: 'saturate(1) contrast(100%)',
            5: 'saturate(1) contrast(100%)',
        }
    },
});
