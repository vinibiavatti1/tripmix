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
let maxPoints = 999999;
let adrenochrome = false;
let clock = [0,0,0];
let landscape = null;

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
        points = maxPoints;
    } else {
        loadSavedGame();
    }
    renderSeoData();
    renderMethods();
    renderSubstances();
    renderLandscapes();
    renderPoints();
    searchListener();
    $("#max-points").html(maxPoints);
    updateInfos();
    startClockLoop();
}

/**
 * Update all info handlers
 */
function updateInfos() {
    addInfoHandle('.info-hint');
}

/**
 * Start clock loop
 */
function startClockLoop() {
    setInterval(function() {
        clock[2]++;
        if(clock[2] >= 60) {
            clock[2] = 0;
            clock[1]++;
            if(clock[1] >= 60) {
                clock[1] = 0;
                clock[0]++;
                if(clock[0] >= 24) {
                    clock[0] = 0;
                }
            }
        }
        renderClock();
    }, 1000);
}

/**
 * Reset the clock to 00:00:00
 */
function resetClock() {
    clock = [0,0,0];
    renderClock();
}

/**
 * Add search listener
 */
function searchListener() {
    $('#search-input').keyup(function(event) {
        let search = $(this).val();
        if(search.startsWith('@')) {
            if (event.keyCode === 13) {
                let ok = processCheat(search);
                if(ok) {
                    $(this).val('');
                }
            }
        } else {
            if(!search) {
                $(".substance-locked").show();
            } else {
                $(".substance-locked").hide();
            }
            $(".substance").each(function() {
                let name = $(this).attr('data-name');
                let category = $(this).attr('data-category');
                if(name || category) {
                    if(name.toLowerCase().includes(search.toLowerCase()) || category.toLowerCase().includes(search.toLowerCase())) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                }
            });
        }
    });
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

    // Reset methods
    $(".method").removeClass('disabled-method');

    // Reset labels
    $("#substance-amount-label").html('0');
    $("#substance-power-label").html("(None)");
}

/**
 * Reset simulation data
 */
function resetSimulation() {
    // Hide effects
    $(".effect").hide();
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
    adrenochrome = false;
    currentLandscape = null;
    window.localStorage.removeItem('points');
    resetData();
    renderPoints();
    renderAddiction();
    renderSubstances();
    renderMethods();
    renderLandscapes();
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

    // Disable methods
    let substanceConfig = SUBSTANCES[name];
    if(!substanceConfig.worksOnMethod.includes(METHOD_TYPE.EAT)) {
        $(".method[data-type=eat]").addClass('disabled-method');
    }
    if(!substanceConfig.worksOnMethod.includes(METHOD_TYPE.DRINK)) {
        $(".method[data-type=drink]").addClass('disabled-method');
    }
    if(!substanceConfig.worksOnMethod.includes(METHOD_TYPE.SMOKE)) {
        $(".method[data-type=smoke]").addClass('disabled-method');
    }
}

/**
 * Save game data into local storage
 */
function saveGame() {
    if(!DEBUG) {
        localStorage.setItem('points', points);
    }
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
    renderSubstances();
    renderMethods();
    renderAddiction();
    renderLandscapes();
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
    if($(`.method[data-type=${method_type}]`).hasClass('disabled-method')) {
        return;
    }
    // Reset clock
    resetClock();
    renderLocation();

    // Reset variables
    randomWalk = false;
    walkDelay = false;
    let deepDreamImg = getRandomDeepDream();
    let dissociativeImg = getRandomDissociative();
    let generalDeepDreamEffectLevel = 0;
    let generalDrunkEffect = false;
    let cssFilterEffectsFrom = '';
    let cssFilterEffectsTo = '';
    let highDelirantEffects = false;
    let lowDelirantEffects = false;
    let whiteNoise = false;
    let dmtEffect = false;
    let starsEffect = false;
    let lowEuphoricEffect = false;
    let highEuphoricEffect = false;
    let flashEffect = false;
    let shadowPeopleEffect = false;
    let lowDissociativeEffect = false;
    let highDissociativeEffect = false;
    let meltingEffect = false;
    let mirrorEffect = false;
    let verticalMirrorEffect = false;

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
        points += power * 3;
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
        if(deepDreamPower && deepDreamPower > generalDeepDreamEffectLevel) {
            generalDeepDreamEffectLevel = deepDreamPower;
        }

        // Mirror effect
        if(substanceConfig.mirrorEffect && power >= substanceConfig.mirrorEffect) {
            mirrorEffect = true;
        }

        // Mirror effect
        if(substanceConfig.verticalMirrorEffect && power >= substanceConfig.verticalMirrorEffect) {
            verticalMirrorEffect = true;
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
        if(substanceConfig.whiteNoiseEffect && power >= substanceConfig.whiteNoiseEffect) {
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

        // Low euphoric effect
        if(substanceConfig.lowEuphoricEffect && power >= substanceConfig.lowEuphoricEffect) {
            lowEuphoricEffect = true;
        }

        // High euphoric effect
        if(substanceConfig.highEuphoricEffect && power >= substanceConfig.highEuphoricEffect) {
            highEuphoricEffect = true;
        }

        // Flash effect
        if(substanceConfig.flashEffect && power >= substanceConfig.flashEffect) {
            flashEffect = true;
        }

        // Shadow People effect
        if(substanceConfig.shadowPeopleEffect && power >= substanceConfig.shadowPeopleEffect) {
            shadowPeopleEffect = true;
        }

        // Low Dissociative effect
        if(substanceConfig.lowDissociativeEffect && power >= substanceConfig.lowDissociativeEffect) {
            lowDissociativeEffect = true;
        }

        // High Dissociative effect
        if(substanceConfig.highDissociativeEffect && power >= substanceConfig.highDissociativeEffect) {
            highDissociativeEffect = true;
        }

        // Melting effect
        if(substanceConfig.meltingEffect && power >= substanceConfig.meltingEffect) {
            meltingEffect = true;
        }
    }
    startSubstanceEffects(
        cssFilterEffectsFrom,
        cssFilterEffectsTo,
        deepDreamImg,
        generalDeepDreamEffectLevel,
        mirrorEffect,
        lowDelirantEffects,
        highDelirantEffects,
        whiteNoise,
        dmtEffect,
        starsEffect,
        generalDrunkEffect,
        lowEuphoricEffect,
        highEuphoricEffect,
        flashEffect,
        shadowPeopleEffect,
        lowDissociativeEffect,
        highDissociativeEffect,
        dissociativeImg,
        meltingEffect,
        verticalMirrorEffect
    );
    changeScreen(SCREENS.SIMULATION);
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
function startSubstanceEffects(
    cssFilterEffectsFrom,
    cssFilterEffectsTo,
    deepDreamImg,
    deepDreamEffectLevel,
    mirrorEffect,
    lowDelirantEffects,
    highDelirantEffects,
    whiteNoise,
    dmtEffect,
    starsEffect,
    drunkEffect,
    lowEuphoricEffect,
    highEuphoricEffect,
    flashEffect,
    shadowPeopleEffect,
    lowDissociativeEffect,
    highDissociativeEffect,
    dissociativeImg,
    meltingEffect,
    verticalMirrorEffect
    ) {
    // Create animation
    let animation = createAnimationCss(cssFilterEffectsFrom, cssFilterEffectsTo, drunkEffect);

    // Log
    console.log('Animation: ' + animation);
    console.log('Landscape: ' + currentLandscape);
    console.log('Deep dream img: ' + deepDreamImg);
    console.log('Deep dream effect: ' + deepDreamEffectLevel);
    console.log('Mirror effect: ' + mirrorEffect);
    console.log('Vertical Mirror effect: ' + verticalMirrorEffect);
    console.log('Low delirant effects: ' + lowDelirantEffects);
    console.log('High delirant effects: ' + highDelirantEffects);
    console.log('White noise: ' + whiteNoise);
    console.log('DMT effect: ' + dmtEffect);
    console.log('Stars effect: ' + starsEffect);
    console.log('Drunk effect: ' + drunkEffect);
    console.log('Low euphoric effect: ' + lowEuphoricEffect);
    console.log('High euphoric effect: ' + highEuphoricEffect);
    console.log('Flash effect: ' + flashEffect);
    console.log('Shadow people effect: ' + shadowPeopleEffect);
    console.log('Low dissociative effect: ' + lowDissociativeEffect);
    console.log('High dissociative effect: ' + highDissociativeEffect);
    console.log('Dissociative img: ' + dissociativeImg);
    console.log('Melting effect: ' + meltingEffect);
    console.log('---')

    $('#substance-animation').html(animation);
    if(deepDreamEffectLevel && deepDreamImg) {
        $('#deep-dream').attr('src', 'images/effects/deep_dreams/' + deepDreamImg);
        $('#deep-dream').addClass('deep-dream-' + deepDreamEffectLevel);
        $('#deep-dream').show();
    }
    if(dissociativeImg) {
        $('#dark-img').attr('src', 'images/effects/dissociatives/' + dissociativeImg);
    }
    if(mirrorEffect) {
        $('#mirror-effect').show();
    }
    if(verticalMirrorEffect) {
        $('#vertical-mirror-effect').show();
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
    if(lowEuphoricEffect) {
        $('#euphoric-2').show();
    }
    if(highEuphoricEffect) {
        $('#euphoric-1').show();
        $('#euphoric-3').show();
    }
    if(flashEffect) {
        $('#flash-effect').show();
    }
    if(shadowPeopleEffect) {
        $('#shadow-people').show();
    }
    if(lowDissociativeEffect) {
        $('#dissociative-1').show();
    }
    if(highDissociativeEffect) {
        $('#dark-img').show();
        $('#dissociative-2').show();
    }
    if(meltingEffect) {
        $('#melting-effect').show();
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
    $("#vertical-mirror-effect").attr('src', img);
    $("#flash-effect").attr('src', img);
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

/**
 * Process cheat code
 * @param {*} cheat
 */
function processCheat(cheat) {
    if(cheat == '@allsubs') {
        for(sub in SUBSTANCES) {
            SUBSTANCES[sub].unlockPoints = 0;
        }
        renderSubstances();
        return true;
    }
    if(cheat == '@allmethods') {
        for(met in METHODS) {
            METHODS[met].unlockPoints = 0;
        }
        renderMethods();
        return true;
    }
    if(cheat == '@fullpoints') {
        points = maxPoints;
        renderSubstances();
        renderMethods();
        renderLandscapes();
        return true;
    }
    if(cheat == '@adrenochrome') {
        adrenochrome = true;
        renderSubstances();
        return true;
    }
    if(cheat == '@alllands') {
        for(land in LANDSCAPES) {
            LANDSCAPES[land].unlockPoints = 0;
        }
        renderLandscapes();
        return true;
    }
    return false;
}
