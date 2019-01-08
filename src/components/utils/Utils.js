const possibilities = {
    lowerCased: 'abcdefghijklmnopqrstuvwxyz',
    capitals: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    special: '~!@#$%^&()_+-={}[];\','
};

export function randomId(len, pattern) {
    if (!len) len = 30;
    if (!pattern) pattern = 'aA0';

    let chars = '';

    pattern.split('').forEach((a) => {
        if (!isNaN(parseInt(a))) {
            chars += possibilities.numbers;
        } else if (/[a-z]/.test(a)) {
            chars += possibilities.lowerCased;
        } else if (/[A-Z]/.test(a)) {
            chars += possibilities.capitals;
        } else {
            chars += possibilities.special;
        }
    });

    let result = '';

    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param number the number to clamp
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
export function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}