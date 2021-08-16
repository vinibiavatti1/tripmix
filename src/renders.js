/**
 * Render SEO data
 */
function renderSeoData() {
    $('title').html(TITLE);
    $('meta[name=keywords]').attr('content', META_KEYWORDS);
    $('meta[name=description]').attr('content', META_DESCRIPTION);
    $('meta[name=author]').attr('content', AUTHOR);
    $('#title').html(TITLE);
    $('#description').html(DESCRIPTION);
    $('#version').html(VERSION);
    $('#github').attr('href', GITHUB_REPO);
    $('#download').attr('href', DOWNLOAD_LINK);
    $('#marquee').html(MARQUEE_CONTENT);
}

/**
 * Render consumption forms in list
 */
function renderMethods() {
    $('#method-list').empty();
    for(key in METHODS) {
        methodConfig = METHODS[key];
        if(points < methodConfig.unlockPoints) {
            continue;
        }
        let img = $('<img/>');
        img.attr('src', IMAGES_METHODS_PATH + '/' + methodConfig.img)
        img.attr('data-info', methodConfig.info)
        img.attr('class', 'method')
        img.attr('data-type', methodConfig.type);
        img.attr('onclick', `startSimulation('${methodConfig.type}');`)
        $('#method-list').append(img);
    }
    addInfoHandle('.method');
}

/**
 * Render substance in list
 */
function renderSubstances() {
    $('#substances').empty();
    for(key in SUBSTANCES) {
        let substanceConfig = SUBSTANCES[key];
        if(!DEBUG && points < substanceConfig.unlockPoints) {
            continue;
        }
        if(key == 'Adrenochrome' && !adrenochrome) {
            continue;
        }
        let div = $('<div></div>');
        let specialInfo = substanceConfig.special ? '(special) ' : '';
        div.attr('data-info', specialInfo + substanceConfig.info);
        div.attr('data-name', key);
        let special = substanceConfig.special ? ' special-substance' : '';
        div.attr('class', 'substance' + special);
        div.attr('onclick', `selectSubstance('${key}')`)
        let img = $('<img/>');
        img.attr('src', IMAGES_SUBSTANCES_PATH + '/' + substanceConfig.img);
        img.attr('width', 50);
        img.attr('height', 50);
        let p = $('<p></p>');
        p.html(key);
        div.append(img)
        div.append(p)
        $('#substances').append(div);
    }
    addInfoHandle('.substance');
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
        let substanceConfig = SUBSTANCES[substance];
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
        let substanceConfig = SUBSTANCES[substance];
        let power = limitRange(Math.floor(substanceAmount / 2), 1, 5);
        powerSum += substanceConfig.power * power;
    }
    let powerConfig = null;
    if(powerSum == 0) {
        powerConfig = POWER_LEVELS[0];
    } else if(powerSum < 10) {
        powerConfig = POWER_LEVELS[1];
    } else if(powerSum < 20) {
        powerConfig = POWER_LEVELS[2];
    } else if(powerSum < 35) {
        powerConfig = POWER_LEVELS[3];
    } else if(powerSum < 45) {
        powerConfig = POWER_LEVELS[4];
    } else {
        powerConfig = POWER_LEVELS[5];
    }
    if(powerSum > 50) {
        powerSum = 50;
    }
    $('#substance-power-label').html('(' + powerConfig.name + ')');
    changeProgressValue('#progress-power', parseInt(powerSum * 100 / maxSubstancePower))
    $('#progress-power').attr('class', 'progress ' + powerConfig.class);
}

/**
 * Show addiction in progress bar
 */
function renderAddiction() {
    $('#progress-addiction').css('width', parseInt(addiction * 100 / maxAddiction) + '%');
    let className = '';
    if(addiction == 0) {
        className = 'gray';
    } else if (addiction <= 40) {
        className = 'cyan';
    } else if (addiction <= 80) {
        className = 'green';
    } else if (addiction <= 120) {
        className = 'yellow';
    } else if (addiction <= 160) {
        className = 'orange';
    } else {
        className = 'red';
    }
    $('#progress-addiction').attr('class', className + ' progress-addiction');
}

/**
 * Render points
 */
function renderPoints() {
    $('#points-label').html(points);
}

/**
 * Render landscapes into select
 */
function renderLandscapes() {
    $('#landscape').empty();
    for(land in LANDSCAPES) {
        $('#landscape').append(`<option value="${land}">${land}</option>`);
    }
}
