registerSubstance('Beer', {

    /* General */
    img: 'beer.png',
    info: 'Beer is one of the oldest and most widely consumed alcoholic drinks in the world.',
    addictionLevel: 2,
    special: false,
    power: 2,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['drink'],

    /* Substance Properties */
    delirant: false,
    dmt: false,
    dissociative: false,

    /* Stats */
    stats: {
        stimulant: true,
        sedative: false,
        hallucinogic: false,
        delirant: false,
        dissociative: false,
        depressant: true,
    },

    /* Effect Properties */
    highDelirantEffect: POWER.NONE,
    mirrorEffect: POWER.NONE,
    whiteNoiseEffect: POWER.NONE,
    starsEffect: POWER.NONE,
    dmtEffect: POWER.NONE,

    /* Drunk */
    drunkEffects = {
        1: POWER.THRESHOLD,
        2: POWER.LIGHT,
        3: POWER.LIGHT,
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

    /* CSS Effects */
    cssEffects: {
        from: {
            1: 'margin-left: -2px;',
            2: 'margin-left: -4px;',
            3: 'margin-left: -8px;',
            4: 'margin-left: -12px;',
            5: 'margin-left: -20px;',
        },
        to: {
            1: 'margin-left: 2px;',
            2: 'margin-left: 4px;',
            3: 'margin-left: 8px;',
            4: 'margin-left: 12px;',
            5: 'margin-left: 20px;',
        }
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
