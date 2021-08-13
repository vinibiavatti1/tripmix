substances['Psilocybin Mushrooms'] = {
    img: 'psilocybin_mushrooms.png',
    info: 'Psilocybin Mushrooms are a family of psychoactive mushrooms that contain psilocybin, a psychedelic substance.',
    addictionLevel: 0,
    special: false,
    power: 1,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['eat', 'drink', 'smoke'],
    stats: {
        stimulant: false,
        sedative: true,
        hallucinogic: true,
        delirant: false,
        dissociative: false,
        depressant: false,
    },
    cssEffects: {
        from: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: 'margin-left: -1px;',
        },
        to: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: 'margin-left: 1px;',
        }
    },
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(120%)',
            2: 'saturate(3) contrast(150%)',
            3: 'saturate(4) contrast(150%)',
            4: 'saturate(5) hue-rotate(0deg) contrast(150%)',
            5: 'saturate(6) hue-rotate(0deg) contrast(200%)',
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
        1: 0,
        2: 1,
        3: 3,
        4: 4,
        5: 5,
    },
    mirrorEffect: true,
    mirrorEffectActiveInPower: 3,
    delirant: false,
    highDelirantEffectActiveInPower: 0,
    whiteNoise: false,
    whiteNoiseEffectActiveInPower: 0,
    starsEffect: false,
    starsEffectActiveInPower: 0,
    dmtEffect: false,
    dmtEffectActiveInPower: 0,
}