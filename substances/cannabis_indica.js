registerSubstance('Cannabis Indica', {

    /* General */
    img: 'cannabis_indica.png',
    info: 'Cannabis produces psychoactive effects when consumed. Cannabis indica has higher levels of THC compared to CBD.',
    category: CATEGORIES.CANNABINOID,
    addictionLevel: 1,
    special: false,
    power: 1,
    unlockPoints: 500,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.SMOKE],

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
    walkDelayEffect: POWER.THRESHOLD,
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
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.THRESHOLD,
        4: POWER.THRESHOLD,
        5: POWER.THRESHOLD,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.THRESHOLD,
        5: POWER.LIGHT,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'saturate(3) contrast(150%)',
            2: 'saturate(3) contrast(150%)',
            3: 'saturate(4) contrast(150%)',
            4: 'saturate(6) contrast(150%)',
            5: 'saturate(6) contrast(150%)',
        },
        to: {
            1: 'saturate(1) contrast(150%)',
            2: 'saturate(1) contrast(150%)',
            3: 'saturate(1) contrast(160%)',
            4: 'saturate(1) contrast(160%)',
            5: 'saturate(1) contrast(160%)',
        }
    },
});
