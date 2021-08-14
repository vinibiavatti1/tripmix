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

}


