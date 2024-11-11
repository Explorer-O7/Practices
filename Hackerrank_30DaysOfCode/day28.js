/* -- RegEx, Patterns, and Intro to Databases --
Task: Consider a database table, Emails, which has the attributes First Name and Email ID. Given N rows of data simulating the Emails table, print an alphabetically-ordered list of people whose email address ends in @gmail.com. */

function main() {
    const N = parseInt(readLine().trim(), 10);
    var orderedUsers = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
        const firstName = firstMultipleInput[0];
        const emailID = firstMultipleInput[1];
        if(firstName.length<=20 && /[a-z]/.test(firstName) && emailID.length<=50 && emailID.endsWith('@gmail.com'))
                orderedUsers.push(firstName);
    }
    console.log(orderedUsers.sort().join('\n'));
}
