registerSubstance('Datura', {

    /* General */
    img: 'datura.png',
    info: 'Datura is known as powerful and dangerous deliriant, used for shamanic and medical purposes, as well as poisons.',
    category: CATEGORIES.DELIRANT,
    addictionLevel: 0,
    special: false,
    power: 10,
    unlockPoints: 1300,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK, METHOD_TYPE.SMOKE],

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
    randomWalkEffect: POWER.MODERATE,
    lowDelirantEffect: POWER.THRESHOLD,
    highDelirantEffect: POWER.MODERATE,
    mirrorEffect: POWER.LIGHT,
    whiteNoiseEffect: POWER.HEAVY,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.MODERATE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.HEAVY,

    /* Drunk */
    drunkEffects: {
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
            5: 'grayscale(0%) blur(0px) brightness(100%) invert(200%)',
        },
        to: {
            1: 'grayscale(40%) blur(0px) brightness(50%)',
            2: 'grayscale(50%) blur(1px) brightness(40%)',
            3: 'grayscale(60%) blur(1px) brightness(30%)',
            4: 'grayscale(70%) blur(2px) brightness(20%)',
            5: 'grayscale(90%) blur(3px) brightness(20%) invert(200%)',
        }
    },
});
