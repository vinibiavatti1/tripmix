registerSubstance('Vodka', {

    /* General */
    img: 'vodka.png',
    info: 'Vodka is composed mainly of water and ethanol. Usually, vodkas contain 40% alcohol.',
    addictionLevel: 2,
    special: false,
    power: 4,
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
        3: POWER.MODERATE,
        4: POWER.STRONG,
        5: POWER.HEAVY,
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
            2: 'margin-left: -8px;',
            3: 'margin-left: -12px;',
            4: 'margin-left: -20px;',
            5: 'margin-left: -80px;',
        },
        to: {
            1: 'margin-left: 2px;',
            2: 'margin-left: 8px;',
            3: 'margin-left: 12px;',
            4: 'margin-left: 20px;',
            5: 'margin-left: 80px;',
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
