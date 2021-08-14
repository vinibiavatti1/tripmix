const DEBUG = false;

/* Player Data */
let initialPoints = 0;
let points = initialPoints;
let selectedSubstances = {}
let maxAmount = 20;
let maxSubstancePower = 50;
let selectedAmount = 0;
let currentLandscape = 0;
let randomWalk = false;
let walkDelay = 0;
let addiction = 0;
let maxAddiction = 200;
let maxPoints = 99999;

/**
 * Document init
 */
$(document).ready(() => {
    init();
});

/**
 * Init
 */
function init() {
    renderMethods();
    renderSubstances();
    addInfoHandle('.substance')
    addInfoHandle('.method')
}

/**
 * Register a new substance into the game
 * @param {*} name
 * @param {*} data
 */
function registerSubstance(name, data) {
    SUBSTANCIES[name] = data;
}

/**
 * Reset simulation
 */
 function reset() {
    selectedSubstances = {};
    selectedAmount = 0;
    $("#amount-progress").css('width', '0%');
    $("#amount-val").html('0');
    $('#deep-dream').hide();
    for(let i = 1; i <= 5; i++) {
        $('#deep-dream').removeClass('deep-dream-' + i);
    }
    $('#mirror-effect').hide();
    renderStat('stimulant', 0, 'None', 'l0');
    renderStat('sedative', 0, 'None', 'l0');
    renderStat('hallucinogic', 0, 'None', 'l0');
    renderStat('delirant', 0, 'None', 'l0');
    renderStat('dissociative', 0, 'None', 'l0');
    renderStat('depressant', 0, 'None', 'l0');
    $("#power-progress").css('width', '0%');
    $("#substance-power-name").html("(None)");
    $("#simulation-screen").removeClass('fadeOut');
    $("#simulation-screen").removeClass('fadeIn');
    $('#delirant-ants').hide();
    $('#delirant-spider').hide();
    $('#delirant-eyes').hide();
    $('#delirant-horror').hide();
    $('#white-noise').hide();
    $("#dmt").hide();
    $("#dmt2").hide();
    $("#dmt3").hide();
    $('#stars-effect').hide();
    randomWalk = false;
    walkDelay = false;
    renderAddiction();
    renderPoints();
}

/**
 * Change the screen by id
 * @param {*} id
 */
 function changeScreen(id) {
    $('#intro').hide();
    $('#game').hide();
    $('#simulation').hide();
    $('#addicted').hide();
    $('#' + id).show();
}

/**
 * Start simulation
 */
function startSimulation(method) {
    let generalDeepDreamEffectLevel = 0;
    let generalMirrorEffect = false;
    let cssEffectsFrom = '';
    let cssEffectsTo = '';
    let cssFilterEffectsFrom = '';
    let cssFilterEffectsTo = '';
    let highDelirantEffects = false;
    let lowDelirantEffects = false;
    let whiteNoise = false;
    let deepDreamImg = null;
    let dmtEffect = false;
    let starsEffect = false;

    // CSS Effects
    for(let key in selectedSubstances) {
        substanceAmount = selectedSubstances[key];
        power = Math.floor(substanceAmount / 2);
        if(!power) {
            power = 1;
        } else if (power > 5) {
            power = 5;
        }
        substanceConfig = substances[key];

        // Method
        if(method != 'all' && !substanceConfig.worksOnMethod.includes(method)) {
            continue;
        }

        // Addiction
        addiction += substanceConfig.addictionLevel * power;

        // Water
        if(key == 'Water') {
            addiction -= 5 * power;
        }
        if(addiction < 0) {
            addiction = 0;
        }

        // Points
        points += power;
        console.log(power);
        window.localStorage.setItem('points', points);
        if(points > maxPoints) {
            points = maxPoints;
        }

        // Add CSS effects
        cssEffectsFrom += substanceConfig.cssEffects.from[power] + ' ';
        cssEffectsTo += substanceConfig.cssEffects.to[power] + ' ';
        cssFilterEffectsFrom += substanceConfig.cssFilterEffects.from[power] + ' ';
        cssFilterEffectsTo += substanceConfig.cssFilterEffects.to[power] + ' ';

        // DeepDream
        if(substanceConfig.deepDreamEffect) {
            if(!deepDreamImg) {
                let randDeep = randomInt(0, 10) + 1;
                deepDreamImg = deepDreams[randDeep]
            }
            let deepDreamEffectLevel = substanceConfig.deepDreamEffectConfig[power];
            if(deepDreamEffectLevel > generalDeepDreamEffectLevel) {
                generalDeepDreamEffectLevel = deepDreamEffectLevel;
            }
        }

        // Mirror Effect
        if(substanceConfig.mirrorEffect && power >= substanceConfig.mirrorEffectActiveInPower) {
            generalMirrorEffect = true;
        }

        // Delirant
        if(substanceConfig.delirant) {
            randomWalk = true;
            lowDelirantEffects = true;
            if(power >= substanceConfig.highDelirantEffectActiveInPower) {
                highDelirantEffects = true;
            }
        }

        // White Noise
        if(substanceConfig.whiteNoise && power >= substanceConfig.whiteNoiseEffectActiveInPower) {
            whiteNoise = true;
        }

        // Walk delay
        if(substanceConfig.walkDelay) {
            walkDelay = true;
        }

        // StarsEffect
        if(substanceConfig.starsEffect) {
            starsEffect = true;
        }

        if(substanceConfig.dmtEffect && power >= substanceConfig.dmtEffectActiveInPower) {
            dmtEffect = true;
        }
    }

    let animationCss = createAnimationCss(cssEffectsFrom, cssEffectsTo, cssFilterEffectsFrom, cssFilterEffectsTo);
    startSubstanceEffects(animationCss, deepDreamImg, generalDeepDreamEffectLevel, generalMirrorEffect, lowDelirantEffects, highDelirantEffects, whiteNoise, dmtEffect, starsEffect);
}

/**
 * Create CSS animation configuration and render it
 * @param {*} cssEffectsFrom
 * @param {*} cssEffectsTo
 * @param {*} cssFilterEffectsFrom
 * @param {*} cssFilterEffectsTo
 * @returns
 */
function createAnimationCss(cssEffectsFrom, cssEffectsTo, cssFilterEffectsFrom, cssFilterEffectsTo) {
    let animationFrom = '';
    let animationTo = '';
    if(cssEffectsFrom.trim() && cssEffectsTo.trim()) {
        animationFrom += cssEffectsFrom;
        animationTo += cssEffectsTo;
    }
    if(cssFilterEffectsFrom.trim() && cssFilterEffectsTo.trim()) {
        animationFrom += 'filter: ' + cssFilterEffectsFrom + ';';
        animationTo += 'filter: ' + cssFilterEffectsTo + ';';
    }
    return `@keyFrames css-animation { from {${animationFrom}} to {${animationTo}} }`
}

/**
 * Render animation and set images
 * @param {*} animation
 * @param {*} deepDreamEffectLevel
 * @param {*} mirrorEffect
 */
function startSubstanceEffects(animation, deepDreamImg, deepDreamEffectLevel, mirrorEffect, lowDelirantEffects, highDelirantEffects, whiteNoise, dmtEffect, starsEffect) {
    console.log('Animation: ' + animation);
    console.log('Deep dream img: ' + deepDreamImg);
    console.log('Deep dream effect: ' + deepDreamEffectLevel);
    console.log('Mirror effect: ' + mirrorEffect);
    $('#css-animation').empty();
    $('#css-animation').html(animation);
    if(deepDreamEffectLevel && deepDreamImg) {
        $('#deep-dream').attr('src', 'images/deep_dreams/' + deepDreamImg);
        $('#deep-dream').addClass('deep-dream-' + deepDreamEffectLevel);
        $('#deep-dream').show();
    }
    if(mirrorEffect) {
        $('#mirror-effect').show();
    }
    if(lowDelirantEffects) {
        $('#delirant-ants').show();
        $('#delirant-spider').show();
    }
    if(highDelirantEffects) {
        $('#delirant-eyes').show();
        $('#delirant-horror').show();
    }
    if(whiteNoise) {
        $('#white-noise').show();
    }
    if(dmtEffect) {
        $('#dmt').show();
        $('#dmt2').show();
        $('#dmt3').show();
    }
    if(starsEffect) {
        $('#stars-effect').show();
    }
}

/**
 * Walk
 */
function walk() {
    let landscapeConfig = landscapes[currentLandscape];
    if(randomWalk) {
        do {
            img = randomInt(0, landscapeConfig.imgs.length);
        } while(img == currentLandscapeImg);
        currentLandscapeImg = img;
        updateLandscape();
    } else {
        currentLandscapeImg++;
        if(landscapeConfig.imgs.length == currentLandscapeImg) {
            currentLandscapeImg = 0;
        }
        updateLandscape();
    }
}

/**
 * Set the current landscape and img index
 */
function updateLandscape() {
    let landscapeConfig = landscapes[currentLandscape];
    console.log(landscapeConfig, currentLandscape);
    let img = './images/' + landscapeConfig.imgs[currentLandscapeImg];
    $("#simulation-img").attr('src', img);
    $("#simulation-img-2").attr('src', img);
    $("#simulation-img-3").attr('src', img);
    $("#mirror-effect").attr('src', img);
}

/**
 * Reset game
 */
function resetGame() {
    points = 0;
    window.localStorage.removeItem('points');
}
