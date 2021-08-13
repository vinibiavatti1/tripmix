/*
Effects
    blur(5px)
    brightness(200%)
    contrast(200%)
    grayscale(100%)
    hue-rotate(90deg)
    invert(100%)
    opacity(30%)
    saturate(8)
    sepia(100%)

*/

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
let maxPoints = 99999;

/**
 * Init
 */
$(document).ready(() => {
    renderMethods();
    renderSubstances();
    addInfoHandle('.substance')
    addInfoHandle('.method')
    
});


////////////////////////////////////////////////////////////////////////
// Events
////////////////////////////////////////////////////////////////////////


/**
 * On click in start button
 */
function onClickStartBtn() {
    savedPoints = null;
    try {
        savedPoints = parseInt(window.localStorage.getItem('points'));
    } catch(err) {
        console.error(err);
        alert('An error ocurred to get save data. A new game will be created!');
        window.localStorage.removeItem('points');
    }
    if(savedPoints) {
        points = savedPoints;
    } else {
        points = 0;
    }
    reset();
    $("#max-points").html(maxPoints);
    changeScreen('game');
}

/**
 * On change age event
 */
 function onChangeAgeSelect() {
    let value = $("#age").val();
    if(value == '0') {
        $("#start-btn").attr('disabled', 'true');
    } else {
        $("#start-btn").removeAttr('disabled');
    }
}

/**
 * Select the method to usage
 * @param {*} method 
 */
 function onClickMethod(type) {
    startSimulation(type);
    currentLandscape = $("#landscape").val();
    currentLandscapeImg = 0;
    updateLandscape();
    changeScreen('simulation');
}

/**
 * Click event on substance
 * @param {*} name 
 * @returns 
 */
 function onClickSubstance(name) {
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
    $("#amount-progress").css('width', (selectedAmount * 100 / maxAmount) + '%');
    $("#amount-val").html(selectedAmount);
}

/**
 * Reset selected substances
 */
function onClickResetAmount() {
    selectedSubstances = {}
    selectedAmount = 0;
    renderStats();
    renderSubstancePower();
    $("#amount-progress").css('width', '0%');
    $("#amount-val").html('0');
}

/**
 * On click walk event
 */
function onClickWalk() {
    if(walkDelay) {
        $("#walk-btn").attr('disabled', 'true');
        $("#simulation-screen").addClass('fadeOut');
        $("#simulation-screen").removeClass('fadeIn');
        setTimeout(function() {
            walk();
            $("#walk-btn").removeAttr('disabled');
            $("#simulation-screen").removeClass('fadeOut');
            $("#simulation-screen").addClass('fadeIn');
        }, 1000);
    } else {
        walk();
    }
}

/**
 * On key up search event
 */
function onKeyupSearch() {
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
 * On click in back event
 */
function onClickBack() {
    changeScreen('game'); 
    reset();
    if(addiction >= 100) {
        changeScreen('addicted');
    }
}

/**
 * Start again event
 */
function onClickStartAgainBtn() {
    resetGame();
    changeScreen('intro');
}

/**
 * Reset game event
 */
function onClickResetGame() {
    if(confirm('Are you sure you want to restart the game (all saved data will be erased)?')) {
        resetGame();
        changeScreen('intro');
    }
}


////////////////////////////////////////////////////////////////////////
// Renders
////////////////////////////////////////////////////////////////////////


/**
 * Render consumption forms in list
 */
function renderMethods() {
    $('#method-list').empty();
    for(key in methods) {
        methodConfig = methods[key];
        let img = $('<img/>');
        img.attr('src', './images/' + methodConfig.img)
        img.attr('data-info', methodConfig.info)
        img.attr('class', 'method')
        img.attr('onclick', `onClickMethod('${methodConfig.type}')`)
        $('#method-list').append(img);
    }
}

/**
 * Render substance in list
 */
 function renderSubstances() {
    $('#substances').empty();
    for(key in substances) {
        let substance = substances[key];
        let div = $('<div></div>');
        let specialInfo = substance.special ? '(special) ' : '';
        div.attr('data-info', specialInfo + substance.info);
        div.attr('data-name', key);
        let special = substance.special ? ' special-substance' : '';
        div.attr('class', 'substance' + special);
        div.attr('onclick', `onClickSubstance('${key}')`)
        let img = $('<img/>');
        img.attr('src', './images/' + substance.img);
        img.attr('width', 50);
        img.attr('height', 50);
        let p = $('<p></p>');
        p.html(key);
        div.append(img)
        div.append(p)
        $('#substances').append(div);
    }
}

/**
 * Render stats for selected substances
 */
function renderStats() {
    let stimulant = 0;
    let sedative = 0;
    let hallucinogic = 0;
    let delirant = 0;
    let dissociative = 0;
    let depressant = 0;
    for(substance in selectedSubstances) {
        let substanceAmount = selectedSubstances[substance];
        power = Math.floor(substanceAmount / 2);
        let substanceConfig = substances[substance];
        if(!power) {
            power = 1;
        } else if(power > 5) {
            power = 5;
        }
        stimulant += substanceConfig.stats.stimulant * power;
        sedative += substanceConfig.stats.sedative * power;
        hallucinogic += substanceConfig.stats.hallucinogic * power;
        delirant += substanceConfig.stats.delirant * power;
        dissociative += substanceConfig.stats.dissociative * power;
        depressant += substanceConfig.stats.depressant * power;
    }
    if(stimulant > 5) stimulant = 5;
    if(sedative > 5) sedative = 5;
    if(hallucinogic > 5) hallucinogic = 5;
    if(delirant > 5) delirant = 5;
    if(dissociative > 5) dissociative = 5;
    if(depressant > 5) depressant = 5;
    stimulantData = statsLevels[stimulant];
    sedativeData = statsLevels[sedative];
    hallucinogicData = statsLevels[hallucinogic];
    delirantData = statsLevels[delirant];
    dissociativeData = statsLevels[dissociative];
    depressantData = statsLevels[depressant];
    renderStat('stimulant', stimulantData.value, stimulantData.name, stimulantData.class);
    renderStat('sedative', sedativeData.value, sedativeData.name, sedativeData.class);
    renderStat('hallucinogic', hallucinogicData.value, hallucinogicData.name, hallucinogicData.class);
    renderStat('delirant', delirantData.value, delirantData.name, delirantData.class);
    renderStat('dissociative', dissociativeData.value, dissociativeData.name, dissociativeData.class);
    renderStat('depressant', depressantData.value, depressantData.name, depressantData.class);
}

/**
 * Render stat
 * @param {*} statName 
 * @param {*} value 
 * @param {*} name 
 * @param {*} className 
 */
function renderStat(statName, value, name, className) {
    $('#' + statName + '-level').html(value); 
    $('#' + statName + '-name').html('(' + name + ')');
    $('#' + statName + '-name').attr('class', className);
}

/**
 * Render substance power
 */
function renderSubstancePower() {
    powerSum = 0;
    for(substance in selectedSubstances) {
        let substanceAmount = selectedSubstances[substance];
        power = parseInt(Math.floor(substanceAmount / 2));
        let substanceConfig = substances[substance];
        substancePower = substanceConfig.power;
        powerSum += substancePower * power;
    }
    powerConfig = null;
    if(powerSum == 0) {
        powerConfig = powerLevels[0];
    } else if(powerSum < 10) {
        powerConfig = powerLevels[1];
    } else if(powerSum < 20) {
        powerConfig = powerLevels[2];
    } else if(powerSum < 35) {
        powerConfig = powerLevels[3];
    } else if(powerSum < 45) {
        powerConfig = powerLevels[4];
    } else if(powerSum <= 50) {
        powerConfig = powerLevels[5];
    }
    if(powerSum > 50) {
        powerSum = 50;
    }
    $("#power-progress").css('width', parseInt(powerSum * 100 / maxSubstancePower) + '%');
    $("#substance-power-name").html("(" + powerConfig.name + ")");
    $("#power-progress").attr("class", "progress " + powerConfig.class);
}

/**
 * Show addiction in progress bar
 */
function renderAddiction() {
    $("#progress-addiction").css('width', addiction + '%');
    let className = '';
    if(addiction == 0) {
        className = 'l0b';
    } else if (addiction <= 20) {
        className = 'l1b';
    } else if (addiction <= 40) {
        className = 'l2b';
    } else if (addiction <= 60) {
        className = 'l3b';
    } else if (addiction <= 80) {
        className = 'l4b';
    } else if (addiction <= 100) {
        className = 'l5b';
    }
    $("#progress-addiction").attr('class', className + ' progress-addiction');
}

/**
 * Render points
 */
function renderPoints() {
    $("#points-label").html(points);
}


////////////////////////////////////////////////////////////////////////
// Logic
////////////////////////////////////////////////////////////////////////


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

        if(substanceConfig.dmtEffect && power >= substanceConfig.dmtEffectActiveInPower) {
            dmtEffect = true;
        }
    }

    let animationCss = createAnimationCss(cssEffectsFrom, cssEffectsTo, cssFilterEffectsFrom, cssFilterEffectsTo);
    startSubstanceEffects(animationCss, deepDreamImg, generalDeepDreamEffectLevel, generalMirrorEffect, lowDelirantEffects, highDelirantEffects, whiteNoise, dmtEffect);
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
    return `@keyFrames cssAnimation { from {${animationFrom}} to {${animationTo}} }`
}

/**
 * Render animation and set images
 * @param {*} animation 
 * @param {*} deepDreamEffectLevel 
 * @param {*} mirrorEffect 
 */
function startSubstanceEffects(animation, deepDreamImg, deepDreamEffectLevel, mirrorEffect, lowDelirantEffects, highDelirantEffects, whiteNoise, dmtEffect) {
    console.log('Animation: ' + animation);
    console.log('Deep dream img: ' + deepDreamImg);
    console.log('Deep dream effect: ' + deepDreamEffectLevel);
    console.log('Mirror effect: ' + mirrorEffect);
    $('#cssAnimation').empty();
    $('#cssAnimation').html(animation);
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

////////////////////////////////////////////////////////////////////////
// Utils
////////////////////////////////////////////////////////////////////////


/**
 * Add info handler to element by selector
 * @param {*} selector 
 */
 function addInfoHandle(selector) {
    $(selector).hover(function() {
        let info = $(this).attr('data-info');
        if(info) {
            $('#info').html(info)
        } else {
            $('#info').html("")
        }
    });
}

/**
 * Random int
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
