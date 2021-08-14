/**
 * Render consumption forms in list
 */
function renderMethods() {
    $('#method-list').empty();
    for(key in methods) {
        methodConfig = methods[key];
        let img = $('<img/>');
        img.attr('src', IMAGES_METHODS_PATH + '/' + methodConfig.img)
        img.attr('data-info', methodConfig.info)
        img.attr('class', 'method')
        img.attr('onclick', `startSimulation('${methodConfig.type}'); changeScreen(SCREENS.SIMULATION);`)
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
        div.attr('onclick', `selectSubstance('${key}')`)
        let img = $('<img/>');
        img.attr('src', IMAGES_EFFECTS_PATH + '/' + substance.img);
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
        power = limitRange(Math.floor(substanceAmount / 2), 1, 5);
        if(substanceConfig.stats.stimulant) {
            stimulant += power;
        }
        if(substanceConfig.stats.sedative) {
            sedative += power;
        }
        if(substanceConfig.stats.hallucinogic) {
            hallucinogic += power;
        }
        if(substanceConfig.stats.delirant) {
            delirant += power;
        }
        if(substanceConfig.stats.dissociative) {
            dissociative += power;
        }
        if(substanceConfig.stats.depressant) {
            depressant += power;
        }
    }
    if(stimulant > 5) stimulant = 5;
    if(sedative > 5) sedative = 5;
    if(hallucinogic > 5) hallucinogic = 5;
    if(delirant > 5) delirant = 5;
    if(dissociative > 5) dissociative = 5;
    if(depressant > 5) depressant = 5;

    stimulantData = STATS_LEVELS[stimulant];
    sedativeData = STATS_LEVELS[sedative];
    hallucinogicData = STATS_LEVELS[hallucinogic];
    delirantData = STATS_LEVELS[delirant];
    dissociativeData = STATS_LEVELS[dissociative];
    depressantData = STATS_LEVELS[depressant];
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
    let powerSum = 0;
    for(substance in selectedSubstances) {
        let substanceAmount = selectedSubstances[substance];
        let substanceConfig = substances[substance];
        let power = limitRange(Math.floor(substanceAmount / 2), 1, 5);
        powerSum += substanceConfig.power * power;
    }
    let powerConfig = null;
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
    $("#substance-power-label").html("(" + powerConfig.name + ")");
    changeProgressValue('#progress-power', parseInt(powerSum * 100 / maxSubstancePower))
    $("#progress-power").attr("class", "progress " + powerConfig.class);
}

/**
 * Show addiction in progress bar
 */
function renderAddiction() {
    $("#progress-addiction").css('width', parseInt(addiction * 100 / maxAddiction) + '%');
    let className = '';
    if(addiction == 0) {
        className = 'gray';
    } else if (addiction <= 40) {
        className = 'cyan';
    } else if (addiction <= 80) {
        className = 'orange';
    } else if (addiction <= 120) {
        className = 'yellow';
    } else if (addiction <= 160) {
        className = 'brown';
    } else if (addiction <= 200) {
        className = 'red';
    }
    $("#progress-addiction").attr('class', className + ' progress-addiction');
}

/**
 * Render points
 */
function renderPoints() {
    $("#points-label").html(points);
}
