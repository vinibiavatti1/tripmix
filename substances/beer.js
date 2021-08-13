substances['Beer'] = {
    img: 'beer.png',
    info: 'Beer is one of the oldest and most widely consumed alcoholic drinks in the world.',
    addictionLevel: 2,
    power: 2,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['drink'], 
    stats: {
        stimulant: true,
        sedative: false,	
        hallucinogic: false,
        delirant: false,	
        dissociative: false,
        depressant: true,
    },
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
    deepDreamEffect: false,
    deepDreamEffectConfig: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    },
    mirrorEffect: false,
    mirrorEffectActiveInPower: 0,
    delirant: false,
    highDelirantEffectActiveInPower: 0,
    whiteNoise: false,
    whiteNoiseEffectActiveInPower: 0,
    starsEffect: false,
    starsEffectActiveInPower: 0,
    dmtEffect: false,
    dmtEffectActiveInPower: 0,
}
