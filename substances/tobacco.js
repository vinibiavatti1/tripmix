registerSubstance('Tobacco', {

    /* General */
    img: 'tobacco.png',
    info: 'Tobacco contains nicotine that is a stimulant substance. It is highly addictive. Subjective effects include stimulation and mild euphoria.',
    category: CATEGORIES.STIMULANT,
    addictionLevel: 4,
    special: false,
    power: 1,
    unlockPoints: 100,
    worksOnMethod: [METHOD_TYPE.SMOKE],

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
            1: 'contrast(100%) sepia(0%)',
            2: 'contrast(100%) sepia(0%)',
            3: 'contrast(100%) sepia(0%)',
            4: 'contrast(100%) sepia(0%)',
            5: 'contrast(100%) sepia(0%)',
        },
        to: {
            1: 'contrast(100%) sepia(10%)',
            2: 'contrast(115%) sepia(20%)',
            3: 'contrast(125%) sepia(40%)',
            4: 'contrast(155%) sepia(60%)',
            5: 'contrast(175%) sepia(80%)',
        }
    },
});
