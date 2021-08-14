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
    if(addiction >= maxAddiction) {
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
