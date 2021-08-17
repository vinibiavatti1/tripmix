registerSubstance('SUBSTANCE_NAME', {

    /* General */
    img: 'IMG.png',
    info: 'DESCRIPTION.',
    category: CATEGORIES.STIMULANT,
    addictionLevel: 0,
    special: false,
    power: 0,
    unlockPoints: 0,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK, METHOD_TYPE.SMOKE],

    /* Stats */
    stats: {
        stimulant: false,
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
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.NONE,

    /* Drunk */
    drunkEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.NONE,
        5: POWER.NONE,
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
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        },
        to: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        }
    },
});
