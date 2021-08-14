registerSubstance('Psilocybin Mushrooms', {

    /* General */
    img: 'psilocybin_mushrooms.png',
    info: 'Psilocybin Mushrooms are a family of psychoactive mushrooms that contain psilocybin, a psychedelic substance.',
    addictionLevel: 0,
    special: false,
    power: 1,
    unlockPoints: 0,
    worksOnMethod: ['eat', 'drink', 'smoke'],

    /* Substance Properties */
    delirant: false,
    dmt: false,
    dissociative: false,

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
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.MODERATE,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,

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
        2: POWER.THRESHOLD,
        3: POWER.MODERATE,
        4: POWER.STRONG,
        5: POWER.HEAVY,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(120%)',
            2: 'saturate(3) contrast(150%)',
            3: 'saturate(4) contrast(150%)',
            4: 'saturate(5) hue-rotate(0deg) contrast(150%)',
            5: 'saturate(6) hue-rotate(0deg) contrast(200%)',
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
