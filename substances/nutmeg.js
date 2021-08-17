registerSubstance('Nutmeg', {

    /* General */
    img: 'nutmeg.png',
    info: 'Nutmeg has a delirant substance called by myristicin. It is reported to induce hallucinogenic and paranoid effects.',
    category: CATEGORIES.DELIRANT,
    addictionLevel: 0,
    special: false,
    power: 1,
    unlockPoints: 1400,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK],

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
    randomWalkEffect: POWER.NONE,
    lowDelirantEffect: POWER.STRONG,
    highDelirantEffect: POWER.HEAVY,
    mirrorEffect: POWER.HEAVY,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.HEAVY,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.NONE,
    verticalMirrorEffect: POWER.NONE,

    /* Drunk */
    drunkEffects: {
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
