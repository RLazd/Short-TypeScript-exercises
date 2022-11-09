/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    const clearInput= input.replace(/[^a-z\s-]/gi, '')
    let result = ''
    clearInput.split(/[- ]/g).forEach(word => {
        if (word){
            const firstLetterUpperCase = word[0].toUpperCase()
            result += firstLetterUpperCase
        }
    });
    return result
}
export { parse }; 
