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
let selectedDrugs = {}
let maxAmount = 20;
let maxDrugPower = 50;
let selectedAmount = 0;
let currentLandscape = 0;
let currentDeepDreamPower = 0;

/**
 * Init
 */
$(document).ready(() => {
    renderEquipaments();
    renderDrugs();
    addInfoHandle('.drug')
    addInfoHandle('.equipament')
    
});


////////////////////////////////////////////////////////////////////////
// Events
////////////////////////////////////////////////////////////////////////


/**
 * On click in start button
 */
 function onClickStartBtn() {
    $('#intro').hide()
    $('#game').show()
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
 * Select equipament
 * @param {*} equipament 
 */
 function onClickEquipament(equipament) {
    startSimulation();
    currentLandscape = $("#landscape").val();
    currentLandscapeImg = 0;
    updateLandscape();
    changeScreen('simulation');
}

/**
 * Click event on drug
 * @param {*} name 
 * @returns 
 */
 function onClickDrug(name) {
    if(selectedAmount >= maxAmount) {
        return;
    }
    selectedAmount++;
    if(selectedDrugs[name]) {
        selectedDrugs[name] += 1
    } else {
        selectedDrugs[name] = 1
    }
    renderStats();
    renderDrugPower();
    $("#amount-progress").css('width', (selectedAmount * 100 / maxAmount) + '%');
    $("#amount-val").html(selectedAmount);
}

/**
 * On click walk event
 */
function onClickWalk() {
    let landscapeConfig = landscapes[currentLandscape];
    currentLandscapeImg++;
    if(landscapeConfig.imgs.length == currentLandscapeImg) {
        currentLandscapeImg = 0;
    }
    updateLandscape();
}

////////////////////////////////////////////////////////////////////////
// Renders
////////////////////////////////////////////////////////////////////////


/**
 * Render equipaments in list
 */
function renderEquipaments() {
    $('#equipament-list').empty();
    equipaments.forEach((equipament) => {
        let img = $('<img/>');
        img.attr('src', './images/' + equipament.img)
        img.attr('data-info', equipament.info)
        img.attr('class', 'equipament')
        img.attr('onclick', `onClickEquipament('${equipament.name}')`)
        $('#equipament-list').append(img);
    });
}

/**
 * Render drug in list
 */
 function renderDrugs() {
    $('#drugs').empty();
    drugs.forEach((drug) => {
        let div = $('<div></div>');
        div.attr('data-info', drug.info);
        div.attr('class', 'drug');
        div.attr('onclick', `onClickDrug('${drug.name}')`)
        let img = $('<img/>');
        img.attr('src', './images/' + drug.img);
        img.attr('width', 50);
        img.attr('height', 50);
        let p = $('<p></p>');
        p.html(drug.name);
        div.append(img)
        div.append(p)
        $('#drugs').append(div);
    });
}

/**
 * Render stats for selected drugs
 */
function renderStats() {
    let stimulant = 0;
    let sedative = 0;
    let hallucinogic = 0;
    let delirant = 0;
    let dissociative = 0;
    let depressant = 0;
    for(drug in selectedDrugs) {
        let drugAmount = selectedDrugs[drug];
        power = Math.floor(drugAmount / 2);
        let drugConfig = findDrugByName(drug);
        if(power > 5) {
            power = 5;
        }
        stimulant += drugConfig.stats.stimulant * power;
        sedative += drugConfig.stats.sedative * power;
        hallucinogic += drugConfig.stats.hallucinogic * power;
        delirant += drugConfig.stats.delirant * power;
        dissociative += drugConfig.stats.dissociative * power;
        depressant += drugConfig.stats.depressant * power;
    }
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
 * Render drug power
 */
function renderDrugPower() {
    powerSum = 0;
    for(drug in selectedDrugs) {
        let drugAmount = selectedDrugs[drug];
        power = Math.floor(drugAmount / 2);
        let drugConfig = findDrugByName(drug);
        drugPower = drugConfig.drugPower;
        powerSum += drugPower * power;
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
    $("#power-progress").css('width', (powerSum * 100 / maxDrugPower) + '%');
    $("#drug-power-name").html("(" + powerConfig.name + ")");
    $("#power-progress").attr("class", "progress " + powerConfig.class);
}


////////////////////////////////////////////////////////////////////////
// Logic
////////////////////////////////////////////////////////////////////////


/**
 * Reset simulation
 */
function reset() {
    selectedDrugs = {};
    selectedAmount = 0;
    $("#amount-progress").css('width', '0%');
    $("#amount-val").html('0');
    $('#deep-dream').hide();
    $('#mirror-effect').hide();
    renderStat('stimulant', 0, 'None', 'l0');
    renderStat('sedative', 0, 'None', 'l0');
    renderStat('hallucinogic', 0, 'None', 'l0');
    renderStat('delirant', 0, 'None', 'l0');
    renderStat('dissociative', 0, 'None', 'l0');
    renderStat('depressant', 0, 'None', 'l0');
    $("#power-progress").css('width', '0%');
    $("#drug-power-name").html("(None)");
    currentDeepDreamPower = null;
}

/**
 * Change the screen by id
 * @param {*} id 
 */
 function changeScreen(id) {
    $('#intro').hide();
    $('#game').hide();
    $('#simulation').hide();
    $('#' + id).show();
}

/**
 * Start simulation
 */
function startSimulation() {
    let generalDeepDreamEffectLevel = 0;
    let generalMirrorEffect = false;
    let cssEffectsFrom = '';
    let cssEffectsTo = '';
    let cssFilterEffectsFrom = '';
    let cssFilterEffectsTo = '';

    // CSS Effects
    for(let key in selectedDrugs) {
        drugAmount = selectedDrugs[key];
        power = Math.floor(drugAmount / 2);
        if(!power) {
            power = 1;
        } else if (power > 5) {
            power = 5;
        }
        drugConfig = findDrugByName(key);

        cssEffectsFrom += drugConfig.cssEffects.from[power] + ' ';
        cssEffectsTo += drugConfig.cssEffects.to[power] + ' ';
        cssFilterEffectsFrom += drugConfig.cssFilterEffects.from[power] + ' ';
        cssFilterEffectsTo += drugConfig.cssFilterEffects.to[power] + ' ';

        // DeepDream
        if(drugConfig.deepDreamEffect) {
            let deepDreamEffectLevel = drugConfig.deepDreamEffectConfig[power];
            if(deepDreamEffectLevel > generalDeepDreamEffectLevel) {
                generalDeepDreamEffectLevel = deepDreamEffectLevel;
            }
        }

        // Mirror Effect
        if(drugConfig.mirrorEffect && power >= drugConfig.mirrorEffectActiveInPower) {
            generalMirrorEffect = true;
        }
    }
    let animationCss = createAnimationCss(cssEffectsFrom, cssEffectsTo, cssFilterEffectsFrom, cssFilterEffectsTo);
    startDrugEffects(animationCss, generalDeepDreamEffectLevel, generalMirrorEffect);
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
    return `@keyFrames drugAnimation { from {${animationFrom}} to {${animationTo}} }`
}

/**
 * Render animation and set images
 * @param {*} animation 
 * @param {*} deepDreamEffectLevel 
 * @param {*} mirrorEffect 
 */
function startDrugEffects(animation, deepDreamEffectLevel, mirrorEffect) {
    console.log('Animation: ' + animation);
    console.log('Deep dream effect: ' + deepDreamEffectLevel);
    console.log('Mirror effect: ' + mirrorEffect);
    $('#drugAnimation').empty();
    $('#drugAnimation').html(animation);
    if(deepDreamEffectLevel) {
        // TODO get the current landscape deepdream
        $("#deep-dream").attr('src', './images/deep.jpg');
        $('#deep-dream').show();
        currentDeepDreamPower = deepDreamEffectLevel;
    }
    if(mirrorEffect) {
        // TODO update to current landscape
        $("#mirror-effect").attr('src', './images/forest_1.png');
        $('#mirror-effect').show();
    }
}

/**
 * Set the current landscape and img index
 */
function updateLandscape() {
    let landscapeConfig = landscapes[currentLandscape];
    console.log(landscapeConfig, currentLandscape);
    let img = './images/' + landscapeConfig.imgs[currentLandscapeImg];
    let deepImg = '';
    if(currentDeepDreamPower == deepDreamPower.low) {
        deepImg = './images/' + landscapeConfig.deepDreamImgLow;
    } else if(currentDeepDreamPower == deepDreamPower.high) {
        deepImg = './images/' + landscapeConfig.deepDreamImgHigh;
    }
    $("#simulation-img").attr('src', img);
    $("#simulation-img-2").attr('src', img);
    $("#simulation-img-3").attr('src', img);
    $("#deep-dream").attr('src', deepImg);
    $("#mirror-effect").attr('src', img);
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
 * Find drug by name
 * @param {*} name 
 * @returns 
 */
 function findDrugByName(name) {
    drug = null;
    drugs.forEach(d => {
        if(d.name == name) {
            drug = d;
        }
    })
    return drug;
}