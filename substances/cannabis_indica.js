substances['Cannabis Indica'] = {
    img: 'cannabis_indica.png',
    info: 'Cannabis produces psychoactive effects when consumed. Cannabis indica has higher levels of THC compared to CBD.',
    addictionLevel: 1,
    drugPower: 1,
    unlockPoints: 0,
    walkDelay: true,
    worksOnMethod: ['eat', 'smoke'],
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
            1: 'margin-left: -1px;',
            2: 'margin-left: -1px;',
            3: 'margin-left: -1px;',
            4: 'margin-left: -2px;',
            5: 'margin-left: -3px;',
        },
        to: {
            1: 'margin-left: 1px;',
            2: 'margin-left: 1px;',
            3: 'margin-left: 1px;',
            4: 'margin-left: 2px;',
            5: 'margin-left: 3px;',
        }
    },
    cssFilterEffects: {
        from: {
            1: 'saturate(3) contrast(150%)',
            2: 'saturate(3) contrast(150%)',
            3: 'saturate(4) contrast(150%)',
            4: 'saturate(6) contrast(150%)',
            5: 'saturate(6) contrast(150%)',
        },
        to: {
            1: 'saturate(1) contrast(150%)',
            2: 'saturate(1) contrast(150%)',
            3: 'saturate(1) contrast(160%)',
            4: 'saturate(1) contrast(160%)',
            5: 'saturate(1) contrast(160%)',
        }
    },
    deepDreamEffect: true,
    deepDreamEffectConfig: {
        1: deepDreamPower.none,
        2: deepDreamPower.none,
        3: deepDreamPower.none,
        4: deepDreamPower.low,
        5: deepDreamPower.low,
    },
    mirrorEffect: false,
    mirrorEffectActiveInPower: 0,
}
