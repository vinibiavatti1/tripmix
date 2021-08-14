registerSubstance('Datura', {

    /* General */
    img: 'datura.png',
    info: 'Datura is known as powerful and dangerous deliriant, used for shamanic and medical purposes, as well as poisons.',
    addictionLevel: 0,
    special: false,
    power: 7,
    unlockPoints: 0,
    worksOnMethod: ['eat', 'drink', 'smoke'],

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
        depressant: false,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    highDelirantEffect: POWER.MODERATE,
    mirrorEffect: POWER.LIGHT,
    whiteNoiseEffect: POWER.HEAVY,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,

    /* Drunk */
    drunkEffects = {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.THRESHOLD,
        4: POWER.MODERATE,
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
            1: 'grayscale(0%) blur(0px) brightness(100%)',
            2: 'grayscale(0%) blur(0px) brightness(100%)',
            3: 'grayscale(0%) blur(0px) brightness(100%)',
            4: 'grayscale(0%) blur(0px) brightness(100%)',
            5: 'grayscale(0%) blur(0px) brightness(100%)',
        },
        to: {
            1: 'grayscale(40%) blur(0px) brightness(50%)',
            2: 'grayscale(50%) blur(1px) brightness(40%)',
            3: 'grayscale(60%) blur(1px) brightness(30%)',
            4: 'grayscale(70%) blur(2px) brightness(20%)',
            5: 'grayscale(90%) blur(3px) brightness(20%)',
        }
    },
});
