const TEMPLATE = `registerSubstance('SUBSTANCE_NAME', {

    /* General */
    img: 'IMG.png',
    info: 'INFO',
    category: CATEGORY,
    addictionLevel: ADDICTION_LEVEL,
    special: SPECIAL,
    power: POWER,
    unlockPoints: UNLOCK_POINTS,
    worksOnMethod: [METHODS],

    /* Stats */
    stats: {
        stimulant: STIMULANT,
        sedative: SEDATIVE,
        hallucinogic: HALLUCINOGIC,
        delirant: DELIRANT,
        dissociative: DISSOCIATIVE,
        depressant: DEPRESSANT,
    },

    /* Effect Properties */
    walkDelayEffect: WALK_DELAY_EFFECT,
    randomWalkEffect: RANDOM_WALK_EFFECT,
    lowDelirantEffect: LOW_DELIRANT_EFFECT,
    highDelirantEffect: HIGH_DELIRANT_EFFECT,
    mirrorEffect: MIRROR_EFFECT,
    whiteNoiseEffect: WHITE_NOISE_EFFECT,
    starsEffect: STARS_EFFECT,
    dmtEffect: DMT_EFFECT,
    lowEuphoricEffect: LOW_EUPHORIC_EFFECT,
    highEuphoricEffect: HIGH_EUPHORIC_EFFECT,
    flashEffect: FLASH_EFFECT,
    shadowPeopleEffect: SHADOW_PEOPLE_EFFECT,
    lowDissociativeEffect: LOW_DISSOCIATIVE_EFFECT,
    highDissociativeEffect: HIGH_DISSOCIATIVE_EFFECT,
    meltingEffect: MELTING_EFFECT,
    verticalMirrorEffect: VERTICAL_MIRROR_EFFECT,

    /* Drunk */
    drunkEffects: {
        1: DRUNK_1,
        2: DRUNK_2,
        3: DRUNK_3,
        4: DRUNK_4,
        5: DRUNK_5,
    },

    /* Deep dream */
    deepDreamEffects: {
        1: DEEP_DREAM_1,
        2: DEEP_DREAM_2,
        3: DEEP_DREAM_3,
        4: DEEP_DREAM_4,
        5: DEEP_DREAM_5,
    },

    /* CSS Filter Effects */
    cssFilterEffects: {
        from: {
            1: 'EFFECTS_FROM_1',
            2: 'EFFECTS_FROM_2',
            3: 'EFFECTS_FROM_3',
            4: 'EFFECTS_FROM_4',
            5: 'EFFECTS_FROM_5',
        },
        to: {
            1: 'EFFECTS_TO_1',
            2: 'EFFECTS_TO_2',
            3: 'EFFECTS_TO_3',
            4: 'EFFECTS_TO_4',
            5: 'EFFECTS_TO_5',
        }
    },
});

`;
