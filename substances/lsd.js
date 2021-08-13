substances['LSD'] = {
    img: 'lsd.png',
    info: 'LSD is considered to be the best known, most researched, and culturally influential psychedelic substance.',
    addictionLevel: 1,
    power: 2,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['eat', 'drink'],
    stats: {
        stimulant: true,
        sedative: false,
        hallucinogic: true,
        delirant: false,
        dissociative: false,
        depressant: false,
    },
    cssEffects: {
        from: {
            1: '',
            2: '',
            3: 'margin-left: -2px;',
            4: 'margin-left: -3px;',
            5: 'margin-left: -4px;',
        },
        to: {
            1: '',
            2: '',
            3: 'margin-left: 2px;',
            4: 'margin-left: 3px;',
            5: 'margin-left: 4px;',
        }
    },
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(150%)',
            2: 'saturate(4) contrast(150%)',
            3: 'saturate(5) contrast(150%)',
            4: 'saturate(7) hue-rotate(0deg) contrast(150%)',
            5: 'saturate(8) hue-rotate(0deg) contrast(200%)',
        },
        to: {
            1: 'saturate(1) contrast(100%)',
            2: 'saturate(1) contrast(100%)',
            3: 'saturate(1) contrast(100%)',
            4: 'saturate(1) hue-rotate(360deg) contrast(100%)',
            5: 'saturate(1) hue-rotate(360deg) contrast(100%)',
        }
    },
    deepDreamEffect: true,
    deepDreamEffectConfig: {
        1: deepDreamPower.none,
        2: deepDreamPower.none,
        3: deepDreamPower.low,
        4: deepDreamPower.low,
        5: deepDreamPower.low,
    },
    mirrorEffect: true,
    mirrorEffectActiveInPower: 4,
    highDelirantEffectActiveInPower: 0,
    whiteNoise: false,
    whiteNoiseEffectActiveInPower: 0,
}