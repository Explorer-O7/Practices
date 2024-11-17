/* -- Regular Expressions I --
Task: Complete the function below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u. */

function regexVar() {
    const re = /^([aeiou]).*\1$/;
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    console.log(re.test(s));
}

/* -- Regular Expressions II --
Task: Complete the function below by returning a RegExp object, re, that matches any string s satisfying both of the following conditions:
 1. String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
 2. The remainder of string s (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]). */

function regexVar() {
    const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    console.log(!!s.match(re));
}

/* -- Regular Expressions III --
Task: Complete the function in the editor below by returning a RegExp object, re, that matches every integer in some string s. */

function regexVar() {
    const re = /-?\d+/g;
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    const r = s.match(re);
    for (const e of r) {
        console.log(e);
    }
}
