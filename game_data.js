let statsLevels = {
    0: { value: 0, name: 'None', class: 'l0' },
    1: { value: 0, name: 'Threshold', class: 'l1' },
    2: { value: 0, name: 'Light', class: 'l2' },
    3: { value: 0, name: 'Moderate', class: 'l3' },
    4: { value: 0, name: 'Strong', class: 'l4' },
    5: { value: 0, name: 'Heavy', class: 'l5' },
};
let powerLevels = {
    0: { name: 'None', class: 'l0b' },
    1: { name: 'Light', class: 'l1b' },
    2: { name: 'Moderate', class: 'l2b' },
    3: { name: 'Strong', class: 'l3b' },
    4: { name: 'Heavy', class: 'l4b' },
    5: { name: 'Death Risk', class: 'l5b' },
};
let deepDreamPower = {
    none: 0,
    low: 1,
    high: 2,
}
let equipaments = [
    {
        name: 'Eat',
        img: 'eat.png',
        info: 'Eat: Mix the drugs and eat it.',
        unlockPoints: 0,
    },
    {
        name: 'Cup',
        img: 'cup.png',
        info: 'Cup: Mix the drugs inside the cup and drink it.',
        unlockPoints: 0,
    },
    {
        name: 'Bottle',
        img: 'bottle.png',
        info: 'Bottle: Mix the drugs into a bottle and drink it.',
        unlockPoints: 0,
    },
    {
        name: 'Pipe',
        img: 'pipe.png',
        info: 'Pipe: Put the drugs into a pipe and smoke it.',
        unlockPoints: 0,
    },
    {
        name: 'Joint',
        img: 'joint.png',
        info: 'Joint: Make a joint cigarette with the drug and smoke it.',
        unlockPoints: 0,
    },
    {
        name: 'Hookah',
        img: 'hookah.png',
        info: 'Hookah: Put the drugs into the Hookah to heating and smoke it with some water as filter.',
        unlockPoints: 0,
    },
    {
        name: 'Bong',
        img: 'bong.png',
        info: 'Bong: Smoke the drugs using a bong with water inside to filter the smoke.',
        unlockPoints: 0,
    },
]
let landscapes = {
    'Lake (Açores - PT)': {
        number: 1,
        imgs: ['lake/lake1.png', 'lake/lake2.png', 'lake/lake3.png', 'lake/lake4.png', 'lake/lake5.png', 'lake/lake6.png', 'lake/lake7.png', 'lake/lake8.png', 'lake/lake9.png', 'lake/lake10.png', 'lake/lake11.png', 'lake/lake12.png', 'lake/lake13.png', 'lake/lake14.png'],
        deepDreamImgLow: 'lake/lake_deep1.jpg',
        deepDreamImgHigh: 'lake/lake_deep2.jpg',
        dissociativeImgLow: '',
        dissociativeImgHigh: '',
    },
}
let drugs = {
    'Beer': {
        img: 'beer.png',
        info: 'Beer is one of the oldest and most widely consumed alcoholic drinks in the world.',
        addictionLevel: 2,
        drugPower: 2,
        unlockPoints: 0,
        walkDelay: false,
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
            1: deepDreamPower.none,
            2: deepDreamPower.none,
            3: deepDreamPower.none,
            4: deepDreamPower.none,
            5: deepDreamPower.none,
        },
        mirrorEffect: false,
        mirrorEffectActiveInPower: 0,
    },
    'Psylocybe Cubensis': {
        img: 'psilocybe_cubensis.png',
        info: 'Psilocybe Cubensis is a species of psychedelic mushroom whose principal active compounds are psilocybin and psilocin.',
        addictionLevel: 0,
        drugPower: 1,
        unlockPoints: 0,
        walkDelay: false,
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
            1: deepDreamPower.none,
            2: deepDreamPower.none,
            3: deepDreamPower.low,
            4: deepDreamPower.low,
            5: deepDreamPower.high,
        },
        mirrorEffect: true,
        mirrorEffectActiveInPower: 3,
    },
    'Vodka': {
        img: 'vodka.png',
        info: 'Vodka is composed mainly of water and ethanol. Usually, vodkas contain 40% alcohol.',
        addictionLevel: 2,
        drugPower: 4,
        unlockPoints: 0,
        walkDelay: false,
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
                2: 'margin-left: -8px;',
                3: 'margin-left: -12px;',
                4: 'margin-left: -20px;',
                5: 'margin-left: -80px;',
            },
            to: {
                1: 'margin-left: 2px;',
                2: 'margin-left: 8px;',
                3: 'margin-left: 12px;',
                4: 'margin-left: 20px;',
                5: 'margin-left: 80px;',
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
            1: deepDreamPower.none,
            2: deepDreamPower.none,
            3: deepDreamPower.none,
            4: deepDreamPower.none,
            5: deepDreamPower.none,
        },
        mirrorEffect: false,
        mirrorEffectActiveInPower: 0,
    },
    'Cannabis Sativa': {
        img: 'cannabis_sativa.png',
        info: 'Cannabis produces psychoactive effects when consumed. Cannabis sativa has lower levels of THC to CBD.',
        addictionLevel: 1,
        drugPower: 1,
        unlockPoints: 0,
        walkDelay: true,
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
    },
    'Cannabis Indica': {
        img: 'cannabis_indica.png',
        info: 'Cannabis produces psychoactive effects when consumed. Cannabis indica has higher levels of THC compared to CBD.',
        addictionLevel: 1,
        drugPower: 1,
        unlockPoints: 0,
        walkDelay: true,
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
    },
    'Caffeine': {
        img: 'caffeine.png',
        info: 'Caffeine is a stimulant substance. Notable effects include stimulation, wakefulness, enhanced focus and motivation.',
        addictionLevel: 2,
        drugPower: 1,
        unlockPoints: 0,
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
    },
    'Nicotine': {
        name: 'Nicotine',
        img: 'nicotine.png',
        info: 'Nicotine is stimulant substance. It is highly addictive. Subjective effects include stimulation, anxiety suppression and mild euphoria.',
        addictionLevel: 4,
        drugPower: 1,
        unlockPoints: 0,
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
                1: 'contrast(175%) sepia(40%)',
                2: 'contrast(175%) sepia(40%)',
                3: 'contrast(175%) sepia(40%)',
                4: 'contrast(175%) sepia(40%)',
                5: 'contrast(175%) sepia(40%)',
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
    },
    /*
    {
        name: 'Nicotine',
        img: 'nicotine.png',
        info: 'Nicotine is stimulant substance. It is highly addictive. Subjective effects include stimulation, anxiety suppression and mild euphoria.',
        addictionLevel: 3,
        unlockPoints: 0,
        effects: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        }
    },
    {
        name: 'Chamomile Tea',
        img: 'chamomile.png',
        info: 'Chamomile tea is made from the chamomile flower and is used to treat a wide range of health issues.',
        addictionLevel: 0,
        unlockPoints: 0,
        effects: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        }
    },
    {
        name: 'Cannabis Indica',
        img: 'cannabis_indica.png',
        info: 'Cannabis produces psychoactive effects when consumed. Cannabis indica has higher levels of THC compared to CBD.',
        addictionLevel: 1,
        unlockPoints: 0,
        effects: {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
        }
    },*/
    
}