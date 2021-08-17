let currentStep = 0;
let lastStep = 6;
const stepName = {
    1: 'General Properties',
    2: 'Effect Properties 1',
    3: 'Effect Properties 2',
    4: 'CSS Filter Effects',
    5: 'Substance Script',
    6: 'Instructions',
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
    for(let i = 0; i <= lastStep; i++) {
        $("#step-" + i).hide();
    }
    $("#navigation").show();
    $('#next-btn').removeAttr('disabled');
    $('#back-btn').removeAttr('disabled');
    if(currentStep == 5) {
        generateCode();
    }
    if(currentStep <= 0) {
        currentStep = 0;
        $("#navigation").hide();
        $('#back-btn').attr('disabled', true);
    } else if(currentStep >= lastStep) {
        currentStep = lastStep;
        $('#next-btn').attr('disabled', true);
    }
    $("#step-" + currentStep).show();
    $("#step-name").html(stepName[currentStep]);
}

/**
 * Generate code
 */
function generateCode() {
    let code = TEMPLATE;
    let name = $("#s-name").val();
    code = code.replace('SUBSTANCE_NAME', name);
    code = code.replace('IMG', $("#s-img").val());
    code = code.replace('INFO', $("#s-info").val());
    code = code.replace('ADDICTION_LEVEL', $("#s-addiction-level").val());
    code = code.replace('SPECIAL', $("#s-special").val());
    code = code.replace('POWER', $("#s-power").val());
    code = code.replace('UNLOCK_POINTS', $("#s-unlock-points").val());
    code = code.replace('STIMULANT', $("#s-stimulant").val());
    code = code.replace('SEDATIVE', $("#s-sedative").val());
    code = code.replace('HALLUCINOGIC', $("#s-hallucinogic").val());
    code = code.replace('DELIRANT', $("#s-delirant").val());
    code = code.replace('DISSOCIATIVE', $("#s-dissociative").val());
    code = code.replace('DEPRESSANT', $("#s-depressant").val());

    code = code.replace('WALK_DELAY_EFFECT', $("#s-walk-delay-effect").val());
    code = code.replace('RANDOM_WALK_EFFECT', $("#s-random-walk-effect").val());
    code = code.replace('LOW_DELIRANT_EFFECT', $("#s-low-delirant-effect").val());
    code = code.replace('HIGH_DELIRANT_EFFECT', $("#s-high-delirant-effect").val());
    code = code.replace('MIRROR_EFFECT', $("#s-mirror-effect").val());
    code = code.replace('WHITE_NOISE_EFFECT', $("#s-white-noise-effect").val());
    code = code.replace('STARS_EFFECT', $("#s-stars-effect").val());
    code = code.replace('DMT_EFFECT', $("#s-dmt-effect").val());
    code = code.replace('LOW_EUPHORIC_EFFECT', $("#s-low-euphoric-effect").val());
    code = code.replace('HIGH_EUPHORIC_EFFECT', $("#s-high-euphoric-effect").val());
    code = code.replace('FLASH_EFFECT', $("#s-flash-effect").val());
    code = code.replace('SHADOW_PEOPLE_EFFECT', $("#s-shadow-people-effect").val());
    code = code.replace('LOW_DISSOCIATIVE_EFFECT', $("#s-low-dissociative-effect").val());
    code = code.replace('HIGH_DISSOCIATIVE_EFFECT', $("#s-high-dissociative-effect").val());
    code = code.replace('MELTING_EFFECT', $("#s-melting-effect").val());
    code = code.replace('VERTICAL_MIRROR_EFFECT', $("#s-vertical-mirror-effect").val());

    code = code.replace('DRUNK_1', $("#s-drunk-1").val());
    code = code.replace('DRUNK_2', $("#s-drunk-2").val());
    code = code.replace('DRUNK_3', $("#s-drunk-3").val());
    code = code.replace('DRUNK_4', $("#s-drunk-4").val());
    code = code.replace('DRUNK_5', $("#s-drunk-5").val());
    code = code.replace('DEEP_DREAM_1', $("#s-deep-dream-1").val());
    code = code.replace('DEEP_DREAM_2', $("#s-deep-dream-2").val());
    code = code.replace('DEEP_DREAM_3', $("#s-deep-dream-3").val());
    code = code.replace('DEEP_DREAM_4', $("#s-deep-dream-4").val());
    code = code.replace('DEEP_DREAM_5', $("#s-deep-dream-5").val());
    code = code.replace('EFFECTS_FROM_1', $("#s-effects-from-1").val());
    code = code.replace('EFFECTS_FROM_2', $("#s-effects-from-2").val());
    code = code.replace('EFFECTS_FROM_3', $("#s-effects-from-3").val());
    code = code.replace('EFFECTS_FROM_4', $("#s-effects-from-4").val());
    code = code.replace('EFFECTS_FROM_5', $("#s-effects-from-5").val());
    code = code.replace('EFFECTS_TO_1', $("#s-effects-to-1").val());
    code = code.replace('EFFECTS_TO_2', $("#s-effects-to-2").val());
    code = code.replace('EFFECTS_TO_3', $("#s-effects-to-3").val());
    code = code.replace('EFFECTS_TO_4', $("#s-effects-to-4").val());
    code = code.replace('EFFECTS_TO_5', $("#s-effects-to-5").val());
    code = code.replace('CATEGORY', $("#s-category").val());

    let methods = '';
    let comma = '';
    let eat = $("#s-eat").val()
    let drink = $("#s-drink").val()
    let smoke = $("#s-smoke").val()
    if(eat == 'true') {
        methods += comma + 'METHOD_TYPE.EAT'
        comma = ', ';
    }
    if(drink == 'true') {
        methods += comma + 'METHOD_TYPE.DRINK'
        comma = ', ';
    }
    if(smoke == 'true') {
        methods += comma + 'METHOD_TYPE.SMOKE'
        comma = ', ';
    }

    code = code.replace('METHODS', methods);
    $('#code').val(code);
    $('#file-name').html(name.toLowerCase() + '.js')
    $('#import-code').html(`&#60script src="${name.toLowerCase()}.js"></script>`);
}
