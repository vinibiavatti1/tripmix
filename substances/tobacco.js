substances['Tobacco'] = {
    img: 'tobacco.png',
    info: 'Tobacco contains nicotine that is a stimulant substance. It is highly addictive. Subjective effects include stimulation, anxiety suppression and mild euphoria.',
    addictionLevel: 4,
    power: 1,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['smoke'],
    stats: {
        stimulant: true,
        sedative: false,
        hallucinogic: false,
        delirant: false,
        dissociative: false,
        depressant: false,
    },
    cssEffects: {
        from: {
            1: '',
            2: '',
            3: '',
            4: 'margin-left: -2px;',
            5: 'margin-left: -2px;',
        },
        to: {
            1: '',
            2: '',
            3: '',
            4: 'margin-left: 2px;',
            5: 'margin-left: 2px;',
        }
    },
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
    deepDreamEffect: false,
    deepDreamEffectConfig: {
        1: deepDreamPower.none,
        2: deepDreamPower.none,
        3: deepDreamPower.none,
        4: deepDreamPower.none,
        5: deepDreamPower.none,
    },
    mirrorEffect: false,
    mirrorEffectActiveInPower: 0,
    highDelirantEffectActiveInPower: 0,
    whiteNoise: false,
    whiteNoiseEffectActiveInPower: 0,
}