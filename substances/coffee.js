substances['Coffee'] = {
    img: 'coffee.png',
    info: 'Coffee contains caffeine that is a stimulant substance. Notable effects include stimulation, wakefulness, enhanced focus and motivation.',
    addictionLevel: 2,
    power: 1,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['eat', 'drink'],
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
            4: 'margin-top: -1px;',
            5: 'margin-top: -2px;',
        },
        to: {
            1: '',
            2: '',
            3: '',
            4: 'margin-top: 1px;',
            5: 'margin-top: 2px;',
        }
    },
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