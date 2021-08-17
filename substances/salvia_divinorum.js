registerSubstance('Salvia Divinorum', {

    /* General */
    img: 'salvia_divinorum.png',
    info: 'Salvia Divinorum contains Salvinorin A which is a psychoactive substance. It differs in subjective experience compared to other hallucinogens.',
    category: CATEGORIES.DISSOCIATIVE,
    addictionLevel: 1,
    special: false,
    power: 3,
    unlockPoints: 1100,
    worksOnMethod: [METHOD_TYPE.DRINK, METHOD_TYPE.SMOKE],

    /* Stats */
    stats: {
        stimulant: false,
        sedative: false,
        hallucinogic: true,
        delirant: false,
        dissociative: true,
        depressant: false,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    randomWalkEffect: POWER.NONE,
    lowDelirantEffect: POWER.NONE,
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.LIGHT,
    whiteNoiseEffect: POWER.HEAVY,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.HEAVY,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.STRONG,
    verticalMirrorEffect: POWER.MODERATE,

    /* Drunk */
    drunkEffects: {
        1: POWER.THRESHOLD,
        2: POWER.THRESHOLD,
        3: POWER.THRESHOLD,
        4: POWER.THRESHOLD,
        5: POWER.THRESHOLD,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.THRESHOLD,
        2: POWER.THRESHOLD,
        3: POWER.THRESHOLD,
        4: POWER.MODERATE,
        5: POWER.MODERATE,
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
