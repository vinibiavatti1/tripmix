registerSubstance('Coffee', {

    /* General */
    img: 'coffee.png',
    info: 'Coffee contains caffeine that is a stimulant substance. Notable effects include stimulation, wakefulness, enhanced focus and motivation.',
    addictionLevel: 2,
    special: false,
    power: 1,
    unlockPoints: 0,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK],

    /* Stats */
    stats: {
        stimulant: true,
        sedative: false,
        hallucinogic: false,
        delirant: false,
        dissociative: false,
        depressant: false,
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
    flashEffect: POWER.HEAVY,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.NONE,

    /* Drunk */
    drunkEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.THRESHOLD,
        5: POWER.LIGHT,
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
            1: 'contrast(100%) brightness(100%)',
            2: 'contrast(100%) brightness(100%)',
            3: 'contrast(100%) brightness(100%)',
            4: 'contrast(100%) brightness(100%)',
            5: 'contrast(100%) brightness(100%)',
        },
        to: {
            1: 'contrast(150%) brightness(110%)',
            2: 'contrast(150%) brightness(120%)',
            3: 'contrast(150%) brightness(130%)',
            4: 'contrast(150%) brightness(140%)',
            5: 'contrast(150%) brightness(150%)',
        }
    },
});
