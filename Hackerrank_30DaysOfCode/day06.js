/* -- Let's Review --
Task: Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line.
Note: 0 is considered to be an even index. */

function processData(input) {
    if(typeof input !== 'string')
        throw new TypeError("Invalid type - string expexted");
    if(input.trim().length === 0)
        throw new TypeError("Input cannot be empty");
    const strsplit = input.split('\n').slice(1);
    for(let str of strsplit) {
        var evenS='', oddS='';
        for(let i=0; i<str.length; i++) {
            if(i%2 === 0) evenS += str[i];
            else oddS += str[i];
        }
        console.log(evenS + ' ' + oddS);
    }
}
