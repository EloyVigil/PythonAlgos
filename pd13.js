

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    let change = {
        'quarter' : 0,
        'dime' : 0,
        'nickel' : 0,
        'penny' : 0
    }
    
    if (val >= 25){
        change['quarter'] = Math.floor(val/25);
        val = val%25;
    }

    if (val >= 10){
        change['dime'] = Math.floor(val/10);
        val = val%10;
    }

    if (val >= 5){
        change['nickel'] = Math.floor(val/5);
        val = val%5;
    }

    if (val >= 1){
        change['penny'] = val;
    }

    for (key in change){
        console.log(key + ": " + change[key]);
    }
}