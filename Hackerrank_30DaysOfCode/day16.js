/* -- Exceptions-String to Integer --
Task: Read a string, S, and print its integer value; if S cannot be converted to an integer, print Bad String. */

function main() {
    const S = readLine();
    var num;
    try {
        console.log(eval(S));
    } catch(err) {
        console.log("Bad String");
    }
}
