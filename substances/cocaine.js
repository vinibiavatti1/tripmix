registerSubstance('Cocaine', {

    /* General */
    img: 'cocaine.png',
    info: 'The cocaine high is characterized by a rapid onset and a short duration, which produces a strong euphoric rush.',
    addictionLevel: 6,
    special: false,
    power: 6,
    unlockPoints: 800,
    worksOnMethod: [METHOD_TYPE.EAT],

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
    starsEffect: POWER.STRONG,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.THRESHOLD,
    highEuphoricEffect: POWER.MODERATE,
    flashEffect: POWER.THRESHOLD,
    shadowPeopleEffect: POWER.NONE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.NONE,

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
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.NONE,
        4: POWER.NONE,
        5: POWER.NONE,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'brightness(100%)',
            2: 'brightness(100%)',
            3: 'brightness(100%) saturate(0)',
            4: 'brightness(100%) saturate(0)',
            5: 'brightness(100%) saturate(0)',
        },
        to: {
            1: 'brightness(150%)',
            2: 'brightness(170%)',
            3: 'brightness(220%) saturate(2)',
            4: 'brightness(240%) saturate(4)',
            5: 'brightness(280%) saturate(6)',
        }
    },
});
