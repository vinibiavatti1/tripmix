registerSubstance('Nutmeg', {

    /* General */
    img: 'nutmeg.png',
    info: 'Nutmeg has a delirant substance called by myristicin. It is reported to induce hallucinogenic effects, such as visual distortions and paranoid ideation.',
    addictionLevel: 0,
    special: false,
    power: 1,
    unlockPoints: 0,
    worksOnMethod: ['eat', 'drink'],

    /* Substance Properties */
    delirant: true,
    dmt: false,
    dissociative: false,

    /* Stats */
    stats: {
        stimulant: false,
        sedative: false,
        hallucinogic: true,
        delirant: true,
        dissociative: false,
        depressant: true,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    highDelirantEffect: POWER.HEAVY,
    mirrorEffect: POWER.HEAVY,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,

    /* Drunk */
    drunkEffects = {
        1: POWER.THRESHOLD,
        2: POWER.LIGHT,
        3: POWER.LIGHT,
        4: POWER.MODERATE,
        5: POWER.MODERATE,
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
            1: 'grayscale(0%)',
            2: 'grayscale(0%)',
            3: 'grayscale(0%) brightness(100%)',
            4: 'grayscale(0%) blur(0px) brightness(100%)',
            5: 'grayscale(0%) blur(0px) brightness(100%)',
        },
        to: {
            1: 'grayscale(10%)',
            2: 'grayscale(20%)',
            3: 'grayscale(40%) brightness(80%)',
            4: 'grayscale(50%) blur(2px) brightness(60%)',
            5: 'grayscale(70%) blur(3px) brightness(50%)',
        }
    },
});
