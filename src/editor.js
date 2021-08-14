let currentStep = 0;
const stepName = {
    1: 'General Properties',
    2: 'Effect Properties',
    3: 'CSS Filter Effects',
    4: 'Substance Script',
    5: 'Instructions',
}

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
    renderSeoData();
}

/**
 * Render SEO data
 */
function renderSeoData() {
    $('title').html(TITLE);
    $('meta[name=keywords]').attr('content', META_KEYWORDS);
    $('meta[name=description]').attr('content', META_DESCRIPTION);
    $('meta[name=author]').attr('content', AUTHOR);
    $('#title').html(TITLE);
    $('#version').html(VERSION);
    $('#github').attr('href', GITHUB_REPO);
}

/**
 * Change the screen
 * @param {*} screen
 */
 function changeStep() {
    $("#intro").hide();
    $("#step-1").hide();
    $("#step-2").hide();
    $("#step-3").hide();
    $("#step-4").hide();
    $("#step-5").hide();
    $("#navigation").show();
    $('#next-btn').removeAttr('disabled');
    $('#back-btn').removeAttr('disabled');
    if(currentStep == 4) {
        generateCode();
    }
    if(currentStep <= 1) {
        currentStep = 1;
        $('#back-btn').attr('disabled', true);
    } else if(currentStep >= 5) {
        currentStep = 5;
        $('#next-btn').attr('disabled', true);
    }
    $("#step-" + currentStep).show();
    $("#step-name").html(stepName[currentStep]);
}

/**
 * Generate code
 */
function generateCode() {
    
}
