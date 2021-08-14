const DEBUG = false;

/* Player Data */
let points = 0;
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
    loadSubstanceFiles();
    loadSavedGame();
    renderMethods();
    renderSubstances();
    addInfoHandle('.substance')
    addInfoHandle('.method')
}

/**
 * Load saved game data
 */
function loadSavedGame() {
    try {
        let savedPointsStr = localStorage.getItem('points');
        points = parseInt(savedPointsStr);
    } catch(err) {
        console.error('An error ocurred to load saved data!');
        console.error(err);
        localStorage.removeItem('points');
    }
}

/**
 * Load substance files
 */
function loadSubstanceFiles() {
    $('#substance-scripts').empty();
    REGISTERED_SUBSTANCES.forEach(path => {
        let script = `<script src="${path}"></script>`;
        $('#substance-scripts').append(script);
    });
}

/**
 * Register a new substance into the game
 * @param {*} name
 * @param {*} data
 */
function registerSubstance(name, data) {
    SUBSTANCES[name] = data;
}

/**
 * Reset current selected data
 */
function resetData() {
    // Reset variables
    selectedSubstances = {};
    selectedAmount = 0;

    // Reset progress
    changeProgressValue('#amount-progress', 0);
    changeProgressValue('#power-progress', 0);

    // Reset stats
    resetStats();

    // Reset labels
    $("#substance-amount-label").html('0');
    $("#substance-power-label").html("(None)");
}

/**
 * Reset simulation data
 */
function resetSimulation() {
    // Hide effects
    $('#delirant-ants').hide();
    $('#delirant-spider').hide();
    $('#delirant-eyes').hide();
    $('#delirant-horror').hide();
    $('#white-noise').hide();
    $("#dmt").hide();
    $("#dmt2").hide();
    $("#dmt3").hide();
    $('#stars-effect').hide();
    $('#mirror-effect').hide();
    $('#deep-dream').removeClass('deep-dream-1');
    $('#deep-dream').removeClass('deep-dream-2');
    $('#deep-dream').removeClass('deep-dream-3');
    $('#deep-dream').removeClass('deep-dream-4');
    $('#deep-dream').removeClass('deep-dream-5');

    // Remove fades
    $("#simulation-screen").removeClass('fadeOut');
    $("#simulation-screen").removeClass('fadeIn');
}

/**
 * Reset stats data
 */
function resetStats() {
    renderStat('stimulant', 0, 'None', 'gray');
    renderStat('sedative', 0, 'None', 'gray');
    renderStat('hallucinogic', 0, 'None', 'gray');
    renderStat('delirant', 0, 'None', 'gray');
    renderStat('dissociative', 0, 'None', 'gray');
    renderStat('depressant', 0, 'None', 'gray');
}

/**
 * Save game data into local storage
 */
 function saveGame() {
    localStorage.setItem('points', points);
}

/**
 * Process after simulation content
 */
function afterSimulation() {
    saveGame();
    resetSimulation();
    resetData();
    renderAddiction();
    renderPoints();
}

/**
 * Change the screen
 * @param {*} screen
 */
function changeScreen(screen) {
    SCREENS.forEach(screen => {
        $(screen).hide();
    });
    $(screen).show();
}

/**
 * Start simulation
 */
function startSimulation(method) {
    // Reset variables
    randomWalk = false;
    walkDelay = false;
    let generalDeepDreamEffectLevel = 0;
    let generalMirrorEffect = false;
    let cssEffectsFrom = '';
    let cssEffectsTo = '';
    let cssFilterEffectsFrom = '';
    let cssFilterEffectsTo = '';
    let highDelirantEffects = false;
    let lowDelirantEffects = false;
    let whiteNoise = false;
    let dmtEffect = false;
    let starsEffect = false;
    let deepDreamImg = getRandomDeepDream();

    // CSS Effects
    for(let substance in selectedSubstances) {
        substanceAmount = selectedSubstances[substance];
        substanceConfig = substances[substance];
        power = limitRange(Math.floor(substanceAmount / 2), 1, 5);

        // Method
        if(method != 'all' && !substanceConfig.worksOnMethod.includes(method)) {
            continue;
        }

        // Calculate addiction
        addiction += substanceConfig.addictionLevel * power;
        if(substance == 'Water') {
            addiction -= 5 * power;
        }
        if(addiction < 0) {
            addiction = 0;
        }

        // Calculate points
        points += power;
        if(points > maxPoints) {
            points = maxPoints;
        }

        // Add CSS effects
        cssFilterEffectsFrom += substanceConfig.cssFilterEffects.from[power] + ' ';
        cssFilterEffectsTo += substanceConfig.cssFilterEffects.to[power] + ' ';

        // Deep Dream
        let deepDreamPower = substanceConfig.deepDreamEffects[power];
        if(deepDreamPower && deepDreamPower > generalDeepDreamPower) {
            generalDeepDreamPower = deepDreamPower;
        }

        // Mirror Effect
        let mirrorEffect = substanceConfig.mirrorEffect;
        if(mirrorEffect && power >= substanceConfig.mirrorEffect) {
            generalMirrorEffect = true;
        }

        // Delirant
        if(substanceConfig.delirant) {
            randomWalk = true;
            lowDelirantEffects = true;
            if(power >= substanceConfig.highDelirantEffect) {
                highDelirantEffects = true;
            }
        }

        // White Noise
        if(substanceConfig.whiteNoise && power >= substanceConfig.whiteNoise) {
            whiteNoise = true;
        }

        // Walk delay
        if(substanceConfig.walkDelayEffect && power >= substanceConfig.walkDelayEffect) {
            walkDelay = true;
        }

        // StarsEffect
        if(substanceConfig.starsEffect && power >= substanceConfig.starsEffect) {
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
