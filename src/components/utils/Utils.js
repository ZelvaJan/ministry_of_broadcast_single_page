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