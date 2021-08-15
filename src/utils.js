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

/**
 * Return a random deep dream searching into the registered deep dreams
 */
function getRandomDeepDream() {
    return DEEP_DREAMS[randomInt(0, DEEP_DREAMS.length)];
}

/**
 * Return a random dissociative searching into the registered dissociatives
 */
 function getRandomDissociative() {
    return DISSOCIATIVES[randomInt(0, DISSOCIATIVES.length)];
}

/**
 * Change progress bar value
 * @param {*} selector
 * @param {*} value
 */
function changeProgressValue(selector, value) {
    $(selector).css('width', value + '%');
}

/**
 * Return the number inside the specified range
 * @param {*} number
 * @param {*} min
 * @param {*} max
 * @returns
 */
function limitRange(number, min, max) {
    if(!number) return min;
    if(number < min) return min;
    if(number > max) return max;
    return number;
}
