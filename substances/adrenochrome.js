registerSubstance('Adrenochrome', {

    /* General */
    img: 'adrenochrome.png',
    info: '(fictional) Adrenochrome is a drug of the Hollywood elite, it’s addictive, it’s harvested from tortured children in Satanic rituals. (FaLinLV)',
    category: CATEGORIES.FICTIONAL,
    addictionLevel: 0,
    special: true,
    power: 20,
    unlockPoints: 0,
    worksOnMethod: [METHOD_TYPE.EAT, METHOD_TYPE.DRINK],

    /* Stats */
    stats: {
        stimulant: true,
        sedative: true,
        hallucinogic: true,
        delirant: true,
        dissociative: true,
        depressant: true,
    },

    /* Effect Properties */
    walkDelayEffect: POWER.NONE,
    randomWalkEffect: POWER.THRESHOLD,
    lowDelirantEffect: POWER.THRESHOLD,
    highDelirantEffect: POWER.MODERATE,
    mirrorEffect: POWER.THRESHOLD,
    whiteNoiseEffect: POWER.THRESHOLD,
    starsEffect: POWER.THRESHOLD,
    dmtEffect: POWER.NONE,
    lowEuphoricEffect: POWER.NONE,
    highEuphoricEffect: POWER.NONE,
    flashEffect: POWER.NONE,
    shadowPeopleEffect: POWER.MODERATE,
    lowDissociativeEffect: POWER.NONE,
    highDissociativeEffect: POWER.NONE,
    meltingEffect: POWER.LIGHT,
    verticalMirrorEffect: POWER.NONE,

    /* Drunk */
    drunkEffects: {
        1: POWER.NONE,
        2: POWER.NONE,
        3: POWER.STRONG,
        4: POWER.STRONG,
        5: POWER.HEAVY,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: POWER.THRESHOLD,
        2: POWER.LIGHT,
        3: POWER.MODERATE,
        4: POWER.STRONG,
        5: POWER.HEAVY,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'blur(0px) saturate(0)',
            2: 'blur(0px) saturate(0)',
            3: 'blur(0px) saturate(0) hue-rotate(0deg)',
            4: 'blur(0px) saturate(0) hue-rotate(0deg) invert(100%);',
            5: 'blur(0px) saturate(0) hue-rotate(0deg) invert(100%);',
        },
        to: {
            1: 'grayscale(40%) blur(2px) saturate(5)',
            2: 'grayscale(50%) blur(4px) saturate(6)',
            3: 'grayscale(60%) blur(6px) saturate(7) hue-rotate(360deg)',
            4: 'grayscale(70%) blur(8px) saturate(9) hue-rotate(360deg) invert(100%);',
            5: 'grayscale(90%) blur(10px) saturate(15) hue-rotate(360deg) invert(100%);',
        }
    },
});
