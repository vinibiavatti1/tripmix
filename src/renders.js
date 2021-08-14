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
    $("#progress-addiction").css('width', parseInt(addiction * 100 / maxAddiction) + '%');
    let className = '';
    if(addiction == 0) {
        className = 'l0b';
    } else if (addiction <= 40) {
        className = 'l1b';
    } else if (addiction <= 80) {
        className = 'l2b';
    } else if (addiction <= 120) {
        className = 'l3b';
    } else if (addiction <= 160) {
        className = 'l4b';
    } else if (addiction <= 200) {
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
