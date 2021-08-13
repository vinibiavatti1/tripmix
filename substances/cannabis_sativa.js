substances['Cannabis Sativa'] = {
    img: 'cannabis_sativa.png',
    info: 'Cannabis produces psychoactive effects when consumed. Cannabis sativa has lower levels of THC to CBD.',
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
            5: 'margin-left: -2px;',
        },
        to: {
            1: 'margin-left: 1px;',
            2: 'margin-left: 1px;',
            3: 'margin-left: 1px;',
            4: 'margin-left: 2px;',
            5: 'margin-left: 2px;',
        }
    },
    cssFilterEffects: {
        from: {
            1: 'saturate(2) contrast(150%)',
            2: 'saturate(3) contrast(150%)',
            3: 'saturate(4) contrast(150%)',
            4: 'saturate(5) contrast(150%)',
            5: 'saturate(6) contrast(150%)',
        },
        to: {
            1: 'saturate(1) contrast(150%)',
            2: 'saturate(1) contrast(150%)',
            3: 'saturate(1) contrast(150%)',
            4: 'saturate(1) contrast(150%)',
            5: 'saturate(1) contrast(150%)',
        }
    },
    deepDreamEffect: true,
    deepDreamEffectConfig: {
        1: deepDreamPower.none,
        2: deepDreamPower.none,
        3: deepDreamPower.none,
        4: deepDreamPower.none,
        5: deepDreamPower.low,
    },
    mirrorEffect: false,
    mirrorEffectActiveInPower: 0,
}
