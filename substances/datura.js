substances['Datura'] = {
    img: 'datura.png',
    info: 'Datura is known as powerful and dangerous deliriant, used for shamanic and medical purposes, as well as poisons.',
    addictionLevel: 0,
    power: 7,
    unlockPoints: 0,
    walkDelay: false,
    worksOnMethod: ['eat', 'drink', 'smoke'],
    stats: {
        stimulant: false,
        sedative: false,
        hallucinogic: true,
        delirant: true,
        dissociative: false,
        depressant: false,
    },
    cssEffects: {
        from: {
            1: '',
            2: '',
            3: 'margin-left: -10px;',
            4: 'margin-left: -30px;',
            5: 'margin-left: -100px;',
        },
        to: {
            1: '',
            2: '',
            3: 'margin-left: 10px;',
            4: 'margin-left: 30px;',
            5: 'margin-left: 100px;',
        }
    },
    cssFilterEffects: {
        from: {
            1: 'grayscale(0%) blur(0px) brightness(100%)',
            2: 'grayscale(0%) blur(0px) brightness(100%)',
            3: 'grayscale(0%) blur(0px) brightness(100%)',
            4: 'grayscale(0%) blur(0px) brightness(100%)',
            5: 'grayscale(0%) blur(0px) brightness(100%)',
        },
        to: {
            1: 'grayscale(40%) blur(0px) brightness(50%)',
            2: 'grayscale(50%) blur(1px) brightness(40%)',
            3: 'grayscale(60%) blur(1px) brightness(30%)',
            4: 'grayscale(70%) blur(2px) brightness(20%)',
            5: 'grayscale(90%) blur(3px) brightness(20%)',
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
    mirrorEffect: true,
    mirrorEffectActiveInPower: 2,
    highDelirantEffectActiveInPower: 3, 
    whiteNoise: true,
    whiteNoiseEffectActiveInPower: 5,
}