/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;



const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

const strA4 = "ThIs Is A sTrIng";
const srtB4 = "This is a string";
const expected4 = true





/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {
    var lowerCaseA = strA.toLowercase();
    var lowerCaseB = strB.toLowerCase();
    if (lowerCaseA == lowerCaseB) {
        console.log(true)
    }

    if (lowerCaseA = strA.toLowercase() == lowerCaseB = strB.toLowerCase();) {
        console.log(false)
    }
}



/* 
String: Reverse
Given a string,
return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";



//  * Reverses the given str.
//   * - Time: O(?).
//   * - Space: O(?).
//   * @param { string } str String to be reversed.
// * @returns { string } The given str reversed.

// function reverseString(str) {}


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log(reverseString(str4));
