const DEBUG = true;

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
    if(DEBUG) {
        changeScreen(SCREENS.GAME);
        points = 99999;
    }
    renderSeoData();
    loadSavedGame();
    renderMethods();
    renderSubstances();
    addInfoHandle('.substance');
    addInfoHandle('.method');
    renderPoints();
    $("#max-points").html(maxPoints);
}

/**
 * Load saved game data
 */
function loadSavedGame() {
    try {
        let savedPointsStr = localStorage.getItem('points');
        if(savedPointsStr && !isNaN(savedPointsStr)) {
            points = parseInt(savedPointsStr);
        }
    } catch(err) {
        console.error('An error ocurred to load saved data!');
        console.error(err);
        localStorage.removeItem('points');
    }
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
    changeProgressValue('#progress-power', 0);

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
    $('#css-animation').empty();

    // Remove fades
    $("#simulation-screen").removeClass('fadeOut');
    $("#simulation-screen").removeClass('fadeIn');
}

/**
 * Reset stats data
 */
function resetStats() {
    renderStat('stimulant', 0, 'None', 'text-gray');
    renderStat('sedative', 0, 'None', 'text-gray');
    renderStat('hallucinogic', 0, 'None', 'text-gray');
    renderStat('delirant', 0, 'None', 'text-gray');
    renderStat('dissociative', 0, 'None', 'text-gray');
    renderStat('depressant', 0, 'None', 'text-gray');
}

/**
 * Reset game
 */
function resetGame() {
    points = 0;
    addiction = 0;
    window.localStorage.removeItem('points');
    resetData();
    renderPoints();
    renderAddiction();
}

/**
 * Select substance by name
 * @param {*} name
 * @returns
 */
 function selectSubstance(name) {
    if(selectedAmount >= maxAmount) {
        return;
    }
    selectedAmount++;
    if(selectedSubstances[name]) {
        selectedSubstances[name] += 1
    } else {
        selectedSubstances[name] = 1
    }
    renderStats();
    renderSubstancePower();
    changeProgressValue('#amount-progress', selectedAmount * 100 / maxAmount);
    $("#substance-amount-label").html(selectedAmount);
}

/**
 * Save game data into local storage
 */
function saveGame() {
    localStorage.setItem('points', points);
}

/**
 * Process back
 */
function back() {
    afterSimulation();
    if(addiction >= maxAddiction) {
        resetGame();
        changeScreen(SCREENS.GAME_OVER);
    } else {
        changeScreen(SCREENS.GAME);
    }
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
    for(screenName in SCREENS) {
        let selector = SCREENS[screenName];
        $(selector).hide();
    }
    $(screen).show();
}

/**
 * Start simulation
 * @param {*} method_type
 */
function startSimulation(method_type) {
    // Reset variables
    randomWalk = false;
    walkDelay = false;
    let generalDeepDreamEffectLevel = 0;
    let generalMirrorEffect = false;
    let generalDrunkEffect = false;
    let cssFilterEffectsFrom = '';
    let cssFilterEffectsTo = '';
    let highDelirantEffects = false;
    let lowDelirantEffects = false;
    let whiteNoise = false;
    let dmtEffect = false;
    let starsEffect = false;
    let deepDreamImg = getRandomDeepDream();
    let drunkEffect = null;

    // Set landscape
    currentLandscape = $("#landscape").val();
    currentLandscapeImg = 0;
    updateLandscape();

    // CSS Effects
    for(let substanceName in selectedSubstances) {
        substanceAmount = selectedSubstances[substanceName];
        substanceConfig = SUBSTANCES[substanceName];
        power = limitRange(Math.floor(substanceAmount / 2), 1, 5);

        // Method
        if(method_type != METHOD_TYPE.ALL && !substanceConfig.worksOnMethod.includes(method_type)) {
            continue;
        }

        // Calculate addiction
        addiction += substanceConfig.addictionLevel * power;
        if(substanceName == 'Water') {
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

        // Drunk effect
        let drunkEffect = substanceConfig.drunkEffects[power];
        if(drunkEffect && drunkEffect > generalDrunkEffect) {
            generalDrunkEffect = drunkEffect;
        }

        // Deep dream
        let deepDreamPower = substanceConfig.deepDreamEffects[power];
        if(deepDreamPower && deepDreamPower > generalDeepDreamPower) {
            generalDeepDreamPower = deepDreamPower;
        }

        // Mirror effect
        let mirrorEffect = substanceConfig.mirrorEffect;
        if(mirrorEffect && power >= substanceConfig.mirrorEffect) {
            generalMirrorEffect = true;
        }

        // Low delirant effect
        if(substanceConfig.lowDelirantEffect && power >= substanceConfig.lowDelirantEffect) {
            lowDelirantEffects = true;
        }

        // High delirant effect
        if(substanceConfig.highDelirantEffect && power >= substanceConfig.highDelirantEffect) {
            highDelirantEffects = true;
        }

        // White noise
        if(substanceConfig.whiteNoise && power >= substanceConfig.whiteNoise) {
            whiteNoise = true;
        }

        // Walk delay
        if(substanceConfig.walkDelayEffect && power >= substanceConfig.walkDelayEffect) {
            walkDelay = true;
        }

        // Random walk
        if(substanceConfig.randomWalk && power >= substanceConfig.randomWalk) {
            randomWalk = true;
        }

        // Stars effect
        if(substanceConfig.starsEffect && power >= substanceConfig.starsEffect) {
            starsEffect = true;
        }

        // DMT effect
        if(substanceConfig.dmtEffect && power >= substanceConfig.dmtEffect) {
            dmtEffect = true;
        }
    }
    startSubstanceEffects(cssFilterEffectsFrom, cssFilterEffectsTo, deepDreamImg, generalDeepDreamEffectLevel, generalMirrorEffect, lowDelirantEffects, highDelirantEffects, whiteNoise, dmtEffect, starsEffect, generalDrunkEffect);
}

/**
 * Create CSS animation configuration and render it
 * @param {*} cssFilterEffectsFrom
 * @param {*} cssFilterEffectsTo
 * @returns
 */
function createAnimationCss(cssFilterEffectsFrom, cssFilterEffectsTo, drunkEffect) {
    let marginFrom = '';
    let marginTo = '';
    if(drunkEffect) {
        let px = DRUNK_LEVELS[drunkEffect];
        marginFrom = `margin-left: ${px};`;
        marginTo = `margin-left: -${px};`;
    }
    return `@keyFrames substance-animation { from {filter: ${cssFilterEffectsFrom}; ${marginFrom}} to {filter: ${cssFilterEffectsTo}; ${marginTo}} }`
}

/**
 * Render animation and set images
 * @param {*} animation
 * @param {*} deepDreamEffectLevel
 * @param {*} mirrorEffect
 */
function startSubstanceEffects(cssFilterEffectsFrom, cssFilterEffectsTo, deepDreamImg, deepDreamEffectLevel, mirrorEffect, lowDelirantEffects, highDelirantEffects, whiteNoise, dmtEffect, starsEffect, drunkEffect) {
    // Create animation
    let animation = createAnimationCss(cssFilterEffectsFrom, cssFilterEffectsTo, drunkEffect);

    // Log
    console.log('Animation: ' + animation);
    console.log('Deep dream img: ' + deepDreamImg);
    console.log('Deep dream effect: ' + deepDreamEffectLevel);
    console.log('Low delirant effects: ' + lowDelirantEffects);
    console.log('High delirant effects: ' + highDelirantEffects);
    console.log('White noise: ' + whiteNoise);
    console.log('DMT effect: ' + dmtEffect);
    console.log('Stars effect: ' + starsEffect);
    console.log('Drunk effect: ' + drunkEffect);

    $('#substance-animation').html(animation);
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
 * Change the current landscape to the next one
 */
function walk() {
    if(walkDelay) {
        $("#walk-btn").attr('disabled', 'true');
        $("#simulation-screen").addClass('fadeOut');
        $("#simulation-screen").removeClass('fadeIn');
        setTimeout(function() {
            processWalk();
            $("#walk-btn").removeAttr('disabled');
            $("#simulation-screen").removeClass('fadeOut');
            $("#simulation-screen").addClass('fadeIn');
        }, 1000);
    } else {
        processWalk();
    }
}

/**
 * Execute walk process
 */
function processWalk() {
    let landscapeConfig = LANDSCAPES[currentLandscape];
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
    let landscapeConfig = LANDSCAPES[currentLandscape];
    let img = IMAGES_LANDSCAPES_PATH + '/' + landscapeConfig.folder + '/' + landscapeConfig.imgs[currentLandscapeImg];
    $("#simulation-img").attr('src', img);
    $("#simulation-img-2").attr('src', img);
    $("#simulation-img-3").attr('src', img);
    $("#mirror-effect").attr('src', img);
}

/**
 * Search substance by name
 */
 function searchSubstance() {
    let search = $("#search-input").val();
    $(".substance").each(function() {
        let name = $(this).attr('data-name');
        if(name) {
            if(!name.toLowerCase().includes(search.toLowerCase())) {
                $(this).hide();
            } else {
                $(this).show();
            }
        }
    });
}

/**
 * Ask to reset game
 */
function resetGamePrompt() {
    if(confirm('Are you sure you want to restart the game (all saved data will be erased)?')) {
        resetGame();
        changeScreen(SCREENS.INTRO);
    }
}

/**
 * Check select if user can play
 */
 function checkCanPlay() {
    let value = $("#age").val();
    if(value == '0') {
        $("#start-btn").attr('disabled', 'true');
    } else {
        $("#start-btn").removeAttr('disabled');
    }
}
