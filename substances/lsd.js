registerSubstance('LSD', {

    /* General */
    img: 'lsd.png',
    info: 'LSD is considered to be the best known, most researched, and culturally influential psychedelic substance.',
    category: CATEGORIES.HALLUCINOGIC,
    addictionLevel: 1,
    special: false,
    power: 5,
    unlockPoints: 800,
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
    verticalMirrorEffect: POWER.NONE,

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
        1: POWER.NONE,
        2: POWER.THRESHOLD,
        3: POWER.LIGHT,
        4: POWER.MODERATE,
        5: POWER.STRONG,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(150%)',
            2: 'saturate(4) contrast(150%)',
            3: 'saturate(5) contrast(150%)',
            4: 'saturate(7) hue-rotate(0deg) contrast(150%)',
            5: 'saturate(8) hue-rotate(0deg) contrast(200%)',
        },
        to: {
            1: 'saturate(1) contrast(100%)',
            2: 'saturate(1) contrast(100%)',
            3: 'saturate(1) contrast(100%)',
            4: 'saturate(1) hue-rotate(360deg) contrast(100%)',
            5: 'saturate(1) hue-rotate(360deg) contrast(100%)',
        }
    },
});
