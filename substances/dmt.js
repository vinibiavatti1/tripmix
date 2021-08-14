registerSubstance('DMT', {

    /* General */
    img: 'dmt.png',
    info: 'DMT is known for its unique ability to produce short-lived but intense visionary states and complete hallucinations.',
    addictionLevel: 0,
    special: true,
    power: 1,
    unlockPoints: 0,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK, METHOD_TYPE.SMOKE],

    /* Stats */
    stats: {
        stimulant: false,
        sedative: true,
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
    mirrorEffect: POWER.THRESHOLD,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.MODERATE,
    dmtEffect: POWER.HEAVY,

    /* Drunk */
    drunkEffects = {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.NONE,
        5: POWER.NONE,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.MODERATE,
        3: POWER.HEAVY,
        4: POWER.HEAVY,
        5: POWER.NONE,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'saturate(3) contrast(150%)',
            2: 'saturate(4) contrast(150%)',
            3: 'saturate(5) hue-rotate(0deg) contrast(200%)',
            4: 'saturate(6) hue-rotate(0deg) contrast(250%)',
            5: '',
        },
        to: {
            1: 'saturate(1) contrast(100%)',
            2: 'saturate(1) contrast(100%)',
            3: 'saturate(1) hue-rotate(360deg) contrast(100%)',
            4: 'saturate(1) hue-rotate(360deg) contrast(100%)',
            5: '',
        }
    },
});
