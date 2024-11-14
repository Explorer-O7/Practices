/* -- Conditional Statements: If-Else --
Task: Complete the getGrade(score) function. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade according to the following rules:
 * If 25<score<=30, then grade=A.
 * If 20<score<=25, then grade=B.
 * If 15<score<=20, then grade=C.
 * If 10<score<=15, then grade=D.
 * If 5<score<=10, then grade=E.
 * If 0<=score<=5, then grade=F. */

function getGrade(score) {
    let grade;
    if(score>25 && score<=30)
        grade = 'A';
    else if(score>20 && score<=25)
        grade = 'B';
    else if(score>15 && score<=20)
        grade = 'C';
    else if(score>10 && score<=15)
        grade = 'D';
    else if(score>5 && score<=10)
        grade = 'E';
    else
        grade = 'F';
    return grade;
}

function main() {
    const score = +(readLine());
    console.log(getGrade(score));
}

/* -- Conditional Statements: Switch --
Task: Complete the getLetter(s) function. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
 * If the first character in string s is in the set {a,e,i,o,u}, then return A.
 * If the first character in string s is in the set {b,c,d,f,g}, then return B.
 * If the first character in string s is in the set {h,j,k,l,m}, then return C.
 * If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D. */

function getLetter(s) {
    let letter;
    if(new Set(["a","e","i","o","u"]).has(s[0]))
        letter = "A";
    else if(new Set(["b","c","d","f","g"]).has(s[0]))
        letter = "B";
    else if(new Set(["h","j","k","l","m"]).has(s[0]))
        letter = "C";
    else
        letter = "D";
    return letter;
}

function main() {
    const s = readLine();
    console.log(getLetter(s));
}

/* -- Loops --
Task: 1. First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
      2. Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s. */

function vowelsAndConsonants(s) {
    let vowelStr='', consonantStr='';
    for(let i=0; i<s.length; i++) {
        if(s.charAt(i)=="a" || s.charAt(i)=="e" || s.charAt(i)=="i" || s.charAt(i)=="o" || s.charAt(i)=="u")
            vowelStr += s[i]+'\n';
        else
            consonantStr += s[i]+'\n';
    }
    console.log(vowelStr.slice(0, vowelStr.length-1));
    console.log(consonantStr.slice(0, consonantStr.length-1));
}

function main() {
    const s = readLine();
    vowelsAndConsonants(s);
}
