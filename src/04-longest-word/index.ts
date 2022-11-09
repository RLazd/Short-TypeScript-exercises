/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 * 
 */

function longestWord(sen: string) {
    let cleanSen: string = sen.replace(/([^A-Z ])/gi, '');
    let cleanArr: string[] = cleanSen.split(' ');
    let longestChr = 0
    let word = null
    cleanArr.forEach(w => {
        if (longestChr < w.length) {
            longestChr = w.length;
            word = w
        }
    });
    return word
}

export { longestWord };
